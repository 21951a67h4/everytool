// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Setup tab navigation
    setupTabs();
    
    // Setup calculation event listeners
    setupCalculators();
    
    // Setup mobile menu
    setupMobileMenu();
});

/**
 * Sets up the tabbed interface
 */
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

/**
 * Sets up all calculator functionality
 */
function setupCalculators() {
    // Basic percentage calculations
    setupBasicPercentage();
    
    // Percentage increase calculations
    setupPercentageIncrease();
    
    // Percentage decrease calculations
    setupPercentageDecrease();
    
    // Percentage difference calculations
    setupPercentageDifference();
}

/**
 * Sets up basic percentage calculations
 */
function setupBasicPercentage() {
    // Calculate X% of Y
    const calculatePercentOfBtn = document.getElementById('calculate-percent-of');
    calculatePercentOfBtn.addEventListener('click', () => {
        const percentageX = parseFloat(document.getElementById('percentage-x').value);
        const valueY = parseFloat(document.getElementById('value-y').value);
        
        if (isNaN(percentageX) || isNaN(valueY)) {
            document.getElementById('percent-of-result').textContent = 'Please enter valid numbers';
            return;
        }
        
        const result = (percentageX / 100) * valueY;
        document.getElementById('percent-of-result').textContent = formatNumber(result);
    });
    
    // Calculate what percentage X is of Y
    const calculatePercentIsBtn = document.getElementById('calculate-percent-is');
    calculatePercentIsBtn.addEventListener('click', () => {
        const valueX = parseFloat(document.getElementById('value-x').value);
        const totalY = parseFloat(document.getElementById('total-y').value);
        
        if (isNaN(valueX) || isNaN(totalY) || totalY === 0) {
            document.getElementById('percent-is-result').textContent = 'Please enter valid numbers (Y cannot be zero)';
            return;
        }
        
        const result = (valueX / totalY) * 100;
        document.getElementById('percent-is-result').textContent = formatNumber(result);
    });
}

/**
 * Sets up percentage increase calculations
 */
function setupPercentageIncrease() {
    const calculateIncreaseBtn = document.getElementById('calculate-increase');
    calculateIncreaseBtn.addEventListener('click', () => {
        const originalValue = parseFloat(document.getElementById('increase-from').value);
        const newValue = parseFloat(document.getElementById('increase-to').value);
        
        if (isNaN(originalValue) || isNaN(newValue) || originalValue === 0) {
            document.getElementById('increase-result').textContent = 'Please enter valid numbers (original value cannot be zero)';
            return;
        }
        
        const absoluteOriginal = Math.abs(originalValue);
        const increase = newValue - originalValue;
        const percentageIncrease = (increase / absoluteOriginal) * 100;
        
        document.getElementById('increase-result').textContent = formatNumber(percentageIncrease);
    });
}

/**
 * Sets up percentage decrease calculations
 */
function setupPercentageDecrease() {
    const calculateDecreaseBtn = document.getElementById('calculate-decrease');
    calculateDecreaseBtn.addEventListener('click', () => {
        const originalValue = parseFloat(document.getElementById('decrease-from').value);
        const newValue = parseFloat(document.getElementById('decrease-to').value);
        
        if (isNaN(originalValue) || isNaN(newValue) || originalValue === 0) {
            document.getElementById('decrease-result').textContent = 'Please enter valid numbers (original value cannot be zero)';
            return;
        }
        
        const absoluteOriginal = Math.abs(originalValue);
        const decrease = originalValue - newValue;
        const percentageDecrease = (decrease / absoluteOriginal) * 100;
        
        document.getElementById('decrease-result').textContent = formatNumber(percentageDecrease);
    });
}

/**
 * Sets up percentage difference calculations
 */
function setupPercentageDifference() {
    const calculateDifferenceBtn = document.getElementById('calculate-difference');
    calculateDifferenceBtn.addEventListener('click', () => {
        const value1 = parseFloat(document.getElementById('diff-value1').value);
        const value2 = parseFloat(document.getElementById('diff-value2').value);
        
        if (isNaN(value1) || isNaN(value2) || (value1 === 0 && value2 === 0)) {
            document.getElementById('difference-result').textContent = 'Please enter valid numbers (both values cannot be zero)';
            return;
        }
        
        const absoluteDifference = Math.abs(value1 - value2);
        const average = (Math.abs(value1) + Math.abs(value2)) / 2;
        const percentageDifference = (absoluteDifference / average) * 100;
        
        document.getElementById('difference-result').textContent = formatNumber(percentageDifference);
    });
}

/**
 * Formats a number to 2 decimal places if needed
 */
function formatNumber(number) {
    return Math.abs(number) < 0.01 ? number.toFixed(4) : 
           Math.abs(number) < 1 ? number.toFixed(2) : 
           Number.isInteger(number) ? number : 
           number.toFixed(2);
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