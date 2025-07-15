function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }

    const bmi = weight / (height * height);
    const bmiResult = document.getElementById('bmi-result');
    const bmiStatus = document.getElementById('bmi-status');

    bmiResult.textContent = bmi.toFixed(2);

    if (bmi < 18.5) {
        bmiStatus.textContent = "Underweight";
        bmiStatus.style.color = "orange";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiStatus.textContent = "Normal weight";
        bmiStatus.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiStatus.textContent = "Overweight";
        bmiStatus.style.color = "#fcb001";
    } else {
        bmiStatus.textContent = "Obesity";
        bmiStatus.style.color = "red";
    }
}
