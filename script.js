//runs when document is ready
$(document).ready(function() {
    let h = $(window).height();
    let w = $(window).width();

    $("#background").append("<img src=\"H_T.jpg\" id=\"HT\"></img>");
    $("#background").css("height", h+"px");

    //adds an element called front page that will hold content for front page
    $("#background").append("<div id=\"frontPage\">&Theta;&Tau;</div>");

    //start just below center and invisible
    $("#frontPage").css("opacity","0")
        .css("top","300px");

    $("#frontPage").append("<p>Sigma Chapter</p>");
    $("p").css("font-size","25px")
        .css("color", "gray")
        .css("opacity", "0") //starts invisible, then it'll fade in
        .css("top","65px") //got this number by guessing
        .css("position", "absolute")
        .css("width", "150px")
        .css("right", "-10px"); //idk why -10 but it wasn't centered

    $("#frontPage").animate({
        top : "250px",
        opacity : "1"
    }, 1000, function() {
        //fade in the "sigma chapter" and image together
        $("p").animate({
            opacity : 1,
            top : "75px"
        }, 1000);
        $("#HT").animate({
            opacity : .1
        }, 1000);
        $("#scrollButton").fadeIn(1000);
    });

    //center the scroll button
    $("#scrollButton").css("left",w/2-20+"px");

    $(window).scroll(function() {
        let pos = $(window).scrollTop();
        if(pos == 0) {
            $("#scrollButton").slideDown();
            $("#instaButton").fadeOut();
        } else {
            $("#scrollButton").slideUp();
            $("#instaButton").fadeIn();
        }
    });
});