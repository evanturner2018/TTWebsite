//runs when document is ready
$(document).ready(function() {
    let h = $(window).height();
    let w = $(window).width();
    let rushY = $("#rush").position().top;

    $("#background").append("<img src=\"H_T.jpg\" id=\"HT\"></img>");
    $("#background").css("height", h+"px");

    //adds an element called front page that will hold content for front page
    $("#background").append("<div id=\"frontPage\">&Theta;&Tau;</div>");

    //start just below center and invisible
    $("#frontPage").css("opacity","0")
        .css("font-size",h/4+"px");

    $("#frontPage").append("<p id=\"subHead\">Sigma Chapter</p>");
    $("#subHead").css("font-size","20%")
        .css("color", "gray")
        .css("opacity", "0") //starts invisible, then it'll fade in
        .css("position", "absolute")
        .css("width", "100%");

    $("#frontPage").animate({
        opacity : "1"
    }, 1000, function() {
        //fade in the "sigma chapter" and image together
        $("#subHead").animate({
            opacity : 1,
            top : "65%"
        }, 1000);
        $("#HT").animate({
            opacity : .1
        }, 1000);
        $("#scrollButton").fadeIn(1000);
    });

    $(".face").mouseover(function() {
        $(this).animate({
            opacity : .7
        }, 200);
    });
    $(".face").mouseout(function() {
        $(this).animate({
            opacity : 0
        }, 200);
    })

    //center the scroll button
    $("#scrollButton").css("left",w/2-25+"px");

    let once = true;
    //fade button out and insta in on scroll
    $(window).scroll(function() {
        let pos = $(window).scrollTop();
        if(pos == 0) {
            $("#scrollButton").slideDown();
            $("#instaButton").fadeOut();
        } else {
            $("#scrollButton").slideUp();
            $("#instaButton").fadeIn();
        }

        //enlarge blurb
        if(pos > 1620 && once) {
            let message = "Join the brotherhood";
            $(".blurb").toggleClass("active", true);
            $(".active").toggleClass("blurb", false);
            $(".active").append(message);
            once = false;
        }
    });

    //center each tag under face
    $(".tag").each(function() {
        let offset = $(this).width()/4;
        $(this).css("left", -1*offset+"px");
    });

    //make faces
    $(".face").each(function() {

        //vertical position
        let y = $("#rush").position().top + parseInt($(this).attr("y"));
        $(this).css("top",y+"px");

        //horizontal position
        let initWid = 983;
        let x = ($(window).width() - initWid) / 2;
        x += parseInt($(this).attr("x"));
        $(this).css("left", x+"px");
    });

    //recalculate positioning
    $(window).resize(function() {
        h = $(window).height();
        w = $(window).width();
        $("#background").css("height", h+"px");
        $("#frontPage").css("font-size",h/4+"px");
        $("#house").css("height",$("#house").width()*.9+"px");
        $("#alumni").css("height",$("#alumni").width()*.9+"px");
        $("#scrollButton").css("left",w/2-25+"px");

        //adjust faces
        $(".face").each(function() {
            let y = $("#rush").position().top + parseInt($(this).attr("y"));
            $(this).css("top", y+"px");
            let initWid = 983;
            let x = ($(window).width() - initWid) / 2;
            x += parseInt($(this).attr("x"));
            $(this).css("left", x+"px");
        });
    });

    //used to find face positions
    console.log("screen width: "+$(window).width());
    $("#rush").click(function(e) {
        let x = e.pageX-20 - $("body").offset().left;
        let y = e.pageY-25 - $("body").offset().top;
        let str = "<div class=\"sample\" style=\"left:"+x+"px; top:"+y+"px\"></div>";
        //$("#rush").append(str);
    });

    $(window).click(function() {
        console.log($(window).scrollTop());
    });
});