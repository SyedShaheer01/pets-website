
// TOGGLE NAVBAR

const menu = document.querySelector('.bx-menu-alt-right');
const navbar = document.querySelector('.responsive_menu');
const cross = document.querySelector('.bx-x');

menu.onclick = () => {
    navbar.classList.add('active');
}

cross.onclick = () => {
    navbar.classList.remove('active');
}


function story(){
    navbar.classList.remove('active');
   

}

let bg = document.getElementById("header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        bg.classList.add("white");
    } else {
        bg.classList.remove("white");
    }
});



const video = document.getElementById('myVideo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
}, {
    threshold: 0.5 
});

observer.observe(video);
