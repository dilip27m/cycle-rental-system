// script.js

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var leftCorner = document.querySelector('.left-corner');
    var rightCorner = document.querySelector('.right-corner');
    
    menuIcon.classList.toggle('menu-open');
    leftCorner.classList.toggle('menu-open');
    rightCorner.classList.toggle('menu-open');
}
