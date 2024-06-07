u28639518

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const mealPreferences = Array.from(document.querySelectorAll('input[name="meal"]:checked')).map(el => el.value);

    if (!name || !email || !eventDate || mealPreferences.length === 0) {
        alert('Please fill out all fields and select at least one meal preference.');
        return;
    }
