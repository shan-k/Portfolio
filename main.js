var app = document.getElementById('type');

var typewriter = new Typewriter (app, {
    loop: !true
});
typewriter.typeString('Hi, I\'m Shannon Kelly')
    .start();
