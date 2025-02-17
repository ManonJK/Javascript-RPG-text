let i = 1;

//Animation du titre de la page
document.addEventListener('DOMContentLoaded', ()=> {
    let mytimeline = anime.timeline({
        delay: function (el, i) {
            return i * 200
        }
    });
    mytimeline.add({
        targets: '.cover',
        left: ['-100%', '100%'],
        easing: 'easeOutExpo',
        duration: 2000
        // delay: (el, i)=>i*200
    });
    mytimeline.add({
        targets: '.text',
        top: ['75%', '50%'],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
    }, '-=1200');
    mytimeline.add({
        targets: '.content',
        translateY: '-=300',
        easing: 'easeOutExpo',
        duration: 2000,
    }, '-=700');
    mytimeline.add({
        targets: '#milieu #thebeggining .content',
        opacity: '1',
        duration: 250,
        easing: 'easeOutExpo',
        begin: function () {
            document.querySelector(".content").style.top = '40%';
            document.querySelector("#milieu").style.display = "flex";                document.querySelector("#milieu").style.display = "flex";
            document.querySelector("#thebeggining").style.display = "flex";
        }
    });
});


//Animation au clic du bouton Commencer
function affichetout() {
        document.querySelector('#myherostats').classList.toggle('show');
        document.querySelector('#myherostats').classList.toggle('animated');
        document.querySelector('#ennemistats').classList.toggle('show');
        document.querySelector('#ennemistats').classList.toggle('animated');
}


//Animation texte histoire
function WriteStory(string) {
let story = document.getElementById('story');

let typewriter = new Typewriter(story, {
    loop: false,
    cursor: '',
    delay: 50,
    // changeDelay: 100,
});

typewriter.typeString(string)
    .start();
}


//Animation de fin de jeu
function confettis(){
    document.getElementById('body').innerHTML += "<canvas class=\"fireworks\"></canvas>";

    window.human = false;

    let canvasEl = document.querySelector('.fireworks');
    let ctx = canvasEl.getContext('2d');
    let numberOfParticules = 30;
    let pointerX = 0;
    let pointerY = 0;
    let tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
    let colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

    function setCanvasSize() {
        canvasEl.width = window.innerWidth * 2;
        canvasEl.height = window.innerHeight * 2;
        canvasEl.style.width = window.innerWidth + 'px';
        canvasEl.style.height = window.innerHeight + 'px';
        canvasEl.getContext('2d').scale(2, 2);
    }

    function updateCoords(e) {
        pointerX = e.clientX || e.touches[0].clientX;
        pointerY = e.clientY || e.touches[0].clientY;
    }

    function setParticuleDirection(p) {
        let angle = anime.random(0, 360) * Math.PI / 180;
        let value = anime.random(50, 180);
        let radius = [-1, 1][anime.random(0, 1)] * value;
        return {
            x: p.x + radius * Math.cos(angle),
            y: p.y + radius * Math.sin(angle)
        }
    }

    function createParticule(x,y) {
        let p = {};
        p.x = x;
        p.y = y;
        p.color = colors[anime.random(0, colors.length - 1)];
        p.radius = anime.random(16, 32);
        p.endPos = setParticuleDirection(p);
        p.draw = function() {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        return p;
    }

    function createCircle(x,y) {
        let p = {};
        p.x = x;
        p.y = y;
        p.color = '#FFF';
        p.radius = 0.1;
        p.alpha = .5;
        p.lineWidth = 6;
        p.draw = function() {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.lineWidth = p.lineWidth;
            ctx.strokeStyle = p.color;
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
        return p;
    }

    function renderParticule(anim) {
        for (let i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
        }
    }

    function animateParticules(x, y) {
        let circle = createCircle(x, y);
        let particules = [];
        for (let i = 0; i < numberOfParticules; i++) {
            particules.push(createParticule(x, y));
        }
        anime.timeline().add({
            targets: particules,
            x: function(p) { return p.endPos.x; },
            y: function(p) { return p.endPos.y; },
            radius: 0.1,
            duration: anime.random(1200, 1800),
            easing: 'easeOutExpo',
            update: renderParticule
        })
            .add({
                targets: circle,
                radius: anime.random(80, 160),
                lineWidth: 0,
                alpha: {
                    value: 0,
                    easing: 'linear',
                    duration: anime.random(600, 800),
                },
                duration: anime.random(1200, 1800),
                easing: 'easeOutExpo',
                update: renderParticule,
                offset: 0
            });
    }

    let render = anime({
        duration: Infinity,
        update: function() {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        }
    });

    document.addEventListener(tap, function(e) {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
    }, false);

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    function autoClick() {
        if (window.human) return;
        animateParticules(
            anime.random(centerX-50, centerX+50),
            anime.random(centerY-50, centerY+50)
        );
        anime({duration: 200}).finished.then(autoClick);
    }

    autoClick();
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);
}
