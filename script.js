//runs when document is ready
$(document).ready(function() {
    let h = $(window).height();
    let w = $(window).width();

    $("#background").append("<img src=\"H_T.jpg\"></img>");

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
        $("img").animate({
            opacity : .1
        }, 1000);
    });

    
});
