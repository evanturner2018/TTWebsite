//runs when document is ready
$(document).ready(function() {
    let h = $(window).height();
    let w = $(window).width();

    //adds an element called front page that will hold content for front page
    $("#background").append("<div id=\"frontPage\">&Theta;&Tau;</div>");

    //start just below center and invisible
    $("#frontPage").css("opacity","0")
        .css("top","300px");

    $("#frontPage").animate({
        top : "250px",
        opacity : "1"
    }, 1000);
});
