// Sample tools data (this would be replaced by your actual tools database)
const toolsData = [
  {
    id: 1,
    name: 'Age Calculator',
    category: 'calculator',
    description: 'Calculate age based on birthdate and another date',
    icon: 'fa-calendar-alt',
    url: '/calculator/age-calculator/',
    tags: ['age', 'birthday', 'date', 'time', 'years', 'months', 'days']
  },
  {
    id: 2,
    name: 'BMI Calculator',
    category: 'calculator',
    description: 'Calculate your Body Mass Index',
    icon: 'fa-weight',
    url: '/calculator/bmi-calculator/',
    tags: ['bmi', 'health', 'weight', 'height', 'body mass index']
  },
  {
    id: 3,
    name: 'Currency Converter',
    category: 'converter',
    description: 'Convert between different currencies with live rates',
    icon: 'fa-dollar-sign',
    url: '/converter/currency-converter/',
    tags: ['currency', 'money', 'forex', 'exchange', 'rate', 'dollar', 'euro']
  },
  {
    id: 4,
    name: 'Unit Converter',
    category: 'converter',
    description: 'Convert between different measurement units',
    icon: 'fa-ruler',
    url: '/converter/unit-converter/',
    tags: ['length', 'weight', 'volume', 'temperature', 'metric', 'imperial']
  },
  {
    id: 5,
    name: 'Password Generator',
    category: 'generator',
    description: 'Generate secure, random passwords',
    icon: 'fa-key',
    url: '/generator/password-generator/',
    tags: ['password', 'security', 'random', 'secure', 'generator']
  },
  {
    id: 6,
    name: 'QR Code Generator',
    category: 'generator',
    description: 'Create QR codes for URLs, text, or contact information',
    icon: 'fa-qrcode',
    url: '/generator/qr-code-generator/',
    tags: ['qr', 'code', 'url', 'scan', 'mobile']
  },
  {
    id: 7,
    name: 'Meta Tag Generator',
    category: 'seo',
    description: 'Generate meta tags for better SEO',
    icon: 'fa-code',
    url: '/seo/meta-tag-generator/',
    tags: ['meta', 'tags', 'seo', 'html', 'website', 'optimization']
  },
  {
    id: 8,
    name: 'Keyword Density Checker',
    category: 'seo',
    description: 'Check keyword density for SEO optimization',
    icon: 'fa-percentage',
    url: '/seo/keyword-density-checker/',
    tags: ['keywords', 'seo', 'density', 'content', 'optimization']
  },
  {
    id: 9,
    name: 'Mortgage Calculator',
    category: 'calculator',
    description: 'Calculate monthly mortgage payments and interest',
    icon: 'fa-home',
    url: '/calculator/mortgage-calculator/',
    tags: ['mortgage', 'loan', 'home', 'interest', 'payment', 'finance']
  },
  {
    id: 10,
    name: 'Percentage Calculator',
    category: 'calculator',
    description: 'Calculate percentages, increases, and decreases',
    icon: 'fa-percent',
    url: '/calculator/percentage-calculator/',
    tags: ['percent', 'percentage', 'discount', 'increase', 'decrease', 'math']
  },
  {
    id: 11,
    name: 'Color Converter',
    category: 'converter',
    description: 'Convert between RGB, HEX, HSL and other color formats',
    icon: 'fa-palette',
    url: '/converter/color-converter/',
    tags: ['color', 'rgb', 'hex', 'hsl', 'design', 'web']
  },
  {
    id: 12,
    name: 'UUID Generator',
    category: 'generator',
    description: 'Generate random UUID/GUID values',
    icon: 'fa-fingerprint',
    url: '/generator/uuid-generator/',
    tags: ['uuid', 'guid', 'id', 'unique', 'identifier']
  }
];

// Hero section particles background effect
function createParticle(container) {
    // Create different types of particles for visual variety
    const particleTypes = ['particle-dot', 'particle-circle', 'particle-square', 'particle-gradient'];
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Randomly select particle type
    const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
    particle.classList.add(particleType);
    
    // Random properties with wider ranges for more variety
    const size = Math.random() * 35 + 5; // 5-40px
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 8; // Longer delays for more natural feel
    const duration = Math.random() * 20 + 15; // 15-35s for slower, more gentle movement
    
    // Random movement pattern variables
    const x1 = (Math.random() * 40 - 20) + 'px'; // Random x movement
    const y1 = (Math.random() * 40 - 20) + 'px'; // Random y movement
    const x2 = (Math.random() * 60 - 30) + 'px';
    const y2 = (Math.random() * 60 - 30) + 'px';
    const x3 = (Math.random() * 40 - 20) + 'px';
    const y3 = (Math.random() * 40 - 20) + 'px';
    
    // Random rotation and scale for more dynamic motion
    const r1 = Math.random() * 20 - 10 + 'deg';
    const r2 = Math.random() * 40 - 20 + 'deg';
    const r3 = Math.random() * 20 - 10 + 'deg';
    
    const s1 = 0.8 + Math.random() * 0.4;
    const s2 = 0.8 + Math.random() * 0.6;
    const s3 = 0.9 + Math.random() * 0.3;
    
    // Custom opacity based on size (smaller particles less opaque)
    const maxOpacity = Math.min(0.2 + (size / 60), 0.5);
    const peakOpacity = Math.min(maxOpacity + 0.2, 0.6);
    
    // Apply styles and custom properties for animations
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s, ${duration * 0.8}s`; // Different durations for float and fade
    
    // Set custom properties for animation keyframes
    particle.style.setProperty('--x1', x1);
    particle.style.setProperty('--y1', y1);
    particle.style.setProperty('--x2', x2);
    particle.style.setProperty('--y2', y2);
    particle.style.setProperty('--x3', x3);
    particle.style.setProperty('--y3', y3);
    particle.style.setProperty('--r1', r1);
    particle.style.setProperty('--r2', r2);
    particle.style.setProperty('--r3', r3);
    particle.style.setProperty('--s1', s1);
    particle.style.setProperty('--s2', s2);
    particle.style.setProperty('--s3', s3);
    particle.style.setProperty('--max-opacity', maxOpacity);
    particle.style.setProperty('--peak-opacity', peakOpacity);
    
    // Add particle to container
    container.appendChild(particle);
}

// Enhanced particle initialization
function initializeParticles() {
    const particlesContainer = document.getElementById('particles-background');
    if (!particlesContainer) return;
    
    // Clear any existing particles
    particlesContainer.innerHTML = '';
    
    // Create shimmer effect overlay
    const shimmer = document.createElement('div');
    shimmer.classList.add('particle-shimmer');
    particlesContainer.appendChild(shimmer);
    
    // Create more particles for a denser effect
    const particleCount = window.innerWidth < 768 ? 20 : 35; // Fewer on mobile
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

// Main initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize enhanced particles
    initializeParticles();
    
    // Re-initialize particles on window resize (debounced)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initializeParticles, 250);
    });
    
    // ---- Improved section animation with consistent approach ----
    // Create dedicated function for handling section animations
    function initSectionAnimations() {
        // Create a single observer with proper logic for section animations
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the correct class to make the section visible
                    entry.target.classList.add('section-visible');
                    
                    // No need for setTimeout for animate-element children
                    // CSS transitions will handle the staggered effect
                    
                    // Stop observing once section is visible
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Lower threshold for earlier animation triggering
            rootMargin: '0px'
        });
        
        // Select all sections to animate
        const animatedSections = document.querySelectorAll('.section-animate');
        
        // Special handling for hero section - make it visible immediately
        const heroSection = document.querySelector('.hero.section-animate');
        if (heroSection) {
            // Simply add the visible class to the hero section
            // The CSS transitions will handle the animations
            heroSection.classList.add('section-visible');
            
            // Don't observe hero since we've already handled it
            animatedSections.forEach(section => {
                if (section !== heroSection) {
                    sectionObserver.observe(section);
                }
            });
        } else {
            // If for some reason hero section isn't found, observe all sections
            animatedSections.forEach(section => {
                sectionObserver.observe(section);
            });
        }
        
        // Add CSS helper for staggered animations of child elements
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            /* Add staggered delays to animate-element children */
            .section-visible .animate-element:nth-child(1) { transition-delay: 0.1s; }
            .section-visible .animate-element:nth-child(2) { transition-delay: 0.2s; }
            .section-visible .animate-element:nth-child(3) { transition-delay: 0.3s; }
            .section-visible .animate-element:nth-child(4) { transition-delay: 0.4s; }
            .section-visible .animate-element:nth-child(5) { transition-delay: 0.5s; }
        `;
        document.head.appendChild(styleSheet);
    }
    
    // Call the animation initialization function directly
    initSectionAnimations();
    
    // ---- Fixed Intersection Observer implementation ----
    // Create a single observer with proper logic for section animations
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the correct class to make the section visible
                entry.target.classList.add('section-visible');
                
                // Animate child elements with staggered timing
                const animElements = entry.target.querySelectorAll('.animate-element');
                animElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 200 * index);
                });
                
                // Stop observing once section is visible
                observer.unobserve(entry.target);
            }
        });
    }
    
    // Create a single observer instance
    const sectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    // Select all sections to animate
    const animatedSections = document.querySelectorAll('.section-animate');
    
    // Observe each section
    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Special handling for hero section - make it visible immediately if in viewport
    const heroSection = document.querySelector('.hero.section-animate');
    if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            heroSection.classList.add('section-visible');
            
            // Also animate hero elements
            const animElements = heroSection.querySelectorAll('.animate-element');
            animElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200 * index);
            });
            
            // Don't observe hero section since we've already handled it
            sectionObserver.unobserve(heroSection);
        }
    }
    
    // Handle popular search tag clicks
    const popularSearchTags = document.querySelectorAll('.search-tag');
    
    if (popularSearchTags && searchInput) {
        popularSearchTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Get tag value
                const tagValue = this.getAttribute('data-tag');
                
                // Set search input value
                searchInput.value = tagValue;
                searchInput.focus();
                
                // Trigger input event to show suggestions
                const inputEvent = new Event('input', { bubbles: true });
                searchInput.dispatchEvent(inputEvent);
                
                // Add slight highlight animation to the tag
                this.classList.add('tag-clicked');
                setTimeout(() => {
                    this.classList.remove('tag-clicked');
                }, 500);
            });
        });
    }
    
    // Enhance search input with focus effects
    if (searchInput) {
        const searchBox = document.querySelector('.search-box');
        
        searchInput.addEventListener('focus', function() {
            if (searchBox) {
                searchBox.classList.add('search-focused');
            }
        });
        
        searchInput.addEventListener('blur', function() {
            if (searchBox) {
                setTimeout(() => {
                    // Only remove if we're not focusing on something inside the search box
                    if (!searchBox.contains(document.activeElement)) {
                        searchBox.classList.remove('search-focused');
                    }
                }, 100);
            }
        });
    }
    
    // Dynamic placeholder text
    // Dynamic placeholder text
    if (searchInput) {
        let placeholders = [
            'Search for a tool...',
            'Try "password generator"...',
            'Need a "currency converter"?',
            'Looking for a "BMI calculator"?',
            'Try "color converter"...'
        ];
        let currentPlaceholder = 0;
        
        // Change placeholder every 3 seconds if not focused
        const changePlaceholder = () => {
            if (document.activeElement !== searchInput) {
                currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
                
                // Fade out
                searchInput.style.opacity = '0.7';
                
                setTimeout(() => {
                    searchInput.setAttribute('placeholder', placeholders[currentPlaceholder]);
                    
                    // Fade in
                    searchInput.style.opacity = '1';
                }, 300);
            }
        };
        
        // Start changing placeholders after 3 seconds
        setTimeout(() => {
            setInterval(changePlaceholder, 3000);
        }, 3000);
    }
    
    // FAQ Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon i');
        
        // Add hover effect
        header.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                header.style.backgroundColor = 'var(--background-alt)';
                if (icon) {
                    icon.style.transform = 'rotate(45deg) scale(1.1)';
                }
            }
        });
        
        header.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                header.style.backgroundColor = '';
                if (icon) {
                    icon.style.transform = '';
                }
            }
        });
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all accordion items with animation
            accordionItems.forEach(accItem => {
                const accContent = accItem.querySelector('.accordion-content');
                const accIcon = accItem.querySelector('.accordion-icon i');
                
                if (accItem.classList.contains('active')) {
                    accItem.classList.remove('active');
                    if (accIcon) {
                        accIcon.style.transform = '';
                    }
                }
            });
            
            // If the clicked item wasn't active, open it with animation
            if (!isActive) {
                item.classList.add('active');
                if (icon) {
                    icon.style.transform = 'rotate(45deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                
                // Highlight the content briefly
                if (content) {
                    content.style.backgroundColor = 'var(--background-alt)';
                    setTimeout(() => {
                        content.style.backgroundColor = '';
                        content.style.transition = 'background-color 1s ease';
                    }, 200);
                }
            }
        });
    });
    
    // Initialize search components
    initSearchFilters();
    initEnhancedSearchAutocomplete();
    initVoiceSearch();
    showRecentSearches();
    
    // Handle search functionality
    const searchButton = document.querySelector('.search-button');
    const searchError = document.getElementById('search-error');
    const searchStatus = document.querySelector('.search-status');
    
    function performSearch() {
        // Clear previous error messages
        clearSearchError();
        
        const query = searchInput.value.trim().toLowerCase();
        if (query.length === 0) {
            showSearchError('Please enter a search term');
            searchInput.focus();
            return;
        }
        
        // Show searching status
        showSearchStatus('Searching...');
        
        // Track this search in recent searches
        trackSearch(query);
        
        // Find the first matching tool and redirect to it
        const matchingTool = findBestMatchingTool(query);
        if (matchingTool) {
            showSearchStatus('Tool found! Redirecting...');
            setTimeout(() => {
                window.location.href = matchingTool.url;
            }, 500);
        } else {
            showSearchError('No matching tools found. Try another search term.');
            showRecentSearches(); // Show recent searches as suggestions
        }
    }
    
    function showSearchError(message) {
        if (!searchError) return;
        
        searchError.textContent = message;
        searchError.classList.add('visible');
        
        // Vibration feedback if supported
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        // Auto-hide error after 5 seconds
        setTimeout(() => {
            clearSearchError();
        }, 5000);
    }
    
    function clearSearchError() {
        if (!searchError) return;
        searchError.textContent = '';
        searchError.classList.remove('visible');
        
        // Also clear status
        if (searchStatus) {
            searchStatus.textContent = '';
            searchStatus.classList.remove('visible');
        }
    }
    
    function showSearchStatus(message) {
        if (!searchStatus) return;
        searchStatus.textContent = message;
        searchStatus.classList.add('visible');
    }
    
    // Event listeners for search functionality
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Mobile Menu functionality and enhanced header animations
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');
    const logoDot = document.querySelector('.logo-dot');
    
    // Add loading class to enable animations
    if (header) {
        header.classList.add('header-loading');
    }
    
    // Initial animations for header elements
    function animateHeaderElements() {
        if (logo) {
            logo.style.opacity = '0';
            logo.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                logo.style.opacity = '1';
                logo.style.transform = 'translateY(0)';
            }, 300);
        }
        
                // Animate nav links with staggered delay
                navLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, 300 + index * 100);
                });
            }
        });
// Enhanced search input with advanced micro-animations and glowing effects
function initSearchBoxEnhancements() {
    const searchInput = document.getElementById('tool-search');
    const searchBox = document.querySelector('.search-box');
    const searchSubmitButton = document.querySelector('.search-submit-btn');
    const voiceButton = document.getElementById('voice-search');
    const searchTags = document.querySelectorAll('.search-tag-btn');
    
    if (!searchInput || !searchBox) return;
    
    // Focus effects with glowing animation
    searchInput.addEventListener('focus', function() {
        if (searchBox) {
            searchBox.classList.add('search-focused');
            
            // Add subtle input animation
            this.style.transform = 'translateX(5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        }
    });
    
    searchInput.addEventListener('blur', function() {
        if (searchBox) {
            setTimeout(() => {
                // Only remove if we're not focusing on something inside the search box
                if (!searchBox.contains(document.activeElement)) {
                    searchBox.classList.remove('search-focused');
                }
            }, 150);
        }
    });
    
    // Add ripple effect to search button
    if (searchSubmitButton) {
        searchSubmitButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            
            // Calculate ripple position
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 700);
            
            // Trigger search
            performSearch();
        });
    }
    
    // Enhanced search tags with typing animation
    const searchTagsElements = document.querySelectorAll('.search-tag');
    
    if (searchTagsElements && searchInput) {
        searchTagsElements.forEach(tag => {
            tag.addEventListener('click', function() {
                // Get tag value
                const tagValue = this.getAttribute('data-tag');
                
                // Set search input focus
                searchInput.focus();
                
                // Clear existing search value
                searchInput.value = '';
                
                // Animate typing effect
                let index = 0;
                const typingSpeed = 50; // ms between characters
                
                function typeNextChar() {
                    if (index < tagValue.length) {
                        searchInput.value += tagValue.charAt(index);
                        index++;
                        setTimeout(typeNextChar, typingSpeed);
                    } else {
                        // Trigger input event to show suggestions when done typing
                        const inputEvent = new Event('input', { bubbles: true });
                        searchInput.dispatchEvent(inputEvent);
                    }
                }
                
                // Start the typing effect after a small delay
                setTimeout(typeNextChar, 100);
                
                // Add slight highlight animation to the tag
                this.classList.add('tag-clicked');
                setTimeout(() => {
                    this.classList.remove('tag-clicked');
                }, 500);
            });
            
            // Add hover effects
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 8px rgba(67, 97, 238, 0.15)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Enhance voice search button animations
    const voiceButton = document.getElementById('voice-search');
    if (voiceButton) {
        voiceButton.addEventListener('mouseenter', function() {
            if (!this.classList.contains('listening')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        voiceButton.addEventListener('mouseleave', function() {
            if (!this.classList.contains('listening')) {
                this.style.transform = '';
            }
        });
        
        // Add ripple effect to voice button
        voiceButton.addEventListener('click', function(e) {
            if (!this.classList.contains('listening')) {
                const ripple = document.createElement('span');
                ripple.className = 'button-ripple';
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height) * 2;
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 700);
            }
        });
    }

    // Enhance search input with advanced micro-animations
    if (searchInput) {
        const searchBox = document.querySelector('.search-box');
        
        // Focus/blur effects with added animations
        searchInput.addEventListener('focus', function() {
            if (searchBox) {
                searchBox.classList.add('search-focused');
                
                // Apply subtle shift animation on focus
                this.style.transform = 'translateX(5px)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            }
        });
        
        searchInput.addEventListener('blur', function() {
            if (searchBox) {
                // Delayed removal of focus class to allow clicking inside search components
                setTimeout(() => {
                    if (!searchBox.contains(document.activeElement)) {
                        searchBox.classList.remove('search-focused');
                    }
                }, 150);
            }
        });
        
        // Add typing completion animation
        searchInput.addEventListener('input', function() {
            if (this.value.trim().length > 0) {
                // Add subtle particle effect for each keystroke
                const particle = document.createElement('span');
                particle.className = 'input-particle';
                particle.style.left = `${Math.random() * 100}%`;
                searchBox.appendChild(particle);
                
                // Remove particle after animation completes
                setTimeout(() => particle.remove(), 600);
            }
        });
    }
    
    // Enhanced dynamic placeholder cycling with smoother transitions
    if (searchInput) {
        const placeholders = [
            'Search for a tool...',
            'Try "password generator"...',
            'Need a "currency converter"?',
            'Looking for a "BMI calculator"?',
            'Try "color converter"...'
        ];
        
        let currentPlaceholder = 0;
        
        // Change placeholder if not focused, with improved animation
        const cyclePlaceholders = () => {
            if (document.activeElement !== searchInput) {
                // Fade out
                searchInput.style.opacity = '0.7';
                
                setTimeout(() => {
                    // Update placeholder text
                    currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
                    searchInput.setAttribute('placeholder', placeholders[currentPlaceholder]);
                    
                    // Fade back in
                    searchInput.style.opacity = '1';
                }, 300);
            }
        };
        
        // Start cycling placeholders after initial delay
        setTimeout(() => {
            setInterval(cyclePlaceholders, 3500);
        }, 3000);
    }
    
    // FAQ Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon i');
        
        // Add hover effect
        header.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                header.style.backgroundColor = 'var(--background-alt)';
                if (icon) {
                    icon.style.transform = 'rotate(45deg) scale(1.1)';
                }
            }
        });
        
        header.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                header.style.backgroundColor = '';
                if (icon) {
                    icon.style.transform = '';
                }
            }
        });
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all accordion items with animation
            accordionItems.forEach(accItem => {
                const accContent = accItem.querySelector('.accordion-content');
                const accIcon = accItem.querySelector('.accordion-icon i');
                
                if (accItem.classList.contains('active')) {
                    accItem.classList.remove('active');
                    if (accIcon) {
                        accIcon.style.transform = '';
                    }
                }
            });
            
            // If the clicked item wasn't active, open it with animation
            if (!isActive) {
                item.classList.add('active');
                if (icon) {
                    icon.style.transform = 'rotate(45deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                
                // Highlight the content briefly
                if (content) {
                    content.style.backgroundColor = 'var(--background-alt)';
                    setTimeout(() => {
                        content.style.backgroundColor = '';
                        content.style.transition = 'background-color 1s ease';
                    }, 200);
                }
            }
        });
    });
    
    // Initialize search components
    initSearchFilters();
    initEnhancedSearchAutocomplete();
    initVoiceSearch();
    showRecentSearches();
    
    // Handle search functionality
    const searchButton = document.querySelector('.search-button');
    const searchError = document.getElementById('search-error');
    const searchStatus = document.querySelector('.search-status');
    
    function performSearch() {
        // Clear previous error messages
        clearSearchError();
        
        const query = searchInput.value.trim().toLowerCase();
        if (query.length === 0) {
            showSearchError('Please enter a search term');
            searchInput.focus();
            return;
        }
        
        // Show searching status
        showSearchStatus('Searching...');
        
        // Track this search in recent searches
        trackSearch(query);
        
        // Find the first matching tool and redirect to it
        const matchingTool = findBestMatchingTool(query);
        if (matchingTool) {
            showSearchStatus('Tool found! Redirecting...');
            setTimeout(() => {
                window.location.href = matchingTool.url;
            }, 500);
        } else {
            showSearchError('No matching tools found. Try another search term.');
            showRecentSearches(); // Show recent searches as suggestions
        }
    }
    
    function showSearchError(message) {
        if (!searchError) return;
        
        searchError.textContent = message;
        searchError.classList.add('visible');
        
        // Vibration feedback if supported
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        // Auto-hide error after 5 seconds
        setTimeout(() => {
            clearSearchError();
        }, 5000);
    }
    
    function clearSearchError() {
        if (!searchError) return;
        searchError.textContent = '';
        searchError.classList.remove('visible');
        
        // Also clear status
        if (searchStatus) {
            searchStatus.textContent = '';
            searchStatus.classList.remove('visible');
        }
    }
    
    function showSearchStatus(message) {
        if (!searchStatus) return;
        searchStatus.textContent = message;
        searchStatus.classList.add('visible');
    }
    
    // Event listeners for search functionality
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Mobile Menu functionality and enhanced header animations
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');
    const logoDot = document.querySelector('.logo-dot');
    
    // Add loading class to enable animations
    if (header) {
        header.classList.add('header-loading');
    }
    
    // Initial animations for header elements
    function animateHeaderElements() {
        if (logo) {
            logo.style.opacity = '0';
            logo.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                logo.style.opacity = '1';
                logo.style.transform = 'translateY(0)';
            }, 300);
        }
        
                // Animate nav links with staggered delay
                navLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, 300 + index * 100);
                });
            }
        });
// Enhanced typing particle effect manager for better performance
class InputParticleManager {
    constructor(container) {
        this.container = container;
        this.particlePool = [];
        this.maxPoolSize = 20; // Limit particles for performance
        this.active = false;
        this.createParticlePool();
    }
    
    createParticlePool() {
        // Create reusable particles
        for (let i = 0; i < this.maxPoolSize; i++) {
            const particle = document.createElement('span');
            particle.className = 'input-particle';
            particle.style.display = 'none';
            this.container.appendChild(particle);
            this.particlePool.push(particle);
        }
    }
    
    getParticle() {
        // Find an available particle from the pool
        for (let i = 0; i < this.particlePool.length; i++) {
            const particle = this.particlePool[i];
            if (particle.style.display === 'none') {
                return particle;
            }
        }
        
        // If no particles available, return the first one (recycle)
        return this.particlePool[0];
    }
    
    createParticle() {
        if (!this.active) return;
        
        const particle = this.getParticle();
        particle.style.display = 'block';
        particle.style.left = `${Math.random() * 100}%`;
        
        // Add random size, color, and position variations
        const size = 4 + Math.random() * 8;
        const hue = Math.random() > 0.5 ? '215' : '160'; // Primary or secondary color hue
        const top = 25 + Math.random() * 30;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsla(${hue}, 80%, 60%, 0.6)`;
        particle.style.top = `${top}%`;
        
        // Return particle to pool after animation
        setTimeout(() => {
            particle.style.display = 'none';
        }, 600);
    }
    
    start() {
        this.active = true;
    }
    
    stop() {
        this.active = false;
    }
    
    // Clean up method to remove all particles
    destroy() {
        this.particlePool.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        this.particlePool = [];
    }
}

// Function to initialize our enhanced search UI
function initSearchUI() {
    try {
        const searchInput = document.getElementById('tool-search');
        const searchBox = document.querySelector('.search-box');
        const searchButton = document.querySelector('.search-submit-btn');
        const voiceButton = document.getElementById('voice-search');
        const searchTags = document.querySelectorAll('.search-tag-btn');
        
        if (!searchInput || !searchBox) {
            console.warn('Search elements not found in the DOM, aborting search UI initialization');
            return;
        }
        
        console.log('Initializing enhanced search UI');
        
        // Create and initialize particle manager for typing effects
        const particleManager = new InputParticleManager(searchBox);
        
        // Add focus effects with subtle animation
        searchInput.addEventListener('focus', function() {
            searchBox.classList.add('search-focused');
            particleManager.start();
            
            // Apply subtle animation
            this.style.transform = 'translateX(5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
        
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                // Only remove if we're not focusing on something inside the search box
                if (!searchBox.contains(document.activeElement)) {
                    searchBox.classList.remove('search-focused');
                    particleManager.stop();
                }
            }, 150);
        });
        
        // Add typing particle effect with improved performance
        searchInput.addEventListener('input', function(e) {
            if (this.value.trim().length > 0 && e.inputType !== 'deleteContentBackward') {
                particleManager.createParticle();
            }
        });
        
        // Set up search button with ripple effect
        if (searchButton) {
            searchButton.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('btn-ripple');
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height) * 2;
                
                // Calculate ripple position
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 700);
                
                // Trigger search
                if (typeof performSearch === 'function') {
                    performSearch();
                } else {
                    console.error('performSearch function not available');
                }
            });
        }
        
        // Set up voice button with ripple and interactive effects
        if (voiceButton) {
            voiceButton.addEventListener('mouseenter', function() {
                if (!this.classList.contains('listening')) {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 6px 15px rgba(67, 97, 238, 0.25)';
                }
            });
            
            voiceButton.addEventListener('mouseleave', function() {
                if (!this.classList.contains('listening')) {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }
            });
            
            // Add ripple effect on click
            voiceButton.addEventListener('click', function(e) {
                if (!this.classList.contains('listening')) {
                    // Create ripple effect
                    const ripple = document.createElement('span');
                    ripple.classList.add('btn-ripple');
                    
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height) * 2;
                    
                    ripple.style.width = ripple.style.height = `${size}px`;
                    ripple.style.left = `${(e.clientX - rect.left - size / 2)}px`;
                    ripple.style.top = `${(e.clientY - rect.top - size / 2)}px`;
                    
                    this.appendChild(ripple);
                    
                    // Remove ripple after animation
                    setTimeout(() => ripple.remove(), 700);
                }
            });
        }
        
        // Set up search tags with typing animation
        if (searchTags && searchTags.length > 0) {
            searchTags.forEach(tag => {
                // Add hover effects
                tag.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 8px rgba(67, 97, 238, 0.15)';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
                
                // Add click with typing animation
                tag.addEventListener('click', function() {
                    // Add click animation
                    this.classList.add('tag-clicked');
                    setTimeout(() => this.classList.remove('tag-clicked'), 500);
                    
                    const tagValue = this.getAttribute('data-tag');
                    if (!tagValue) return;
                    
                    // Focus the search input
                    searchInput.focus();
                    searchBox.classList.add('search-focused');
                    particleManager.start();
                    
                    // Clear current input
                    searchInput.value = '';
                    
                    // Animate typing effect with particles
                    let index = 0;
                    const typingSpeed = 50; // ms between characters
                    
                    function typeNextChar() {
                        if (index < tagValue.length) {
                            searchInput.value += tagValue.charAt(index);
                            
                            // Create particle effect for each character
                            particleManager.createParticle();
                            
                            index++;
                            setTimeout(typeNextChar, typingSpeed);
                        } else {
                            // Trigger input event when done typing
                            const inputEvent = new Event('input', { bubbles: true });
                            searchInput.dispatchEvent(inputEvent);
                            
                            // Add finishing animation
                            searchInput.classList.add('typing-complete');
                            setTimeout(() => {
                                searchInput.classList.remove('typing-complete');
                            }, 500);
                        }
                    }
                    
                    // Start typing with a small delay
                    setTimeout(typeNextChar, 100);
                });
            });
        }
        
        // Start the dynamic placeholder cycling
        const cleanup = initAdvancedPlaceholderCycling(searchInput);
        
        // Return a cleanup function
        return function() {
            particleManager.destroy();
            if (cleanup) cleanup();
        };
    } catch (error) {
        console.error('Error initializing search UI:', error);
    }
}

// Initialize dynamic autocomplete suggestions with animations
function initDynamicSuggestions() {
    const searchInput = document.getElementById('tool-search');
    const searchBox = document.querySelector('.search-box');
    
    if (!searchInput) return;
    
    // Create or get suggestions container
    let suggestionsContainer = document.querySelector('.search-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.setAttribute('aria-live', 'polite');
        suggestionsContainer.setAttribute('role', 'listbox');
        if (searchBox) searchBox.appendChild(suggestionsContainer);
    }
    
    // Handle showing suggestions when typing
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const selectedCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
        
        // Clear suggestions when query is too short
        if (query.length < 2) {
            hideSuggestions();
            return;
        }
        
        // Get matches filtered by category
        const matches = toolsData.filter(tool => {
            const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
            if (!categoryMatch) return false;
            
            // Check for matches in name, description, and tags
            const nameMatch = tool.name.toLowerCase().includes(query);
            const descMatch = tool.description.toLowerCase().includes(query);
            const tagMatch = tool.tags.some(tag => tag.includes(query));
            
            return nameMatch || descMatch || tagMatch;
        }).slice(0, 6); // Limit to avoid overwhelming the user
        
        // Update the suggestions display
        updateSuggestions(matches, query);
    });
    
    // Function to update suggestions
    function updateSuggestions(matches, query) {
        suggestionsContainer.innerHTML = '';
        
        if (matches.length > 0) {
            // Show container with animation
            suggestionsContainer.style.display = 'block';
            setTimeout(() => {
                suggestionsContainer.classList.add('visible');
            }, 10);
            
            // Add each suggestion with staggered animation
            matches.forEach((match, index) => {
                const suggestion = createSuggestionElement(match, query, index);
                suggestionsContainer.appendChild(suggestion);
            });
        } else if (query.length >= 2) {
            // Show "no results" message
            suggestionsContainer.style.display = 'block';
            setTimeout(() => {
                suggestionsContainer.classList.add('visible');
            }, 10);
            
            const noResults = document.createElement('div');
            noResults.className = 'suggestion-item no-results';
            noResults.innerHTML = `<span class="no-results-icon"><i class="fas fa-search"></i></span> No matching tools found for "${query}"`;
            noResults.style.opacity = '0';
            noResults.style.transform = 'translateY(10px)';
            
            suggestionsContainer.appendChild(noResults);
            
            // Animate in
            setTimeout(() => {
                noResults.style.opacity = '1';
                noResults.style.transform = 'translateY(0)';
                noResults.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            }, 50);
        }
    }
    
    // Function to create a suggestion element
    function createSuggestionElement(tool, query, index) {
        const suggestion = document.createElement('div');
        suggestion.className = 'suggestion-item';
        suggestion.setAttribute('role', 'option');
        suggestion.style.opacity = '0';
        suggestion.style.transform = 'translateY(10px)';
        
        // Create icon element with tool's icon
        const iconSpan = document.createElement('span');
        iconSpan.className = 'suggestion-icon';
        iconSpan.innerHTML = `<i class="fas ${tool.icon}"></i>`;
        
        // Create content container
        const contentDiv = document.createElement('div');
        contentDiv.className = 'suggestion-content';
        
        // Add tool name with highlighted query
        const nameEl = document.createElement('div');
        nameEl.className = 'suggestion-name';
        const nameParts = tool.name.split(new RegExp(`(${query})`, 'i'));
        let nameHTML = '';
        nameParts.forEach(part => {
            if (part.toLowerCase() === query.toLowerCase()) {
                nameHTML += `<strong>${part}</strong>`;
            } else {
                nameHTML += part;
            }
        });
        nameEl.innerHTML = nameHTML;
        
        // Add description (truncated if needed)
        const descEl = document.createElement('div');
        descEl.className = 'suggestion-description';
        let desc = tool.description;
        if (desc.length > 60) {
            desc = desc.substring(0, 57) + '...';
        }
        descEl.textContent = desc;
        
        // Add category badge
        const categoryEl = document.createElement('span');
        categoryEl.className = 'suggestion-category';
        categoryEl.textContent = tool.category.charAt(0).toUpperCase() + tool.category.slice(1);
        
                // Assemble the suggestion elements
                contentDiv.appendChild(nameEl);
                contentDiv.appendChild(descEl);
                suggestion.appendChild(iconSpan);
                suggestion.appendChild(contentDiv);
                suggestion.appendChild(categoryEl);
                
                return suggestion;
            }
            
            // Function to hide suggestions
            function hideSuggestions() {
                suggestionsContainer.classList.remove('visible');
                setTimeout(() => {
                    suggestionsContainer.style.display = 'none';
                    suggestionsContainer.innerHTML = '';
                }, 300); // Wait for fade-out transition
            }
        }
        suggestion.appendChild(iconSpan);
        suggestion.appendChild(contentDiv);
        suggestion.appendChild(categoryEl);
        
        // Add hover effect
        suggestion.addEventListener('mouseenter', function() {
            // Clear focused class from all suggestions
            document.querySelectorAll('.suggestion-item').forEach(item => {
                item.classList.remove('focused');
            });
            
            // Apply focus to this suggestion
            this.classList.add('focused');
            this.style.backgroundColor = 'rgba(67, 97, 238, 0.05)';
            iconSpan.style.transform = 'scale(1.1)';
        });
        
        suggestion.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.classList.remove('focused');
            iconSpan.style.transform = '';
        });
        
        // Navigate to tool on click
        suggestion.addEventListener('click', () => {
            // Add click effect
            suggestion.style.backgroundColor = 'rgba(67, 97, 238, 0.15)';
            
            // Track this search
            if (typeof trackSearch === 'function') {
                trackSearch(tool.name.toLowerCase());
            }
            
            // Show status and redirect
            const searchStatus = document.querySelector('.search-status');
            if (searchStatus) {
                searchStatus.textContent = `Opening ${tool.name}...`;
                searchStatus.classList.add('visible');
            }
            
            setTimeout(() => {
                window.location.href = tool.url;
            }, 300);
        });
        
        // Staggered animations
        setTimeout(() => {
            suggestion.style.opacity = '1';
            suggestion.style.transform = 'translateY(0)';
            suggestion.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }, index * 50); // Stagger by 50ms per item
        
        return suggestion;
    }
    
    // Function to hide suggestions
    function hideSuggestions() {
        suggestionsContainer.classList.remove('visible');
        setTimeout(() => {
            suggestionsContainer.style.display = 'none';
            suggestionsContainer.innerHTML = '';
        }, 300); // Wait for fade-out transition
    }
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    // Show suggestions again when focusing on input with content
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            // Trigger input event to refresh suggestions
            const inputEvent = new Event('input', { bubbles: true });
            this.dispatchEvent(inputEvent);
        }
    });
    
    // Keyboard navigation for suggestions
    searchInput.addEventListener('keydown', function(e) {
        const suggestions = suggestionsContainer.querySelectorAll('.suggestion-item:not(.no-results)');
        if (!suggestions.length) return;
        
        // Find current focused item
        const focused = suggestionsContainer.querySelector('.suggestion-item.focused');
        let index = -1;
        
        if (focused) {
            suggestions.forEach((suggestion, i) => {
                if (suggestion === focused) index = i;
            });
        }
        
        // Handle arrow keys
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (index < suggestions.length - 1) {
                if (focused) {
                    focused.classList.remove('focused');
                    focused.style.backgroundColor = '';
                }
                
                suggestions[index + 1].classList.add('focused');
                suggestions[index + 1].style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
                suggestions[index + 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index > 0) {
                if (focused) {
                    focused.classList.remove('focused');
                    focused.style.backgroundColor = '';
                }
                
                suggestions[index - 1].classList.add('focused');
                suggestions[index - 1].style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
                suggestions[index - 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        } else if (e.key === 'Enter' && focused) {
            e.preventDefault();
            focused.click();
        } else if (e.key === 'Escape') {
            hideSuggestions();
        }
    });
}

// Run the initialization when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize enhanced search UI
    initSearchUI();
    
    // Initialize dynamic suggestions
    initDynamicSuggestions();
    
    // Initialize other components
    // ---- Improved section animation with consistent approach ----
    // Create dedicated function for handling section animations
    function initSectionAnimations() {
        // Create a single observer with proper logic for section animations
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the correct class to make the section visible
                    entry.target.classList.add('section-visible');
                    
                    // No need for setTimeout for animate-element children
                    // CSS transitions will handle the staggered effect
                    
                    // Stop observing once section is visible
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Lower threshold for earlier animation triggering
            rootMargin: '0px'
        });
        
        // Select all sections to animate
        const animatedSections = document.querySelectorAll('.section-animate');
        
        // Special handling for hero section - make it visible immediately
        const heroSection = document.querySelector('.hero.section-animate');
        if (heroSection) {
            // Simply add the visible class to the hero section
            // The CSS transitions will handle the animations
            heroSection.classList.add('section-visible');
            
            // Don't observe hero since we've already handled it
            animatedSections.forEach(section => {
                if (section !== heroSection) {
                    sectionObserver.observe(section);
                }
            });
        } else {
            // If for some reason hero section isn't found, observe all sections
            animatedSections.forEach(section => {
                sectionObserver.observe(section);
            });
        }
        
        // Add CSS helper for staggered animations of child elements
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            /* Add staggered delays to animate-element children */
            .section-visible .animate-element:nth-child(1) { transition-delay: 0.1s; }
            .section-visible .animate-element:nth-child(2) { transition-delay: 0.2s; }
            .section-visible .animate-element:nth-child(3) { transition-delay: 0.3s; }
            .section-visible .animate-element:nth-child(4) { transition-delay: 0.4s; }
            .section-visible .animate-element:nth-child(5) { transition-delay: 0.5s; }
        `;
        document.head.appendChild(styleSheet);
    }
    
    // Call the animation initialization function directly
    initSectionAnimations();
    
    // ---- Fixed Intersection Observer implementation ----
    // Create a single observer with proper logic for section animations
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the correct class to make the section visible
                entry.target.classList.add('section-visible');
                
                // Animate child elements with staggered timing
                const animElements = entry.target.querySelectorAll('.animate-element');
                animElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 200 * index);
                });
                
                // Stop observing once section is visible
                observer.unobserve(entry.target);
            }
        });
    }
    
    // Create a single observer instance
    const sectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    // Select all sections to animate
    const animatedSections = document.querySelectorAll('.section-animate');
    
    // Observe each section
    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Special handling for hero section - make it visible immediately if in viewport
    const heroSection = document.querySelector('.hero.section-animate');
    if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            heroSection.classList.add('section-visible');
            
            // Also animate hero elements
            const animElements = heroSection.querySelectorAll('.animate-element');
            animElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200 * index);
            });
            
            // Don't observe hero section since we've already handled it
            sectionObserver.unobserve(heroSection);
        }
    }
    
    // Handle popular search tag clicks
    const popularSearchTags = document.querySelectorAll('.search-tag');
    
    if (popularSearchTags && searchInput) {
        popularSearchTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Get tag value
                const tagValue = this.getAttribute('data-tag');
                
                // Set search input value
                searchInput.value = tagValue;
                searchInput.focus();
                
                // Trigger input event to show suggestions
                const inputEvent = new Event('input', { bubbles: true });
                searchInput.dispatchEvent(inputEvent);
                
                // Add slight highlight animation to the tag
                this.classList.add('tag-clicked');
                setTimeout(() => {
                    this.classList.remove('tag-clicked');
                }, 500);
            });
        });
    }
    
    // Enhance search input with focus effects
    if (searchInput) {
        const searchBox = document.querySelector('.search-box');
        
        searchInput.addEventListener('focus', function() {
            if (searchBox) {
                searchBox.classList.add('search-focused');
            }
        });
        
        searchInput.addEventListener('blur', function() {
            if (searchBox) {
                setTimeout(() => {
                    // Only remove if we're not focusing on something inside the search box
                    if (!searchBox.contains(document.activeElement)) {
                        searchBox.classList.remove('search-focused');
                    }
                }, 100);
            }
        });
    }
    
    // Dynamic placeholder text
    // Dynamic placeholder text
    if (searchInput) {
        let placeholders = [
            'Search for a tool...',
            'Try "password generator"...',
            'Need a "currency converter"?',
            'Looking for a "BMI calculator"?',
            'Try "color converter"...'
        ];
        let currentPlaceholder = 0;
        
        // Change placeholder every 3 seconds if not focused
        const changePlaceholder = () => {
            if (document.activeElement !== searchInput) {
                currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
                
                // Fade out
                searchInput.style.opacity = '0.7';
                
                setTimeout(() => {
                    searchInput.setAttribute('placeholder', placeholders[currentPlaceholder]);
                    
                    // Fade in
                    searchInput.style.opacity = '1';
                }, 300);
            }
        };
        
        // Start changing placeholders after 3 seconds
        setTimeout(() => {
            setInterval(changePlaceholder, 3000);
        }, 3000);
    }
    
    // FAQ Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon i');
        
        // Add hover effect
        header.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                header.style.backgroundColor = 'var(--background-alt)';
                if (icon) {
                    icon.style.transform = 'rotate(45deg) scale(1.1)';
                }
            }
        });
        
        header.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                header.style.backgroundColor = '';
                if (icon) {
                    icon.style.transform = '';
                }
            }
        });
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all accordion items with animation
            accordionItems.forEach(accItem => {
                const accContent = accItem.querySelector('.accordion-content');
                const accIcon = accItem.querySelector('.accordion-icon i');
                
                if (accItem.classList.contains('active')) {
                    accItem.classList.remove('active');
                    if (accIcon) {
                        accIcon.style.transform = '';
                    }
                }
            });
            
            // If the clicked item wasn't active, open it with animation
            if (!isActive) {
                item.classList.add('active');
                if (icon) {
                    icon.style.transform = 'rotate(45deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                
                // Highlight the content briefly
                if (content) {
                    content.style.backgroundColor = 'var(--background-alt)';
                    setTimeout(() => {
                        content.style.backgroundColor = '';
                        content.style.transition = 'background-color 1s ease';
                    }, 200);
                }
            }
        });
    });
    
    // Initialize search components
    initSearchFilters();
    initEnhancedSearchAutocomplete();
    initVoiceSearch();
    showRecentSearches();
    
    // Handle search functionality
    const searchButton = document.querySelector('.search-button');
    const searchError = document.getElementById('search-error');
    const searchStatus = document.querySelector('.search-status');
    
    function performSearch() {
        // Clear previous error messages
        clearSearchError();
        
        const query = searchInput.value.trim().toLowerCase();
        if (query.length === 0) {
            showSearchError('Please enter a search term');
            searchInput.focus();
            return;
        }
        
        // Show searching status
        showSearchStatus('Searching...');
        
        // Track this search in recent searches
        trackSearch(query);
        
        // Find the first matching tool and redirect to it
        const matchingTool = findBestMatchingTool(query);
        if (matchingTool) {
            showSearchStatus('Tool found! Redirecting...');
            setTimeout(() => {
                window.location.href = matchingTool.url;
            }, 500);
        } else {
            showSearchError('No matching tools found. Try another search term.');
            showRecentSearches(); // Show recent searches as suggestions
        }
    }
    
    function showSearchError(message) {
        if (!searchError) return;
        
        searchError.textContent = message;
        searchError.classList.add('visible');
        
        // Vibration feedback if supported
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        // Auto-hide error after 5 seconds
        setTimeout(() => {
            clearSearchError();
        }, 5000);
    }
    
    function clearSearchError() {
        if (!searchError) return;
        searchError.textContent = '';
        searchError.classList.remove('visible');
        
        // Also clear status
        if (searchStatus) {
            searchStatus.textContent = '';
            searchStatus.classList.remove('visible');
        }
    }
    
    function showSearchStatus(message) {
        if (!searchStatus) return;
        searchStatus.textContent = message;
        searchStatus.classList.add('visible');
    }
    
    // Event listeners for search functionality
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Mobile Menu functionality and enhanced header animations
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');
    const logoDot = document.querySelector('.logo-dot');
    
    // Add loading class to enable animations
    if (header) {
        header.classList.add('header-loading');
    }
    
    // Initial animations for header elements
    function animateHeaderElements() {
        if (logo) {
            logo.style.opacity = '0';
            logo.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                logo.style.opacity = '1';
                logo.style.transform = 'translateY(0)';
            }, 300);
        }
        
                // Animate nav links with staggered delay
                navLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, 300 + index * 100);
                });
            }
        });
// Enhanced typing particle effect manager for better performance
class InputParticleManager {
    constructor(container) {
        this.container = container;
        this.particlePool = [];
        this.maxPoolSize = 20; // Limit particles for performance
        this.active = false;
        this.createParticlePool();
    }
    
    createParticlePool() {
        // Create reusable particles
        for (let i = 0; i < this.maxPoolSize; i++) {
            const particle = document.createElement('span');
            particle.className = 'input-particle';
            particle.style.display = 'none';
            this.container.appendChild(particle);
            this.particlePool.push(particle);
        }
    }
    
    getParticle() {
        // Find an available particle from the pool
        for (let i = 0; i < this.particlePool.length; i++) {
            const particle = this.particlePool[i];
            if (particle.style.display === 'none') {
                return particle;
            }
        }
        
        // If no particles available, return the first one (recycle)
        return this.particlePool[0];
    }
    
    createParticle() {
        if (!this.active) return;
        
        const particle = this.getParticle();
        particle.style.display = 'block';
        particle.style.left = `${Math.random() * 100}%`;
        
        // Add random size, color, and position variations
        const size = 4 + Math.random() * 8;
        const hue = Math.random() > 0.5 ? '215' : '160'; // Primary or secondary color hue
        const top = 25 + Math.random() * 30;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsla(${hue}, 80%, 60%, 0.6)`;
        particle.style.top = `${top}%`;
        
        // Return particle to pool after animation
        setTimeout(() => {
            particle.style.display = 'none';
        }, 600);
    }
    
    start() {
        this.active = true;
    }
    
    stop() {
        this.active = false;
    }
    
    // Clean up method to remove all particles
    destroy() {
        this.particlePool.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        this.particlePool = [];
    }
}

// Function to initialize our enhanced search UI
function initSearchUI() {
    try {
        const searchInput = document.getElementById('tool-search');
        const searchBox = document.querySelector('.search-box');
        const searchButton = document.querySelector('.search-submit-btn');
        const voiceButton = document.getElementById('voice-search');
        const searchTags = document.querySelectorAll('.search-tag-btn');
        
        if (!searchInput || !searchBox) {
            console.warn('Search elements not found in the DOM, aborting search UI initialization');
            return;
        }
        
        console.log('Initializing enhanced search UI');
        
        // Create and initialize particle manager for typing effects
        const particleManager = new InputParticleManager(searchBox);
        
        // Add focus effects with subtle animation
        searchInput.addEventListener('focus', function() {
            searchBox.classList.add('search-focused');
            particleManager.start();
            
            // Apply subtle animation
            this.style.transform = 'translateX(5px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
        
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                // Only remove if we're not focusing on something inside the search box
                if (!searchBox.contains(document.activeElement)) {
                    searchBox.classList.remove('search-focused');
                    particleManager.stop();
                }
            }, 150);
        });
        
        // Add typing particle effect with improved performance
        searchInput.addEventListener('input', function(e) {
            if (this.value.trim().length > 0 && e.inputType !== 'deleteContentBackward') {
                particleManager.createParticle();
            }
        });
        
        // Set up search button with ripple effect
        if (searchButton) {
            searchButton.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('btn-ripple');
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height) * 2;
                
                // Calculate ripple position
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 700);
                
                // Trigger search
                if (typeof performSearch === 'function') {
                    performSearch();
                } else {
                    console.error('performSearch function not available');
                }
            });
        }
        
        // Set up voice button with ripple and interactive effects
        if (voiceButton) {
            voiceButton.addEventListener('mouseenter', function() {
                if (!this.classList.contains('listening')) {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 6px 15px rgba(67, 97, 238, 0.25)';
                }
            });
            
            voiceButton.addEventListener('mouseleave', function() {
                if (!this.classList.contains('listening')) {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }
            });
            
            // Add ripple effect on click
            voiceButton.addEventListener('click', function(e) {
                if (!this.classList.contains('listening')) {
                    // Create ripple effect
                    const ripple = document.createElement('span');
                    ripple.classList.add('btn-ripple');
                    
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height) * 2;
                    
                    ripple.style.width = ripple.style.height = `${size}px`;
                    ripple.style.left = `${(e.clientX - rect.left - size / 2)}px`;
                    ripple.style.top = `${(e.clientY - rect.top - size / 2)}px`;
                    
                    this.appendChild(ripple);
                    
                    // Remove ripple after animation
                    setTimeout(() => ripple.remove(), 700);
                }
            });
        }
        
        // Set up search tags with typing animation
        if (searchTags && searchTags.length > 0) {
            searchTags.forEach(tag => {
                // Add hover effects
                tag.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 8px rgba(67, 97, 238, 0.15)';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
                
                // Add click with typing animation
                tag.addEventListener('click', function() {
                    // Add click animation
                    this.classList.add('tag-clicked');
                    setTimeout(() => this.classList.remove('tag-clicked'), 500);
                    
                    const tagValue = this.getAttribute('data-tag');
                    if (!tagValue) return;
                    
                    // Focus the search input
                    searchInput.focus();
                    searchBox.classList.add('search-focused');
                    particleManager.start();
                    
                    // Clear current input
                    searchInput.value = '';
                    
                    // Animate typing effect with particles
                    let index = 0;
                    const typingSpeed = 50; // ms between characters
                    
                    function typeNextChar() {
                        if (index < tagValue.length) {
                            searchInput.value += tagValue.charAt(index);
                            
                            // Create particle effect for each character
                            particleManager.createParticle();
                            
                            index++;
                            setTimeout(typeNextChar, typingSpeed);
                        } else {
                            // Trigger input event when done typing
                            const inputEvent = new Event('input', { bubbles: true });
                            searchInput.dispatchEvent(inputEvent);
                            
                            // Add finishing animation
                            searchInput.classList.add('typing-complete');
                            setTimeout(() => {
                                searchInput.classList.remove('typing-complete');
                            }, 500);
                        }
                    }
                    
                    // Start typing with a small delay
                    setTimeout(typeNextChar, 100);
                });
            });
        }
        
        // Start the dynamic placeholder cycling
        const cleanup = initAdvancedPlaceholderCycling(searchInput);
        
        // Return a cleanup function
        return function() {
            particleManager.destroy();
            if (cleanup) cleanup();
        };
    } catch (error) {
        console.error('Error initializing search UI:', error);
    }
}

// Initialize dynamic autocomplete suggestions with animations
function initDynamicSuggestions() {
    const searchInput = document.getElementById('tool-search');
    const searchBox = document.querySelector('.search-box');
    
    if (!searchInput) return;
    
    // Create or get suggestions container
    let suggestionsContainer = document.querySelector('.search-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.setAttribute('aria-live', 'polite');
        suggestionsContainer.setAttribute('role', 'listbox');
        if (searchBox) searchBox.appendChild(suggestionsContainer);
    }
    
    // Handle showing suggestions when typing
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const selectedCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
        
        // Clear suggestions when query is too short
        if (query.length < 2) {
            hideSuggestions();
            return;
        }
        
        // Get matches filtered by category
        const matches = toolsData.filter(tool => {
            const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
            if (!categoryMatch) return false;
            
            // Check for matches in name, description, and tags
            const nameMatch = tool.name.toLowerCase().includes(query);
            const descMatch = tool.description.toLowerCase().includes(query);
            const tagMatch = tool.tags.some(tag => tag.includes(query));
            
            return nameMatch || descMatch || tagMatch;
        }).slice(0, 6); // Limit to avoid overwhelming the user
        
        // Update the suggestions display
        updateSuggestions(matches, query);
    });
    
    // Function to update suggestions
    function updateSuggestions(matches, query) {
        suggestionsContainer.innerHTML = '';
        
        if (matches.length > 0) {
            // Show container with animation
            suggestionsContainer.style.display = 'block';
            setTimeout(() => {
                suggestionsContainer.classList.add('visible');
            }, 10);
            
            // Add each suggestion with staggered animation
            matches.forEach((match, index) => {
                const suggestion = createSuggestionElement(match, query, index);
                suggestionsContainer.appendChild(suggestion);
            });
        } else if (query.length >= 2) {
            // Show "no results" message
            suggestionsContainer.style.display = 'block';
            setTimeout(() => {
                suggestionsContainer.classList.add('visible');
            }, 10);
            
            const noResults = document.createElement('div');
            noResults.className = 'suggestion-item no-results';
            noResults.innerHTML = `<span class="no-results-icon"><i class="fas fa-search"></i></span> No matching tools found for "${query}"`;
            noResults.style.opacity = '0';
            noResults.style.transform = 'translateY(10px)';
            
            suggestionsContainer.appendChild(noResults);
            
            // Animate in
            setTimeout(() => {
                noResults.style.opacity = '1';
                noResults.style.transform = 'translateY(0)';
                noResults.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            }, 50);
        }
    }
    
    // Function to create a suggestion element
    function createSuggestionElement(tool, query, index) {
        const suggestion = document.createElement('div');
        suggestion.className = 'suggestion-item';
        suggestion.setAttribute('role', 'option');
        suggestion.style.opacity = '0';
        suggestion.style.transform = 'translateY(10px)';
        
        // Create icon element with tool's icon
        const iconSpan = document.createElement('span');
        iconSpan.className = 'suggestion-icon';
        iconSpan.innerHTML = `<i class="fas ${tool.icon}"></i>`;
        
        // Create content container
        const contentDiv = document.createElement('div');
        contentDiv.className = 'suggestion-content';
        
        // Add tool name with highlighted query
        const nameEl = document.createElement('div');
        nameEl.className = 'suggestion-name';
        const nameParts = tool.name.split(new RegExp(`(${query})`, 'i'));
        let nameHTML = '';
        nameParts.forEach(part => {
            if (part.toLowerCase() === query.toLowerCase()) {
                nameHTML += `<strong>${part}</strong>`;
            } else {
                nameHTML += part;
            }
        });
        nameEl.innerHTML = nameHTML;
        
        // Add description (truncated if needed)
        const descEl = document.createElement('div');
        descEl.className = 'suggestion-description';
        let desc = tool.description;
        if (desc.length > 60) {
            desc = desc.substring(0, 57) + '...';
        }
        descEl.textContent = desc;
        
        // Add category badge
        const categoryEl = document.createElement('span');
        categoryEl.className = 'suggestion-category';
        categoryEl.textContent = tool.category.charAt(0).toUpperCase() + tool.category.slice(1);
        
                // Assemble the suggestion elements
                contentDiv.appendChild(nameEl);
                contentDiv.appendChild(descEl);
                suggestion.appendChild(iconSpan);
                suggestion.appendChild(contentDiv);
                suggestion.appendChild(categoryEl);
                
                return suggestion;
            }
            
            // Function to hide suggestions
            function hideSuggestions() {
                suggestionsContainer.classList.remove('visible');
                setTimeout(() => {
                    suggestionsContainer.style.display = 'none';
                    suggestionsContainer.innerHTML = '';
                }, 300); // Wait for fade-out transition
            }
        }
        suggestion.appendChild(iconSpan);
        suggestion.appendChild(contentDiv);
        suggestion.appendChild(categoryEl);
        
        // Add hover effect
        suggestion.addEventListener('mouseenter', function() {
            // Clear focused class from all suggestions
            document.querySelectorAll('.suggestion-item').forEach(item => {
                item.classList.remove('focused');
            });
            
            // Apply focus to this suggestion
            this.classList.add('focused');
            this.style.backgroundColor = 'rgba(67, 97, 238, 0.05)';
            iconSpan.style.transform = 'scale(1.1)';
        });
        
        suggestion.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.classList.remove('focused');
            iconSpan.style.transform = '';
        });
        
        // Navigate to tool on click
        suggestion.addEventListener('click', () => {
            // Add click effect
            suggestion.style.backgroundColor = 'rgba(67, 97, 238, 0.15)';
            
            // Track this search
            if (typeof trackSearch === 'function') {
                trackSearch(tool.name.toLowerCase());
            }
            
            // Show status and redirect
            const searchStatus = document.querySelector('.search-status');
            if (searchStatus) {
                searchStatus.textContent = `Opening ${tool.name}...`;
                searchStatus.classList.add('visible');
            }
            
            setTimeout(() => {
                window.location.href = tool.url;
            }, 300);
        });
        
        // Staggered animations
        setTimeout(() => {
            suggestion.style.opacity = '1';
            suggestion.style.transform = 'translateY(0)';
            suggestion.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }, index * 50); // Stagger by 50ms per item
        
        return suggestion;
    }
    
    // Function to hide suggestions
    function hideSuggestions() {
        suggestionsContainer.classList.remove('visible');
        setTimeout(() => {
            suggestionsContainer.style.display = 'none';
            suggestionsContainer.innerHTML = '';
        }, 300); // Wait for fade-out transition
    }
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    // Show suggestions again when focusing on input with content
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            // Trigger input event to refresh suggestions
            const inputEvent = new Event('input', { bubbles: true });
            this.dispatchEvent(inputEvent);
        }
    });
    
    // Keyboard navigation for suggestions
    searchInput.addEventListener('keydown', function(e) {
        const suggestions = suggestionsContainer.querySelectorAll('.suggestion-item:not(.no-results)');
        if (!suggestions.length) return;
        
        // Find current focused item
        const focused = suggestionsContainer.querySelector('.suggestion-item.focused');
        let index = -1;
        
        if (focused) {
            suggestions.forEach((suggestion, i) => {
                if (suggestion === focused) index = i;
            });
        }
        
        // Handle arrow keys
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (index < suggestions.length - 1) {
                if (focused) {
                    focused.classList.remove('focused');
                    focused.style.backgroundColor = '';
                }
                
                suggestions[index + 1].classList.add('focused');
                suggestions[index + 1].style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
                suggestions[index + 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index > 0) {
                if (focused) {
                    focused.classList.remove('focused');
                    focused.style.backgroundColor = '';
                }
                
                suggestions[index - 1].classList.add('focused');
                suggestions[index - 1].style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
                suggestions[index - 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        } else if (e.key === 'Enter' && focused) {
            e.preventDefault();
            focused.click();
        } else if (e.key === 'Escape') {
            hideSuggestions();
        }
    });
}