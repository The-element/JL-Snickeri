// When the user scrolls down 50px from the top of the document, resize the header's font size
var screenSize = parseInt(window.screen.width);
var show = 0;

$(window).scroll(function() {
    scrollFunction();
});

/*Changes the style and height of the header*/
function scrollFunction() {
    if (screenSize > 767) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.height = "60px";
            document.getElementById("header").style.fontSize = "14px";
            document.getElementById("logo-header").style.height = "60px";
        } else {
            document.getElementById("header").style.height = "83px";
            document.getElementById("header").style.fontSize = "16px";
            document.getElementById("logo-header").style.height = "70px";
        }
    } else {
            document.getElementById("header").style.height = "83px";
            document.getElementById("header").style.fontSize = "16px";
            document.getElementById("logo-header").style.height = "70px";
    }
}