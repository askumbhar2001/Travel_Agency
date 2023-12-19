// script.js

// Select elements
const exploreBtn = document.getElementById('exploreBtn');
const contactForm = document.getElementById('contactForm');

// Explore button functionality
exploreBtn.addEventListener('click', function() {
    // Logic to handle exploring destinations
    // For example, redirect to the destinations section:
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
});

// Form submission handling
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulating form submission by logging form data
    const formData = new FormData(contactForm);
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
    // You can add code here to send the form data to a server using fetch or other methods
});
