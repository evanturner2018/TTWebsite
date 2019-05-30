//runs when document is ready
$(document).ready(function() {
    let h = $(window).height();
    let w = $(window).width();
    
    //adds an element called front page that will hold content for front page
    $("#background").append("<div id=frontPage></div>");
    $("#frontPage").css("background-color","blue")
        .css("height","0px")
        .css("width","0px")
        .css("top",h/2+"px")
        .css("left",w/2+"px");
    
    $("#frontPage").animate({
        top : "0px",
        left : "0px",
        width : w+"px",
        height : h+"px"
    });
    
    console.log("help");
});
