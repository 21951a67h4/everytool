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
    const searchTags = document.querySelectorAll('.search-tag');
    const searchInput = document.getElementById('tool-search');
    
    if (searchTags && searchInput) {
        searchTags.forEach(tag => {
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
    if (searchInput) {
        const placeholders = [
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
    const searchButton = document.querySelector('.search-submit-btn');
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
            performSearch();
        });
    }
    
    // Add micro-animation effects for voice search
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
        
        voiceButton.addEventListener('click', function(e) {
            // Create ripple effect if not already listening
            if (!this.classList.contains('listening')) {
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
            }
        });
    }
    
    // Enhanced tag click effect with typing animation
    if (searchTags.length) {
        searchTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
            
            tag.addEventListener('click', function() {
                // Add click animation
                this.classList.add('tag-clicked');
                setTimeout(() => this.classList.remove('tag-clicked'), 600);
                
                // Get tag value
                const tagValue = this.getAttribute('data-tag');
                
                // Set input focus
                searchInput.focus();
                searchBox.classList.add('search-focused');
                
                // Animate typing effect
                animateTypingEffect(searchInput, tagValue);
            });
        });
    }
    
    // Simulate typing effect
    function animateTypingEffect(input, text) {
        // Clear current input
        input.value = '';
        
        // Focus the input
        input.focus();
        
        let i = 0;
        const typingSpeed = 50; // ms between characters
        
        function typeNextChar() {
            if (i < text.length) {
                input.value += text.charAt(i);
                i++;
                setTimeout(typeNextChar, typingSpeed);
            } else {
                // Trigger input event to show suggestions when done typing
                const inputEvent = new Event('input', { bubbles: true });
                input.dispatchEvent(inputEvent);
                
                // Add slight pulsing effect to input when done typing
                input.classList.add('typing-complete');
                setTimeout(() => {
                    input.classList.remove('typing-complete');
                }, 500);
            }
        }
        
        // Start the typing effect
        setTimeout(typeNextChar, 100);
    }
    
    // Placeholder cycling with smooth transitions
    initPlaceholderCycling(searchInput);
}

// Placeholder cycling function with smoother animations
function initPlaceholderCycling(input) {
    if (!input) return;
    
    const placeholders = [
        'Search for a tool...',
        'Try "password generator"...',
        'Need a "currency converter"?',
        'Looking for a "BMI calculator"?',
        'Try "color converter"...'
    ];
    
    let currentIndex = 0;
    
    // Change placeholder every 3.5 seconds if not focused
    const changePlaceholder = () => {
        if (document.activeElement !== input) {
            // Fade out
            input.style.opacity = '0.6';
            
            setTimeout(() => {
                // Change placeholder
                currentIndex = (currentIndex + 1) % placeholders.length;
                input.setAttribute('placeholder', placeholders[currentIndex]);
                
                // Fade in
                input.style.opacity = '1';
            }, 300);
        }
    };
    
    // Start cycling after initial delay
    setTimeout(() => {
        setInterval(changePlaceholder, 3500);
    }, 5000);
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
    const searchTags = document.querySelectorAll('.search-tag');
    const searchInput = document.getElementById('tool-search');
    
    if (searchTags && searchInput) {
        searchTags.forEach(tag => {
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
    if (searchInput) {
        const placeholders = [
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