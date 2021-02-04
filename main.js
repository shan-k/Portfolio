var typeString = ['I am Shannon Kelly'];
var i = 0;
var count = 0
var selectedText = 'I am';
var text = 'I am';

(function type() {
    if (count == typeString.length) {
        count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById('typing').innerHTML = text;
    if (text.length === selectedText.length) {
    }
    setTimeout(type, 200);

}());




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar").style.height = "15vh";
        mybutton.style.display = "block";
    } else {
        document.getElementById("navbar").style.height = "15vh";
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

navSlide();