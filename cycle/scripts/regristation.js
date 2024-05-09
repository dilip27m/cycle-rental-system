
  function showRestriction(field) {
    var restrictionDiv = document.getElementById(field + 'Restriction');
    restrictionDiv.style.display = 'block';
  }

  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retype_password").value;
    var phone = document.getElementsByName("phone")[0].value;
    var aadhaarNumber = document.getElementsByName("aadhaar_number")[0].value;
    var isValid = true;

    if (username.length < 6) {
      showRestriction('username');
      document.getElementById("username").classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("username").classList.remove("invalid");
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      showRestriction('password');
      document.getElementById("password").classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("password").classList.remove("invalid");
    }

    if (retypePassword !== password) {
      showRestriction('retype');
      document.getElementById("retype_password").classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("retype_password").classList.remove("invalid");
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits.");
      isValid = false;
    }

    if (aadhaarNumber.length !== 12) {
      alert("Aadhaar number must be 12 digits.");
      isValid = false;
    }

    if (isValid) {
      document.getElementById("registrationMessage").style.display = "block";
    }

    return isValid;
  }
