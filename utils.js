// Everytool Utilities
// Contains reusable utility functions for the website

// Toast notification system
const Toast = {
    container: null,
    
    // Initialize the toast system
    init() {
        this.container = document.querySelector('.toast-container');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    },
    
    // Show a toast message
    show(message, type = 'info', duration = 3000) {
        if (!this.container) this.init();
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // Get icon based on type
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'times-circle';
        if (type === 'warning') icon = 'exclamation-triangle';
        
        // Create toast content
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="toast-content">
                <p class="toast-message">${message}</p>
            </div>
        `;
        
        // Add to container
        this.container.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Auto-remove after duration
        setTimeout(() => {
            toast.classList.remove('show');
            
            // Remove from DOM after animation
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, duration);
        
        return toast;
    },
    
    // Shorthand methods
    success(message, duration) {
        return this.show(message, 'success', duration);
    },
    
    error(message, duration) {
        return this.show(message, 'error', duration);
    },
    
    warning(message, duration) {
        return this.show(message, 'warning', duration);
    },
    
    info(message, duration) {
        return this.show(message, 'info', duration);
    }
};

// Demo usage for showing toast
function showToastDemo() {
    // Sample toasts for different interactions
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't show toast on actual link clicks that navigate away
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                Toast.success('Action completed successfully!');
            }
        });
    });
    
    // Show info toast when searching
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.getElementById('tool-search');
            if (searchInput && searchInput.value.trim().length > 0) {
                Toast.info(`Searching for "${searchInput.value.trim()}"...`);
            }
        });
    }
    
    // Welcome message toast (delayed to not overlap with page load)
    setTimeout(() => {
        Toast.success('Welcome to Everytool! Explore our tools and features.');
    }, 3000);
}

// Initialize utilities
document.addEventListener('DOMContentLoaded', function() {
    Toast.init();
    showToastDemo();
});
