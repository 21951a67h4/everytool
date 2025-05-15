// Cookie Policy Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add back-to-top functionality
    const body = document.querySelector('body');
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.style.display = 'none';
    body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Add current year to copyright if needed
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const copyrightText = copyrightElement.textContent;
        const currentYear = new Date().getFullYear();
        
        if (copyrightText.includes('2025')) {
            copyrightElement.textContent = copyrightText.replace('2025', currentYear);
        }
    }
    
    // Add external link indicators
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        // Add icon if it doesn't already have one
        if (!link.querySelector('.fa-external-link-alt')) {
            const icon = document.createElement('i');
            icon.classList.add('fas', 'fa-external-link-alt');
            icon.style.fontSize = '0.8em';
            icon.style.marginLeft = '0.3em';
            link.appendChild(icon);
        }
        
        // Add title attribute for accessibility if not present
        if (!link.getAttribute('title')) {
            link.setAttribute('title', 'Opens in a new window');
        }
    });
});
