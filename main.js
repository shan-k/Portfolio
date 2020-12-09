var app = document.getElementById('type');

var typewriter = new Typewriter(app, {
    loop: !true
});
typewriter.typeString('Hi, I\'m Shannon Kelly')
    .start();


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "15vh";
        mybutton.style.display = "block";
    } else {
        document.getElementById("navbar").style.height = "10vh";
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var togglebutton = document.getElementsByClassName('toggle')[0]
var navlinks = document.getElementsByClassName('links')[0]

togglebutton.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})