const nav = document.querySelector("nav");
const burgerBtn = document.querySelector(".burgerBtn");
const burgerBtnID = document.getElementById('burgerBtnID');
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");


nav.addEventListener('click', function() {
    nav.classList.add('active');
    header.style.display = 'block';
});

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

window.addEventListener('click' , function(e) {
    if(e.target.id !== 'burgerBtnID') {
        burgerBtn.classList.remove('active');
        navbar.classList.remove('active');
    }
});
