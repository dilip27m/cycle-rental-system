document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the amount from the rental page
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var amountToPay = urlParams.get('rentalCost');

    // Display the amount to pay on the payment page
    document.getElementById('amount-to-pay').textContent = 'Amount to Pay: $' + amountToPay;

    // Event listener for the payment method dropdown
    document.getElementById('payment-method').addEventListener('change', function() {
        var method = this.value;
        
        // Hide all payment options by default
        document.querySelectorAll('.payment-option').forEach(function(option) {
            option.style.display = 'none';
        });

        // Show the selected payment option
        document.getElementById(method + '-payment').style.display = 'block';
    });

    // Event listener for UPI payment button
    document.getElementById('upi-pay').addEventListener('click', function() {
        var upiID = document.getElementById('upi-id').value;
        // Implement UPI payment processing logic here
        alert('Initiating UPI payment for ' + amountToPay + ' to ' + upiID);
    });

    // Event listener for net banking payment button
    document.getElementById('net-banking-pay').addEventListener('click', function() {
        var selectedBank = document.getElementById('bank').value;
        // Implement net banking payment processing logic here
        alert('Initiating net banking payment for ' + amountToPay + ' via ' + selectedBank);
    });

    // Event listener for card payment button
    document.getElementById('card-pay').addEventListener('click', function() {
        var cardNumber = document.getElementById('card-number').value;
        var expiryDate = document.getElementById('expiry').value;
        var cvv = document.getElementById('cvv').value;
        // Implement card payment processing logic here
        alert('Initiating card payment for ' + amountToPay + ' with card number ' + cardNumber);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var paymentMethod = document.getElementById('payment-method');
    var upiPayment = document.getElementById('upi-payment');
    var netBankingPayment = document.getElementById('net-banking-payment');
    var cardPayment = document.getElementById('card-payment');

    paymentMethod.addEventListener('change', function () {
        var selectedOption = this.value;

        // Hide all payment sections
        upiPayment.style.display = 'none';
        netBankingPayment.style.display = 'none';
        cardPayment.style.display = 'none';

        // Show selected payment section
        if (selectedOption === 'upi') {
            upiPayment.style.display = 'block';
        } else if (selectedOption === 'net_banking') {
            netBankingPayment.style.display = 'block';
        } else if (selectedOption === 'credit_card' || selectedOption === 'debit_card') {
            cardPayment.style.display = 'block';
        }
    });
});

