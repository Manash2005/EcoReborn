document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Simple validation
    if (cardNumber && expiryDate && cvv) {
        alert('Payment successful!');
        // Add payment processing logic here
    } else {
        alert('Please fill in all fields.');
    }
});
