document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && closeBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }

    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and tabs
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to current button and corresponding tab
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + '-tab').classList.add('active');
        });
    });

    // Add Time Tab Functionality
    let timeRowCounter = 2; // Starting with 2 rows already in HTML

    // Add more time rows
    document.getElementById('add-more-time').addEventListener('click', function() {
        timeRowCounter++;
        const newRow = document.createElement('div');
        newRow.className = 'time-input-row';
        newRow.id = `time-row-${timeRowCounter}`;
        
        newRow.innerHTML = `
            <div class="time-item">
                <label>Hours</label>
                <input type="number" min="0" id="add-hours-${timeRowCounter}" placeholder="0">
            </div>
            <div class="time-item">
                <label>Minutes</label>
                <input type="number" min="0" max="59" id="add-minutes-${timeRowCounter}" placeholder="0">
            </div>
            <div class="time-item">
                <label>Seconds</label>
                <input type="number" min="0" max="59" id="add-seconds-${timeRowCounter}" placeholder="0">
            </div>
            <button class="remove-time-btn" data-row="${timeRowCounter}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const addMoreBtn = document.getElementById('add-more-time');
        addMoreBtn.parentNode.insertBefore(newRow, addMoreBtn);
        
        // Add event listener to the remove button
        newRow.querySelector('.remove-time-btn').addEventListener('click', function() {
            const rowId = this.getAttribute('data-row');
            document.getElementById(`time-row-${rowId}`).remove();
        });
    });

    // Calculate Time Addition
    document.getElementById('calculate-add').addEventListener('click', function() {
        // Initialize total seconds
        let totalSeconds = 0;
        
        // Loop through all time rows
        for (let i = 1; i <= timeRowCounter; i++) {
            // Skip if the row has been removed
            if (!document.getElementById(`add-hours-${i}`)) continue;
            
            // Get hours, minutes, seconds from inputs
            const hours = parseInt(document.getElementById(`add-hours-${i}`).value) || 0;
            const minutes = parseInt(document.getElementById(`add-minutes-${i}`).value) || 0;
            const seconds = parseInt(document.getElementById(`add-seconds-${i}`).value) || 0;
            
            // Convert to seconds and add to total
            totalSeconds += hours * 3600 + minutes * 60 + seconds;
        }
        
        // Display the result
        displayTimeResult(totalSeconds, 'add-result', 'add-result-words');
    });

    // Calculate Time Subtraction
    document.getElementById('calculate-subtract').addEventListener('click', function() {
        // Get time values from inputs
        const hours1 = parseInt(document.getElementById('subtract-hours-1').value) || 0;
        const minutes1 = parseInt(document.getElementById('subtract-minutes-1').value) || 0;
        const seconds1 = parseInt(document.getElementById('subtract-seconds-1').value) || 0;
        
        const hours2 = parseInt(document.getElementById('subtract-hours-2').value) || 0;
        const minutes2 = parseInt(document.getElementById('subtract-minutes-2').value) || 0;
        const seconds2 = parseInt(document.getElementById('subtract-seconds-2').value) || 0;
        
        // Convert both times to seconds
        const totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
        const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;
        
        // Calculate the difference
        let differenceInSeconds;
        
        if (totalSeconds1 >= totalSeconds2) {
            differenceInSeconds = totalSeconds1 - totalSeconds2;
            
            // Display the result
            displayTimeResult(differenceInSeconds, 'subtract-result', 'subtract-result-words');
        } else {
            // If the second time is greater, show an error message
            document.getElementById('subtract-result').textContent = 'Error: First time must be greater';
            document.getElementById('subtract-result-words').textContent = 'Please enter a larger time value in the first row.';
        }
    });

    // Convert Time
    document.getElementById('calculate-convert').addEventListener('click', function() {
        const value = parseFloat(document.getElementById('convert-value').value);
        const fromUnit = document.getElementById('convert-from').value;
        const toUnit = document.getElementById('convert-to').value;
        
        if (isNaN(value) || value < 0) {
            document.getElementById('convert-result').textContent = 'Please enter a valid value.';
            return;
        }
        
        // Convert to seconds first (as base unit)
        let valueInSeconds;
        switch(fromUnit) {
            case 'seconds':
                valueInSeconds = value;
                break;
            case 'minutes':
                valueInSeconds = value * 60;
                break;
            case 'hours':
                valueInSeconds = value * 3600;
                break;
            case 'days':
                valueInSeconds = value * 86400;
                break;
            case 'weeks':
                valueInSeconds = value * 604800;
                break;
            case 'months':
                valueInSeconds = value * 2592000; // 30 days
                break;
            case 'years':
                valueInSeconds = value * 31536000; // 365 days
                break;
        }
        
        // Convert from seconds to target unit
        let result;
        switch(toUnit) {
            case 'seconds':
                result = valueInSeconds;
                break;
            case 'minutes':
                result = valueInSeconds / 60;
                break;
            case 'hours':
                result = valueInSeconds / 3600;
                break;
            case 'days':
                result = valueInSeconds / 86400;
                break;
            case 'weeks':
                result = valueInSeconds / 604800;
                break;
            case 'months':
                result = valueInSeconds / 2592000; // 30 days
                break;
            case 'years':
                result = valueInSeconds / 31536000; // 365 days
                break;
        }
        
        // Format the result with appropriate precision
        let formattedResult;
        if (result >= 1000) {
            formattedResult = result.toLocaleString(undefined, { maximumFractionDigits: 2 });
        } else if (result >= 100) {
            formattedResult = result.toFixed(2);
        } else if (result >= 10) {
            formattedResult = result.toFixed(3);
        } else if (result >= 1) {
            formattedResult = result.toFixed(4);
        } else {
            formattedResult = result.toPrecision(4);
        }
        
        // Display the result
        document.getElementById('convert-result').textContent = `${formattedResult} ${toUnit}`;
    });

    // Duration Calculator
    document.getElementById('calculate-duration').addEventListener('click', function() {
        const startDate = document.getElementById('start-date').value;
        const startTime = document.getElementById('start-time').value || '00:00';
        const endDate = document.getElementById('end-date').value;
        const endTime = document.getElementById('end-time').value || '00:00';
        
        if (!startDate || !endDate) {
            document.getElementById('duration-result').textContent = 'Please select both start and end dates.';
            document.getElementById('duration-details').textContent = '';
            return;
        }
        
        // Create Date objects
        const startDateTime = new Date(`${startDate}T${startTime}`);
        const endDateTime = new Date(`${endDate}T${endTime}`);
        
        // Calculate difference in milliseconds
        const difference = endDateTime - startDateTime;
        
        if (difference < 0) {
            document.getElementById('duration-result').textContent = 'Error: End date must be after start date';
            document.getElementById('duration-details').textContent = '';
            return;
        }
        
        // Calculate days, hours, minutes, seconds
        const totalSeconds = Math.floor(difference / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        // Format the display
        const formattedTime = `${days} day${days !== 1 ? 's' : ''}, ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        document.getElementById('duration-result').textContent = formattedTime;
        
        // Detailed breakdown
        const totalHours = Math.floor(totalSeconds / 3600);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;
        
        let details = `
            <ul>
                <li><strong>Total time:</strong> ${totalSeconds.toLocaleString()} seconds</li>
                <li><strong>Total minutes:</strong> ${totalMinutes.toLocaleString()} minutes</li>
                <li><strong>Total hours:</strong> ${totalHours.toLocaleString()} hours</li>
                <li><strong>Days and time:</strong> ${days} days and ${hours} hours, ${minutes} minutes, ${seconds} seconds</li>
            </ul>
        `;
        
        if (days >= 7) {
            details += `
                <ul>
                    <li><strong>Weeks and days:</strong> ${weeks} week${weeks !== 1 ? 's' : ''} and ${remainingDays} day${remainingDays !== 1 ? 's' : ''}</li>
                </ul>
            `;
        }
        
        document.getElementById('duration-details').innerHTML = details;
    });

    // Helper Functions
    
    // Pad zero to single digits
    function padZero(num) {
        return num.toString().padStart(2, '0');
    }
    
    // Display formatted time result
    function displayTimeResult(totalSeconds, resultElementId, wordsElementId) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        // Format the display (HH:MM:SS)
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        document.getElementById(resultElementId).textContent = formattedTime;
        
        // Format time in words
        let timeInWords = '';
        
        if (hours > 0) {
            timeInWords += `${hours} hour${hours !== 1 ? 's' : ''}`;
        }
        
        if (minutes > 0) {
            timeInWords += (hours > 0 ? ', ' : '') + `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }
        
        if (seconds > 0 || (hours === 0 && minutes === 0)) {
            timeInWords += ((hours > 0 || minutes > 0) ? ' and ' : '') + `${seconds} second${seconds !== 1 ? 's' : ''}`;
        }
        
        document.getElementById(wordsElementId).textContent = timeInWords;
    }

    // Set default dates for duration calculator
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = date => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    
    document.getElementById('start-date').value = formatDate(today);
    document.getElementById('end-date').value = formatDate(tomorrow);
});