document.getElementById('calculate-btn').addEventListener('click', calculateTip);
document.getElementById('currency').addEventListener('change', updateCurrencySymbols);

function updateCurrencySymbols() {
    const currency = document.getElementById('currency').value;
    let currencySymbol = '₹'; // Default to INR
    if (currency === 'USD') {
        currencySymbol = '$';
    }
    document.getElementById('currency-symbol').textContent = currencySymbol;
    document.getElementById('currency-symbol-total').textContent = currencySymbol;
    document.getElementById('currency-symbol-person').textContent = currencySymbol;
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const numberOfPeople = parseInt(document.getElementById('people').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert('Please enter valid values');
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);
    const amountPerPerson = (totalAmount / numberOfPeople).toFixed(2);

    document.getElementById('tip-amount').textContent = tipAmount;
    document.getElementById('total-amount').textContent = totalAmount;
    document.getElementById('amount-per-person').textContent = amountPerPerson;

    // Update currency symbol
    updateCurrencySymbols();
}
