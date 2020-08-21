// When the user scrolls down 50px from the top of the document, resize the header's font size
var screenSize = parseInt(window.screen.width);

$(window).scroll(function () {
    if (screenSize > 767) {
        scrollFunction();
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


/* Email.js API */
function sendFunction() {
    document.getElementById('myform').addEventListener('submit', function(event) {
        event.preventDefault();
        // generates the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('JL', 'jl_snickeri', this).then(function(){ 
            alert("Sent!");
               myform.find("#submit").text("Send");
        }, function(err) {
               alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
              myform.find("input").text("Send");
        });
      return false;
    });
}