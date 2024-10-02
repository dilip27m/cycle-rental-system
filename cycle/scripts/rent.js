document.getElementById('showFares').addEventListener('click', function() {
    if (validateForm()) {
        calculateRentalCost();
        showUserDetails();
    }
});

function validateForm() {
    var isValid = true;
    var currentDateTime = new Date();

    // Clear previous errors
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('startTimeError').textContent = '';
    document.getElementById('endTimeError').textContent = '';

    // Validate phone number
    var phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a vaild Phone number .';
        isValid = false;
    }

    // Validate email
    var email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate start and end times
    var startTime = new Date(document.getElementById('startTime').value);
    var endTime = new Date(document.getElementById('endTime').value);

    if (startTime < currentDateTime) {
        document.getElementById('startTimeError').textContent = 'Start time must be in the future.';
        isValid = false;
    }

    if (endTime <= startTime) {
        document.getElementById('endTimeError').textContent = 'End time must be after start time.';
        isValid = false;
    }

    return isValid;
}

function calculateRentalCost() {
    // Retrieve start and end times
    var startTime = new Date(document.getElementById('startTime').value);
    var endTime = new Date(document.getElementById('endTime').value);

    // Get cycle type and hourly rate
    var cycleType = document.getElementById('cycleType').value;
    var hourlyRate = 10; 
    if (cycleType === 'travel') {
        hourlyRate = 15;
    } else if (cycleType === 'gear') {
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
    if (coupon === 'FIRSTCYCLE') {
        rentalCost *= 0.9; // Apply 10% discount
    }
    if (coupon === 'BEAST') {
        rentalCost *= 0.9; // Apply 10% discount
    }

    // Display rental cost
    document.getElementById('rentalCost').textContent = 'Rental Cost: ₹' + rentalCost.toFixed(2);
    document.getElementById('rentalCostContainer').style.display = 'block'; // Show rental cost container
}

function showUserDetails() {
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userPhone = document.getElementById('phone').value;

    // Generate random token
    var userToken = generateToken();

    // Display user details
    document.getElementById('userName').textContent = 'Name: ' + userName;
    document.getElementById('userEmail').textContent = 'Email: ' + userEmail;
    document.getElementById('userPhone').textContent = 'Phone: ' + userPhone;
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
