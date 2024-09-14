import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../../css/components/_stats.scss';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to animate the number increment using GSAP and ScrollTrigger
function animateIncrement(element) {
  const targetValue = +element.getAttribute('data-target'); // Final value from data-target
  const stepValue = +element.getAttribute('data-step') || 1; // Increment step from data-step
  const hasDecimals = element.getAttribute('data-decimal') === 'true'; // Check if decimals are used

  gsap.fromTo(element, {
    innerHTML: 0
  }, {
    innerHTML: targetValue,
    duration: 2,
    ease: "power1.out",
    snap: { innerHTML: stepValue }, // Snap to the increment step
    onUpdate: function () {
      const currentValue = this.targets()[0].innerHTML;
      if (hasDecimals) {
        // If decimals are allowed, update with one decimal place
        element.textContent = (parseFloat(currentValue)).toFixed(1);
      } else {
        // Otherwise, update with whole numbers
        element.textContent = Math.floor(currentValue);
      }
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%", // Trigger when element is 80% into the viewport
      once: true // Animation happens only once
    }
  });
}

// Select all elements with the class 'increment' and animate them
document.querySelectorAll('.increment').forEach(element => {
  animateIncrement(element);
});