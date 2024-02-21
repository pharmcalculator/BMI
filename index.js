document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate BMI
    var bmi = weight / (height * height) * 703;

    // Determine BMI category
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25.0 && bmi <= 39.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // BMI scale
    var scale = "Underweight: < 18.5<br>Normal: 18.5 - 24.9<br>Overweight: 25.0 - 39.9<br>Obese: >= 40.0";

    // Display the result
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "<div class='result-box'><span class='result-value'>" + bmi.toFixed(2) + "</span><br><span class='category-label'>Category: " + category + "</span><br><br><span class='scale-label'>BMI Scale:</span><br><span class='scale-value'>" + scale + "</span></div>";
});