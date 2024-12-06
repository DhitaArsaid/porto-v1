/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
// Add the 'scrolled' class to navbar on scroll
window.onscroll = function () {
    var navbar = document.getElementById("mainNav");
    if (window.scrollY > 50) { // You can adjust this value
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    const targetPosition = aboutSection.offsetTop; // Get the section's position
    const startPosition = window.scrollY; // Current scroll position
    const distance = targetPosition - startPosition; // Distance to scroll
    const duration = 1000; // Animation duration in milliseconds
    let startTime = null;

    function animationScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    // Ease-in-out quadratic function for a smooth effect
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
}
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle svg circle:last-child");

    const animateCircles = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const percentage = circle.dataset.percentage; // Get the percentage from the data attribute
                const dashOffset = 282 - (282 * percentage) / 100; // Calculate stroke-dashoffset
                circle.style.transition = "stroke-dashoffset 2s ease-out"; // Smooth animation
                circle.style.strokeDashoffset = dashOffset; // Apply new offset
                observer.unobserve(circle); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(animateCircles, { threshold: 0.5 });

    circles.forEach((circle) => {
        circle.style.strokeDashoffset = 282; // Initial offset (hidden state)
        observer.observe(circle);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");
  
    skillCards.forEach((card) => {
      const circle = card.querySelector("circle:last-child");
      const percentage = card.querySelector(".percentage");
      const percentageValue = parseInt(circle.getAttribute("data-percentage"), 10);
  
      // Hitung lingkaran
      const radius = circle.getAttribute("r");
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percentageValue / 100) * circumference;
  
      // Atur stroke-dasharray untuk lingkaran
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`; // Mulai dari kosong
  
      // Animasi lingkaran
      setTimeout(() => {
        circle.style.strokeDashoffset = `${offset}`;
      }, 100); // Jeda sebelum animasi lingkaran dimulai
  
      // Animasi teks persentase
      let currentPercentage = 0;
      const animationDuration = 1000; // Durasi animasi (ms)
      const stepTime = Math.max(Math.floor(animationDuration / percentageValue), 10);
  
      const interval = setInterval(() => {
        if (currentPercentage < percentageValue) {
          currentPercentage++;
          percentage.textContent = `${currentPercentage}%`;
        } else {
          clearInterval(interval); // Hentikan animasi jika sudah mencapai nilai akhir
        }
      }, stepTime);
    });
  });
  
  
// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to each navbar link for smooth scroll behavior
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent default action (jumping to section instantly)
            event.preventDefault();

            // Get the target section ID from the href attribute (remove the '#')
            const targetId = this.getAttribute('href').substring(1);

            // Get the target element
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll behavior
                block: 'start' // Scroll to the start of the section
            });
        });
    });
});


document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Adaptive colors for header and about us
    const isDarkMode = document.body.classList.contains('dark-mode');
    const headerText = document.querySelector('.masthead h1');
    const aboutText = document.querySelector('#about');
    
    if (headerText) {
        headerText.style.color = isDarkMode ? '#ffffff' : '#000000';
    }
    
    if (aboutText) {
        aboutText.style.color = isDarkMode ? '#e0e0e0' : '#333333';
    }
});
//JavaScript for Dynamic Year -->
document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});


 document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});



