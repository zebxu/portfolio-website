// Select DOM Item
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const bar = document.querySelector('.bar');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

var navbar = document.querySelector('.bar');
var sticky = navbar.offsetTop;

console.log('currentY:' + sticky);
console.log('originalY' + navbar.offsetTop);

function hideBar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('show-bar');
  } else {
    navbar.classList.remove('show-bar');
  }
}

function showBar() {
  // if document.body.scrollTop >
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}
