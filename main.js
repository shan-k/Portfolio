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