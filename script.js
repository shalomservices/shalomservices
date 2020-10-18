var menuBtn = document.querySelector('.menu-btn');
var mainMenu = document.querySelector('.main-menu');
var backdrop = document.querySelector('.backdrop');

menuBtn.addEventListener('click',() => {
    mainMenu.classList.toggle('show-nav');
    backdrop.classList.toggle('show-backdrop');
});

backdrop.addEventListener('click',function() {
    backdrop.classList.toggle('show-backdrop');
    mainMenu.classList.toggle('show-nav');
});