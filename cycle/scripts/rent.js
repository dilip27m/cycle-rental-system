
document.getElementById('showFares').addEventListener('click', function() {
    calculateRentalCost();
    showUserDetails();
});

function calculateRentalCost() {
    // Retrieve start and end times
    var startTime = new Date(document.getElementById('startTime').value);
    var endTime = new Date(document.getElementById('endTime').value);

    // Get cycle type and hourly rate
    var cycleType = document.getElementById('cycleType').value;
    var hourlyRate = 10; // Default rate for city bike
    if (cycleType === 'mountain') {
        hourlyRate = 15;
    } else if (cycleType === 'electric') {
        hourlyRate = 20;
    }

    // Calculate rental cost
    var hours = Math.abs(endTime - startTime) / 36e5; // Convert milliseconds to hours
    var rentalCost = hours * hourlyRate;

    // Apply coupon discount if valid
    var coupon = document.getElementById('coupon').value;
    if (coupon === 'CYCLE50') {
        rentalCost *= 0.9; // Apply 10% discount
    }

    // Display rental cost
    document.getElementById('rentalCost').textContent = 'Rental Cost: $' + rentalCost.toFixed(2);
    document.getElementById('rentalCostContainer').style.display = 'block'; // Show rental cost container
}

function showUserDetails() {
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userPhone = document.getElementById('phone').value;
    var userAadhaar = document.getElementById('aadhaar').value;

    // Generate random token
    var userToken = generateToken();

    // Display user details
    document.getElementById('userName').textContent = 'Name: ' + userName;
    document.getElementById('userEmail').textContent = 'Email: ' + userEmail;
    document.getElementById('userPhone').textContent = 'Phone: ' + userPhone;
    document.getElementById('userAadhaar').textContent = 'Aadhaar Number: ' + userAadhaar;
    document.getElementById('userToken').textContent = 'Token: ' + userToken;
    document.getElementById('startTime').textContent = 'Start Time: ' + document.getElementById('startTime').value;
    document.getElementById('endTime').textContent = 'End Time: ' + document.getElementById('endTime').value;

    // Show user details container
    document.getElementById('userDetailsContainer').style.display = 'block';
}

function generateToken() {
    var token = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 12; i++) {
        token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return token;
}

function redirectToDashboard() {
    var userDetails = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    aadhaar: document.getElementById('aadhaar').value,
    token: generateToken(),
    startTime: document.getElementById('startTime').value,
    endTime: document.getElementById('endTime').value
};
var queryParams = new URLSearchParams(userDetails).toString();
window.location.href = 'dashboard.html?' + queryParams;
}