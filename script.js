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
// Display registration details
    const detailsDiv = document.getElementById('registrationDetails');
    detailsDiv.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${mealPreferences.join(', ')}</p>
    `;
});
