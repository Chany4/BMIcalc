function calculateBMI() {
    // Get the input values
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const resultElement = document.getElementById('bmi-result');

    // Convert height to meters from centimeters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Displaying the result
    resultElement.innerText = 'Your BMI is : ' + bmi.toFixed(2);
}
