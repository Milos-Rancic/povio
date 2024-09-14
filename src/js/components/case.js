import '../../css/components/_case.scss';

// Initialize GSAP ScrollTrigger animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Target all elements with the class "case__block"
gsap.utils.toArray('.case__block').forEach(function(block) {
  // Apply animation when the element is scrolled into view
  gsap.to(block, {
    '--pseudo-width': '1640px', // Update the CSS variable to expand width to 100%
    duration: 1, // Fixed duration of 1 second
    ease: 'power2.out', // Easing for smoothness
    scrollTrigger: {
      trigger: block,
      start: 'top 95%', // When the element is 80% in view
      toggleActions: 'play none none none', // Play only, no reverse
    }
  });
});

document.querySelectorAll('.case__block').forEach(function(block) {
  // Get the background color from the data attribute
  const bgColor = block.getAttribute('background-color');
  
  // Create a style rule to apply the background color to the pseudo-element
  block.style.setProperty('--pseudo-bg-color', bgColor);
});