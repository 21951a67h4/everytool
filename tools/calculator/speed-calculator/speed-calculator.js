document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });

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

    // Speed calculation
    document.getElementById('calculate-speed').addEventListener('click', function() {
        const distance = parseFloat(document.getElementById('speed-distance').value);
        const distanceUnit = document.getElementById('speed-distance-unit').value;
        const time = parseFloat(document.getElementById('speed-time').value);
        const timeUnit = document.getElementById('speed-time-unit').value;
        
        if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
            document.getElementById('speed-result').textContent = 'Please enter valid distance and time values.';
            return;
        }
        
        // Convert distance to meters and time to seconds for standard calculation
        const distanceInMeters = convertDistanceToMeters(distance, distanceUnit);
        const timeInSeconds = convertTimeToSeconds(time, timeUnit);
        
        // Calculate speed in m/s
        const speedMPS = distanceInMeters / timeInSeconds;
        
        // Display result with appropriate units
        let resultText = '';
        
        // Choose appropriate output units based on input
        if (distanceUnit === 'km' && timeUnit === 'hr') {
            resultText = `${(speedMPS * 3.6).toFixed(2)} km/h`;
        } else if (distanceUnit === 'mi' && timeUnit === 'hr') {
            resultText = `${(speedMPS * 2.237).toFixed(2)} mph`;
        } else if (distanceUnit === 'm' && timeUnit === 'sec') {
            resultText = `${speedMPS.toFixed(2)} m/s`;
        } else {
            // Default display in multiple units
            resultText = `${speedMPS.toFixed(2)} m/s (${(speedMPS * 3.6).toFixed(2)} km/h, ${(speedMPS * 2.237).toFixed(2)} mph)`;
        }
        
        document.getElementById('speed-result').textContent = resultText;
    });

    // Distance calculation
    document.getElementById('calculate-distance').addEventListener('click', function() {
        const speed = parseFloat(document.getElementById('distance-speed').value);
        const speedUnit = document.getElementById('distance-speed-unit').value;
        const time = parseFloat(document.getElementById('distance-time').value);
        const timeUnit = document.getElementById('distance-time-unit').value;
        
        if (isNaN(speed) || isNaN(time) || speed <= 0 || time <= 0) {
            document.getElementById('distance-result').textContent = 'Please enter valid speed and time values.';
            return;
        }
        
        // Convert speed to m/s and time to seconds for standard calculation
        const speedMPS = convertSpeedToMPS(speed, speedUnit);
        const timeInSeconds = convertTimeToSeconds(time, timeUnit);
        
        // Calculate distance in meters
        const distanceMeters = speedMPS * timeInSeconds;
        
        // Display result with appropriate units
        let resultText = '';
        
        // Choose appropriate output units
        if (distanceMeters < 1000) {
            resultText = `${distanceMeters.toFixed(2)} meters`;
        } else if (speedUnit === 'mph') {
            // If input was in mph, show result in miles
            const distanceMiles = distanceMeters / 1609.34;
            resultText = `${distanceMiles.toFixed(2)} miles`;
        } else {
            // Default to kilometers for larger distances
            const distanceKm = distanceMeters / 1000;
            resultText = `${distanceKm.toFixed(2)} kilometers`;
        }
        
        document.getElementById('distance-result').textContent = resultText;
    });

    // Time calculation
    document.getElementById('calculate-time').addEventListener('click', function() {
        const distance = parseFloat(document.getElementById('time-distance').value);
        const distanceUnit = document.getElementById('time-distance-unit').value;
        const speed = parseFloat(document.getElementById('time-speed').value);
        const speedUnit = document.getElementById('time-speed-unit').value;
        
        if (isNaN(distance) || isNaN(speed) || distance <= 0 || speed <= 0) {
            document.getElementById('time-result').textContent = 'Please enter valid distance and speed values.';
            return;
        }
        
        // Convert distance to meters and speed to m/s for standard calculation
        const distanceInMeters = convertDistanceToMeters(distance, distanceUnit);
        const speedMPS = convertSpeedToMPS(speed, speedUnit);
        
        // Calculate time in seconds
        const timeInSeconds = distanceInMeters / speedMPS;
        
        // Format time for display
        let resultText = formatTime(timeInSeconds);
        
        document.getElementById('time-result').textContent = resultText;
    });

    // Speed conversion
    document.getElementById('convert-speed-btn').addEventListener('click', function() {
        const speed = parseFloat(document.getElementById('convert-speed').value);
        const fromUnit = document.getElementById('convert-from-unit').value;
        const toUnit = document.getElementById('convert-to-unit').value;
        
        if (isNaN(speed) || speed < 0) {
            document.getElementById('convert-result').textContent = 'Please enter a valid speed value.';
            return;
        }
        
        // Convert to m/s first (standard unit)
        const speedMPS = convertSpeedToMPS(speed, fromUnit);
        
        // Then convert from m/s to target unit
        let convertedSpeed;
        let unitLabel;
        
        switch(toUnit) {
            case 'km/hr':
                convertedSpeed = speedMPS * 3.6;
                unitLabel = 'km/h';
                break;
            case 'm/s':
                convertedSpeed = speedMPS;
                unitLabel = 'm/s';
                break;
            case 'mph':
                convertedSpeed = speedMPS * 2.23694;
                unitLabel = 'mph';
                break;
            case 'ft/s':
                convertedSpeed = speedMPS * 3.28084;
                unitLabel = 'ft/s';
                break;
            case 'knot':
                convertedSpeed = speedMPS * 1.94384;
                unitLabel = 'knots';
                break;
            default:
                convertedSpeed = speedMPS;
                unitLabel = 'm/s';
        }
        
        document.getElementById('convert-result').textContent = `${convertedSpeed.toFixed(2)} ${unitLabel}`;
    });

    // Helper Functions

    // Convert distance to meters (standard unit)
    function convertDistanceToMeters(distance, unit) {
        switch(unit) {
            case 'km':
                return distance * 1000;
            case 'm':
                return distance;
            case 'mi':
                return distance * 1609.34;
            case 'ft':
                return distance * 0.3048;
            default:
                return distance;
        }
    }

    // Convert time to seconds (standard unit)
    function convertTimeToSeconds(time, unit) {
        switch(unit) {
            case 'hr':
                return time * 3600;
            case 'min':
                return time * 60;
            case 'sec':
                return time;
            default:
                return time;
        }
    }

    // Convert speed to meters per second (standard unit)
    function convertSpeedToMPS(speed, unit) {
        switch(unit) {
            case 'km/hr':
                return speed / 3.6;
            case 'm/s':
                return speed;
            case 'mph':
                return speed / 2.23694;
            case 'ft/s':
                return speed / 3.28084;
            case 'knot':
                return speed / 1.94384;
            default:
                return speed;
        }
    }

    // Format time for display
    function formatTime(timeInSeconds) {
        if (timeInSeconds < 60) {
            return `${timeInSeconds.toFixed(2)} seconds`;
        } else if (timeInSeconds < 3600) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds.toFixed(0)} second${seconds !== 1 ? 's' : ''}`;
        } else {
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }
    }
});