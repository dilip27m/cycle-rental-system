
        // Parse URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const userDetails = {
            name: urlParams.get('name'),
            email: urlParams.get('email'),
            phone: urlParams.get('phone'),
            aadhaar: urlParams.get('aadhaar'),
            startTime: urlParams.get('startTime'),
            endTime: urlParams.get('endTime'),
            token: urlParams.get('token')
        };

        // Display user details
        document.getElementById('userName').textContent = userDetails.name;
        document.getElementById('userEmail').textContent = userDetails.email;
        document.getElementById('userPhone').textContent = userDetails.phone;
        document.getElementById('userAadhaar').textContent = userDetails.aadhaar;
        document.getElementById('startTime').textContent = userDetails.startTime;
        document.getElementById('endTime').textContent = userDetails.endTime;
        document.getElementById('userToken').textContent = userDetails.token;
