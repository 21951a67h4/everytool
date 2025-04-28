// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Get input elements
    const birthDateInput = document.getElementById('birth-date');
    const birthDayInput = document.getElementById('birth-day');
    const birthMonthInput = document.getElementById('birth-month');
    const birthYearInput = document.getElementById('birth-year');
    
    const useReferenceDateCheckbox = document.getElementById('use-reference-date');
    const referenceDateSection = document.getElementById('reference-date-section');
    const referenceDateInput = document.getElementById('reference-date');
    const referenceDayInput = document.getElementById('reference-day');
    const referenceMonthInput = document.getElementById('reference-month');
    const referenceYearInput = document.getElementById('reference-year');
    
    const calculateBtn = document.getElementById('calculate-btn');
    const resultSection = document.getElementById('result-section');
    const errorMessage = document.getElementById('error-message');
    const nextBirthdayText = document.getElementById('next-birthday-text');
    
    // Set max date as current date
    const today = new Date();
    const formattedDate = formatDate(today);
    birthDateInput.setAttribute('max', formattedDate);
    referenceDateInput.setAttribute('max', formattedDate);
    
    // Set default value for reference date as today
    referenceDateInput.value = formattedDate;
    referenceDayInput.value = today.getDate();
    referenceMonthInput.value = today.getMonth() + 1;
    referenceYearInput.value = today.getFullYear();
    
    // Toggle reference date section visibility
    useReferenceDateCheckbox.addEventListener('change', function() {
        if (this.checked) {
            referenceDateSection.classList.remove('hidden');
        } else {
            referenceDateSection.classList.add('hidden');
        }
    });
    
    // Sync date picker with manual inputs for birth date
    birthDateInput.addEventListener('change', function() {
        if (this.value) {
            const date = new Date(this.value);
            birthDayInput.value = date.getDate();
            birthMonthInput.value = date.getMonth() + 1;
            birthYearInput.value = date.getFullYear();
        }
    });
    
    // Sync manual inputs with date picker for birth date
    [birthDayInput, birthMonthInput, birthYearInput].forEach(input => {
        input.addEventListener('change', updateBirthDatePicker);
    });
    
    function updateBirthDatePicker() {
        if (birthDayInput.value && birthMonthInput.value && birthYearInput.value) {
            const day = String(birthDayInput.value).padStart(2, '0');
            const month = String(birthMonthInput.value).padStart(2, '0');
            birthDateInput.value = `${birthYearInput.value}-${month}-${day}`;
        }
    }
    
    // Sync date picker with manual inputs for reference date
    referenceDateInput.addEventListener('change', function() {
        if (this.value) {
            const date = new Date(this.value);
            referenceDayInput.value = date.getDate();
            referenceMonthInput.value = date.getMonth() + 1;
            referenceYearInput.value = date.getFullYear();
        }
    });
    
    // Sync manual inputs with date picker for reference date
    [referenceDayInput, referenceMonthInput, referenceYearInput].forEach(input => {
        input.addEventListener('change', updateReferenceDatePicker);
    });
    
    function updateReferenceDatePicker() {
        if (referenceDayInput.value && referenceMonthInput.value && referenceYearInput.value) {
            const day = String(referenceDayInput.value).padStart(2, '0');
            const month = String(referenceMonthInput.value).padStart(2, '0');
            referenceDateInput.value = `${referenceYearInput.value}-${month}-${day}`;
        }
    }
    
    // Add event listener to calculate button
    calculateBtn.addEventListener('click', calculateAge);
    
    // Mobile menu functionality
    setupMobileMenu();
    
    /**
     * Calculates age based on birth date and reference date
     */
    function calculateAge() {
        // Get birth date from either the date picker or manual inputs
        let birthDate;
        if (birthDateInput.value) {
            birthDate = new Date(birthDateInput.value);
        } else if (birthDayInput.value && birthMonthInput.value && birthYearInput.value) {
            birthDate = new Date(
                parseInt(birthYearInput.value),
                parseInt(birthMonthInput.value) - 1,
                parseInt(birthDayInput.value)
            );
        } else {
            showError('Please enter a complete birth date.');
            return;
        }
        
        // Get reference date
        let referenceDate;
        if (useReferenceDateCheckbox.checked) {
            if (referenceDateInput.value) {
                referenceDate = new Date(referenceDateInput.value);
            } else if (referenceDayInput.value && referenceMonthInput.value && referenceYearInput.value) {
                referenceDate = new Date(
                    parseInt(referenceYearInput.value),
                    parseInt(referenceMonthInput.value) - 1,
                    parseInt(referenceDayInput.value)
                );
            } else {
                showError('Please enter a complete reference date.');
                return;
            }
        } else {
            referenceDate = new Date(); // Today
        }
        
        // Validate inputs
        if (birthDate > referenceDate) {
            showError('Birth date cannot be after reference date.');
            return;
        }
        
        // Hide error if previously shown
        errorMessage.classList.add('hidden');
        
        // Calculate age
        const ageDetails = calculateAgeDetails(birthDate, referenceDate);
        
        // Display results
        document.getElementById('years').textContent = ageDetails.years;
        document.getElementById('months').textContent = ageDetails.months;
        document.getElementById('days').textContent = ageDetails.days;
        
        document.getElementById('total-years').textContent = ageDetails.years;
        document.getElementById('total-months').textContent = ageDetails.totalMonths;
        document.getElementById('total-weeks').textContent = ageDetails.totalWeeks;
        document.getElementById('total-days').textContent = ageDetails.totalDays;
        document.getElementById('total-hours').textContent = ageDetails.totalHours;
        document.getElementById('total-minutes').textContent = ageDetails.totalMinutes;
        
        // Calculate and display next birthday
        updateNextBirthday(birthDate, referenceDate);
        
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
        const totalMinutes = Math.floor(diffInMs / (1000 * 60));
        const totalWeeks = Math.floor(totalDays / 7);
        
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
            totalWeeks: totalWeeks.toLocaleString(), // Format with commas
            totalDays: totalDays.toLocaleString(),
            totalHours: totalHours.toLocaleString(),
            totalMinutes: totalMinutes.toLocaleString()
        };
    }
    
    /**
     * Calculate and display days until next birthday
     * @param {Date} birthDate - Birth date
     * @param {Date} referenceDate - Current date or reference date
     */
    function updateNextBirthday(birthDate, referenceDate) {
        // Clone the reference date to avoid modifying it
        const currentDate = new Date(referenceDate);
        
        // Create a date for this year's birthday
        const thisYearBirthday = new Date(
            currentDate.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        );
        
        // If this year's birthday has passed, use next year's birthday
        if (thisYearBirthday < currentDate) {
            thisYearBirthday.setFullYear(thisYearBirthday.getFullYear() + 1);
        }
        
        // Calculate days until next birthday
        const daysToBirthday = Math.ceil((thisYearBirthday - currentDate) / (1000 * 60 * 60 * 24));
        
        // Update the display
        if (daysToBirthday === 0) {
            nextBirthdayText.textContent = "Today is your birthday! 🎉";
        } else if (daysToBirthday === 1) {
            nextBirthdayText.textContent = "Your next birthday is tomorrow!";
        } else {
            nextBirthdayText.textContent = `Your next birthday is in ${daysToBirthday} days`;
        }
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