// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for category navigation
    setupSmoothScrolling();
    
    // Lazy loading for tool cards
    setupLazyLoading();
    
    // Back to top button functionality
    setupBackToTopButton();
    
    // Mobile menu toggle
    setupMobileMenu();
    
    // Active category highlight based on scroll position
    setupScrollSpy();
});

/**
 * Sets up smooth scrolling for category navigation links
 */
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('#categories-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Update active states
            document.querySelectorAll('#categories-nav a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Smooth scroll to the section
            window.scrollTo({
                top: targetSection.offsetTop - 120, // Adjusted for header height
                behavior: 'smooth'
            });
            
            // Update URL without page reload
            history.pushState(null, null, targetId);
        });
    });
}

/**
 * Sets up lazy loading for tool cards using Intersection Observer
 */
function setupLazyLoading() {
    // Get all tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If element is in viewport
            if (entry.isIntersecting) {
                // Add visible class with a slight delay for staggered effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                
                // Stop observing the element after it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options
        root: null, // viewport
        rootMargin: '0px 0px 50px 0px', // Load slightly before coming into view
        threshold: 0.1 // 10% of the item visible
    });
    
    // Start observing all tool cards
    toolCards.forEach(card => {
        observer.observe(card);
        
        // Ensure images use lazy loading
        const images = card.querySelectorAll('img');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    });
}

/**
 * Sets up the back-to-top button functionality
 */
function setupBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show button when user scrolls down 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Sets up the mobile menu functionality
 */
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && closeBtn && mobileMenu) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
        
        // Close mobile menu
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/**
 * Sets up scroll spy functionality to highlight active category
 * based on the user's scroll position
 */
function setupScrollSpy() {
    const sections = document.querySelectorAll('.tools-section');
    const navLinks = document.querySelectorAll('#categories-nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const offset = 150; // Adjust based on header height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Filter tools by category (can be expanded for search functionality)
 * @param {string} category - Category to filter by
 */
function filterTools(category) {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}