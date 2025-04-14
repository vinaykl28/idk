// Function to display budget tracking feedback based on user input
document.getElementById('track-budget').addEventListener('click', function() {
    const budgetInput = document.getElementById('budget-input').value;
    if (budgetInput === '') {
        alert('Please enter a valid amount.');
    } else {
        alert(`Tracking your budget of $${budgetInput} now!`);
    }
});

// Function to toggle visibility of content in page2 with a smooth fade effect
document.getElementById('toggle-info').addEventListener('click', function() {
    const infoSection = document.getElementById('info-section');
    if (infoSection.style.display === 'none' || infoSection.style.opacity === '0') {
        infoSection.style.display = 'block';
        setTimeout(() => { infoSection.style.opacity = '1'; }, 10); // Smooth fade in
    } else {
        infoSection.style.opacity = '0';
        setTimeout(() => { infoSection.style.display = 'none'; }, 300); // Smooth fade out
    }
});

// Function to toggle dark mode for the entire page
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const modeText = document.getElementById('mode-text');
    if (body.classList.contains('dark-mode')) {
        modeText.innerText = 'Light Mode';
    } else {
        modeText.innerText = 'Dark Mode';
    }
});

// Log message when page is fully loaded
window.addEventListener('load', function() {
    console.log("Page fully loaded and ready to go!");
});