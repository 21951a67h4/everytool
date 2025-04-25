// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Get input elements
    const birthDateInput = document.getElementById('birth-date');
    const calcDateInput = document.getElementById('calc-date');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultSection = document.getElementById('result-section');
    const errorMessage = document.getElementById('error-message');
    
    // Set max date as current date
    const today = new Date();
    const formattedDate = formatDate(today);
    birthDateInput.setAttribute('max', formattedDate);
    calcDateInput.setAttribute('max', formattedDate);
    
    // Set default value for calculation date as today
    calcDateInput.value = formattedDate;
    
    // Add event listener to calculate button
    calculateBtn.addEventListener('click', calculateAge);
    
    // Mobile menu functionality
    setupMobileMenu();
    
    /**
     * Calculates age based on birth date and calculation date
     */
    function calculateAge() {
        // Get input values
        const birthDate = new Date(birthDateInput.value);
        let calculationDate = calcDateInput.value ? new Date(calcDateInput.value) : new Date();
        
        // Validate inputs
        if (!birthDateInput.value) {
            showError('Please enter a birth date.');
            return;
        }
        
        if (birthDate > calculationDate) {
            showError('Birth date cannot be after calculation date.');
            return;
        }
        
        // Hide error if previously shown
        errorMessage.classList.add('hidden');
        
        // Calculate age
        const ageDetails = calculateAgeDetails(birthDate, calculationDate);
        
        // Display results
        document.getElementById('years').textContent = ageDetails.years;
        document.getElementById('months').textContent = ageDetails.months;
        document.getElementById('days').textContent = ageDetails.days;
        document.getElementById('total-months').textContent = ageDetails.totalMonths;
        document.getElementById('total-days').textContent = ageDetails.totalDays;
        document.getElementById('total-hours').textContent = ageDetails.totalHours;
        
        // Show result section
        resultSection.classList.remove('hidden');
    }
    
    /**
     * Calculate detailed age information between two dates
     * @param {Date} birthDate - Date of birth
     * @param {Date} currentDate - Date to calculate age at
     * @returns {Object} Age details with years, months, days and totals
     */
    function calculateAgeDetails(birthDate, currentDate) {
        // Clone dates to avoid modifying originals
        const startDate = new Date(birthDate);
        const endDate = new Date(currentDate);
        
        // Calculate difference in milliseconds
        const diffInMs = endDate - startDate;
        const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(diffInMs / (1000 * 60 * 60));
        
        // Calculate years, months, days
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();
        
        // Adjust if days is negative
        if (days < 0) {
            // Get the last day of the previous month
            const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
            days += lastMonth.getDate();
            months--;
        }
        
        // Adjust if months is negative
        if (months < 0) {
            months += 12;
            years--;
        }
        
        // Calculate total months
        const totalMonths = years * 12 + months;
        
        return {
            years: years,
            months: months,
            days: days,
            totalMonths: totalMonths,
            totalDays: totalDays,
            totalHours: totalHours.toLocaleString() // Format with commas
        };
    }
    
    /**
     * Shows error message
     * @param {string} message - Error message to display
     */
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        resultSection.classList.add('hidden');
    }
    
    /**
     * Formats date as YYYY-MM-DD for input elements
     * @param {Date} date - Date to format
     * @returns {string} Formatted date string
     */
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    /**
     * Sets up mobile menu functionality
     */
    function setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuBtn && closeBtn && mobileMenu) {
            // Open mobile menu
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
            
            // Close mobile menu
            closeBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
            });
        }
    }
});