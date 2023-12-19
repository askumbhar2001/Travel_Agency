// Selecting elements
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Changing styles or adding functionality
header.addEventListener('click', function() {
    this.style.backgroundColor = 'red'; // Changes header color to red on click
});

// Example of adding a new element to the main section
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added via JavaScript!';
main.appendChild(newParagraph);

// Example of handling a form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const inputValue = document.querySelector('#inputField').value; // Get value from an input field
    alert(`You submitted: ${inputValue}`); // Display an alert with the submitted value
});
