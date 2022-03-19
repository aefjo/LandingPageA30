const nav = document.querySelector('nav');
const toggle = document.querySelector('#toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click' , function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll' , function() {
    nav.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('click' , function(e) {
    if(e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        }
});