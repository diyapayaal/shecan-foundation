/* ============================================
   Smooth Scroll Behavior
   ============================================ */

// Add smooth scroll behavior to the entire page (CSS handles most of it)
document.documentElement.style.scrollBehavior = 'smooth';

/* ============================================
   Button Click Handler
   ============================================ */

const joinButton = document.querySelector(".btn-primary");

joinButton.addEventListener("click", () => {
    alert("Thank you for your interest! We're excited to have you join She Can Foundation.");
});

/* ============================================
   Intersection Observer for Fade-In Animations
   ============================================ */

// This creates the effect of elements fading in as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
const sections = document.querySelectorAll('.about, .mission, .footer');
sections.forEach(section => {
    observer.observe(section);
});