// script.js

// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you for reaching out, ${name}!\nYour message: ${message}`);
  
    // Reset the form fields
    document.querySelector('form').reset();
  });
  