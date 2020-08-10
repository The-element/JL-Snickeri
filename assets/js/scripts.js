// When the user scrolls down 50px from the top of the document, resize the header's font size
var screenSize = parseInt(window.screen.width);
//var count = 0;

$(window).scroll(function () {
    if (screenSize > 767) {
        scrollFunction();
    } else if (screenSize < 768) {
        rearrangeSize();
        //count++;
    } else {
        rearrangeBack();
    }
});

/*Changes the style and height of the header*/
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("header").style.fontSize = "14px";
        document.getElementById("logo-header").style.height = "60px";
        document.getElementById("header").style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.8)";
    }else{
        document.getElementById("header").style.height = "83px";
        document.getElementById("header").style.fontSize = "16px";
        document.getElementById("logo-header").style.height = "70px";
        document.getElementById("header").style.boxShadow = "0 0";
    };
}

function rearrangeSize() {
    $("#col-1").html(`
        <div class="animationentry">
            <div class="crw_bg" class="animated-2 slideInRight-2">
                <img src="assets/images/home-design1.jpg" class="animated slideInRight"/>
            </div>
        </div>`
    );
    $("#col-2").html(`
        <p style="color: black; text-align: right; padding-top: 200px; margin-right:30px;">
            Arctic Hotell Sommaröy
        </p>`
    );
}

function rearrangeBack(){
    $("#col-1").html(`
        <p style="color: black; text-align: right; padding-top: 200px; margin-right:30px;">
            Arctic Hotell Sommaröy
        </p>`);
    $("#col-2").html(`
        <div class="animationentry">
            <div class="crw_bg" class="animated-2 slideInRight-2">
                <img src="assets/images/home-design1.jpg" class="animated slideInRight"/>
            </div>
        </div>`
    );
}