import '../../css/components/_navbar.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// open submenu
setTimeout(function() {
  const dropdown = document.querySelector('.nav__dropdown');
  const submenu = document.querySelector('.nav__submenu');

  function handleDropdownClick() {
    // Toggle the class on click
    submenu.classList.toggle('submenu-open');
  }

  // Check if dropdown exists
  if (dropdown) {
    dropdown.addEventListener('click', handleDropdownClick);
  } 
}, 1000);  // Delay of 1 second



// Initializing GSAP animation variables
var lastScrollTop = 0;
var scrollThreshold = 100; // Set a threshold of 100px from the top

// Scroll event listener
window.addEventListener('scroll', function() {
  var currentScroll = window.scrollY; // Use window.scrollY to get the current scroll position
  var navbar = document.querySelector('.navbar');

  // Check if the user has scrolled more than 100px
  if (currentScroll > scrollThreshold) {
    // If the user is scrolling down
    if (currentScroll > lastScrollTop) {
      gsap.to(navbar, { y: '-100%', duration: 0.5, ease: 'power2.out' });
    } 
    // If the user is scrolling up
    else {
      gsap.to(navbar, { y: '0%', duration: 0.5, ease: 'power2.out' });
      navbar.classList.add('menu-small'); // Remove "menu-hide" class when scrolling up
    }
  } 
  // Ensure the navbar is visible when near the top of the page
  else {
    gsap.to(navbar, { y: '0%', duration: 0.5, ease: 'power2.out' });
    navbar.classList.remove('menu-small'); // Remove "menu-hide" when at the top
  }

  // Update lastScrollTop with the current scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});


// disable scroll when menu is open
let isMenuOpen = false;

const navigationButton = document.querySelector(".w-nav-button");
navigationButton.addEventListener('click', function (event) {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
      document.querySelector('.navbar').classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction= "none";
      document.body.style.position= "fixed";   // nekad mora i ovo da se doda
  } else {
      document.querySelector('.navbar').classList.remove('menu-open');
      document.body.style.overflow = 'auto';
      document.body.style.touchAction= "auto";
      document.body.style.position= "static"; // nekad mora i ovo da se doda
  }
 });