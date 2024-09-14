import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import '../../css/animations/_fade-from-bottom.scss';


gsap.registerPlugin(ScrollTrigger);

// Function to initialize animations
function initializeAnimations() {
  const fadeFromLeftElements = document.querySelectorAll("[fade-from-bottom='true']");

  fadeFromLeftElements.forEach((element) => {
    let targets = element;

    // If the element has the split-lines='true' attribute, split the text into lines
    if (element.hasAttribute('split-lines')) {
      const splitTypeInstance = new SplitType(element, { types: 'lines', tagName: 'span' });
      targets = splitTypeInstance.lines;
    }


    // GSAP animation
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: targets instanceof NodeList || Array.isArray(targets) ? 0.2 : 0, // Apply stagger only if it's a collection of elements
      ease: "back.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
        once: true,
        invalidateOnRefresh: true, // Recalculate positions on screen resize
        toggleActions: 'play none none none',
      }
    });
  });
}

// Initialize the animations
initializeAnimations();
