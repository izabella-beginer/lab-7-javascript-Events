// Access the button by ID
var button = document.getElementById('clickButton');

// Attach an event listener to the button
button.addEventListener('click', function() {
    alert('You clicked the button!');
    this.style.backgroundColor = 'lightpurple'; // Change the button color on click
});