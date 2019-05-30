//runs when document is ready
$(document).ready(function() {
    let h = $(window).height();
    let w = $(window).width();

    //adds an element called front page that will hold content for front page
    $("#background").append("<div id=frontPage></div>");

    //front page should cover the starting screen
    $("#frontPage").css("background-color","blue")
        .css("width",w+"px")
        .css("height",h+"px");

    $("#frontPage").append("<h1>Head</h1>");
    
    console.log($("#frontPage").height());
});
