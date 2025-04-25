// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Setup unit toggle
    setupUnitToggle();
    
    // Setup calculate button
    setupCalculateButton();
    
    // Setup mobile menu
    setupMobileMenu();
});

/**
 * Sets up the unit toggle functionality
 */
function setupUnitToggle() {
    const metricInputs = document.getElementById('metric-inputs');
    const imperialInputs = document.getElementById('imperial-inputs');
    const unitRadios = document.querySelectorAll('input[name="unit"]');
    
    unitRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'metric') {
                metricInputs.classList.remove('hidden');
                imperialInputs.classList.add('hidden');
            } else {
                metricInputs.classList.add('hidden');
                imperialInputs.classList.remove('hidden');
            }
        });
    });
}

/**
 * Sets up the calculate button functionality
 */
function setupCalculateButton() {
    const calculateBtn = document.getElementById('calculate-btn');
    
    calculateBtn.addEventListener('click', () => {
        // Clear any previous errors
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.add('hidden');
        errorMessage.textContent = '';
        
        // Get the selected unit
        const unitRadios = document.querySelectorAll('input[name="unit"]');
        let selectedUnit;
        unitRadios.forEach(radio => {
            if (radio.checked) {
                selectedUnit = radio.value;
            }
        });
        
        let bmi, height, weight;
        
        // Calculate BMI based on selected unit
        if (selectedUnit === 'metric') {
            height = parseFloat(document.getElementById('height-cm').value);
            weight = parseFloat(document.getElementById('weight-kg').value);
            
            // Validate inputs
            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                errorMessage.textContent = 'Please enter valid height and weight values';
                errorMessage.classList.remove('hidden');
                return;
            }
            
            // Calculate BMI (metric formula): weight(kg) / height(m)²
            bmi = weight / Math.pow(height / 100, 2);
        } else {
            const feet = parseFloat(document.getElementById('height-ft').value);
            const inches = parseFloat(document.getElementById('height-in').value) || 0;
            weight = parseFloat(document.getElementById('weight-lb').value);
            
            // Validate inputs
            if (isNaN(feet) || isNaN(weight) || feet <= 0 || weight <= 0) {
                errorMessage.textContent = 'Please enter valid height and weight values';
                errorMessage.classList.remove('hidden');
                return;
            }
            
            // Convert height to total inches
            const totalInches = (feet * 12) + inches;
            height = totalInches;
            
            // Calculate BMI (imperial formula): (weight(lb) * 703) / height(in)²
            bmi = (weight * 703) / Math.pow(totalInches, 2);
        }
        
        // Display results
        displayResults(bmi, height, weight, selectedUnit);
    });
}

/**
 * Displays BMI calculation results
 */
function displayResults(bmi, height, weight, unit) {
    // Round BMI to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;
    
    // Show results section
    const resultSection = document.getElementById('result-section');
    resultSection.classList.remove('hidden');
    
    // Update BMI value
    const bmiValue = document.getElementById('bmi-value');
    bmiValue.textContent = bmi;
    
    // Update BMI category
    const bmiCategory = document.getElementById('bmi-category');
    const category = getBmiCategory(bmi);
    bmiCategory.textContent = category.text;
    
    // Remove all category classes and add the appropriate one
    bmiCategory.classList.remove('underweight', 'normal', 'overweight', 'obese');
    bmiCategory.classList.add(category.class);
    
    // Update BMI marker position
    const bmiMarker = document.getElementById('bmi-marker');
    const position = calculateMarkerPosition(bmi);
    bmiMarker.style.left = `${position}%`;
    
    // Update BMI message
    const bmiMessage = document.getElementById('bmi-message');
    bmiMessage.textContent = getBmiMessage(category.class);
    
    // Calculate and display healthy weight range
    const weightRange = document.getElementById('weight-range-value');
    const range = calculateHealthyWeightRange(height, unit);
    weightRange.textContent = range;
    
    // Scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Gets BMI category based on BMI value
 */
function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        return {
            text: 'Underweight',
            class: 'underweight'
        };
    } else if (bmi >= 18.5 && bmi < 25) {
        return {
            text: 'Normal weight',
            class: 'normal'
        };
    } else if (bmi >= 25 && bmi < 30) {
        return {
            text: 'Overweight',
            class: 'overweight'
        };
    } else {
        return {
            text: 'Obese',
            class: 'obese'
        };
    }
}

/**
 * Calculates the position of the BMI marker as a percentage
 */
function calculateMarkerPosition(bmi) {
    // BMI scale for marker positioning (limits for visual purposes)
    const minBmi = 15;  // Underweight
    const maxBmi = 40;  // Obese
    
    // Clamp BMI within visual range
    const clampedBmi = Math.max(minBmi, Math.min(bmi, maxBmi));
    
    // Calculate percentage position along the scale (0-100%)
    const percentage = ((clampedBmi - minBmi) / (maxBmi - minBmi)) * 100;
    
    return percentage;
}

/**
 * Gets a health message based on BMI category
 */
function getBmiMessage(category) {
    const messages = {
        underweight: 'Being underweight may indicate nutritional deficiencies or other health issues. Consider consulting with a healthcare provider for advice on healthy weight gain.',
        normal: 'Your BMI is within the healthy weight range. Maintain this through regular physical activity and a balanced diet.',
        overweight: 'Being overweight may increase the risk of certain health conditions. Consider adopting a healthier diet and increasing physical activity.',
        obese: 'Obesity is associated with increased health risks. We recommend consulting with a healthcare provider for personalized advice on weight management.'
    };
    
    return messages[category] || '';
}

/**
 * Calculates the healthy weight range based on height
 */
function calculateHealthyWeightRange(height, unit) {
    // A healthy BMI is between 18.5 and 24.9
    const minBmi = 18.5;
    const maxBmi = 24.9;
    
    let minWeight, maxWeight;
    
    if (unit === 'metric') {
        // Convert height from cm to m
        const heightM = height / 100;
        
        // Calculate weight range in kg
        minWeight = (minBmi * heightM * heightM).toFixed(1);
        maxWeight = (maxBmi * heightM * heightM).toFixed(1);
        
        return `${minWeight} - ${maxWeight} kg`;
    } else {
        // Height is already in inches
        
        // Calculate weight range in lbs using the BMI formula: (BMI * height^2) / 703
        minWeight = ((minBmi * height * height) / 703).toFixed(1);
        maxWeight = ((maxBmi * height * height) / 703).toFixed(1);
        
        return `${minWeight} - ${maxWeight} lbs`;
    }
}

/**
 * Set up mobile menu functionality
 */
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.right = '0';
    });
    
    closeBtn.addEventListener('click', function() {
        mobileMenu.style.right = '-100%';
    });
}