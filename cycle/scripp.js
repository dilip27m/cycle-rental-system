document.querySelectorAll('.sidebar button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.sidebar button.active').classList.remove('active');
        button.classList.add('active');

        document.querySelector('.section.active').classList.remove('active');
        document.getElementById(button.getAttribute('data-section')).classList.add('active');
    });
});

function saveChanges() {
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var dob = document.getElementById('dob').value.trim();
    var phone = document.getElementById('phone').value.trim();

    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;

    emailError.textContent = '';
    phoneError.textContent = '';

    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    }

    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    alert('Changes saved!');
}

function updatePassword() {
    var oldPassword = document.getElementById('oldPassword').value.trim();
    var newPassword = document.getElementById('newPassword').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();

    var newPasswordError = document.getElementById('newPasswordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    newPasswordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (newPassword !== confirmPassword) {
        confirmPasswordError.textContent = 'New password and confirm password do not match.';
        return;
    }

    if (newPassword.length < 8) {
        newPasswordError.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    alert('Password updated!');
}

function deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
        alert('Account deleted!');
    }
}