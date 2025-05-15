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
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 30 + 10; // 10-40px
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 15 + 10; // 10-25s
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    container.appendChild(particle);
}

// Main initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles background
    const particlesContainer = document.getElementById('particles-background');
    if (particlesContainer) {
        // Create particles with different sizes and positions
        for (let i = 0; i < 20; i++) {
            createParticle(particlesContainer);
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
            link.style.transform = 'translateY(-15px)';
            setTimeout(() => {
                link.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 400 + (index * 100));
        });
    }
    
    // Call the animation function with slight delay
    setTimeout(animateHeaderElements, 200);
    
    // Add interactive hover effects for nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const siblings = Array.from(navLinks).filter(item => item !== link);
            siblings.forEach(sibling => {
                sibling.style.opacity = '0.6';
                sibling.style.transform = 'scale(0.95)';
            });
            
            // Add highlight effect to current link
            link.style.transform = 'translateY(-2px) scale(1.05)';
            
            // Add glow effect to logo dot when hovering on links
            if (logoDot) {
                logoDot.style.boxShadow = '0 0 15px rgba(6, 214, 160, 0.7)';
                logoDot.style.transform = 'scale(1.2)';
            }
        });
        
        link.addEventListener('mouseleave', () => {
            navLinks.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = '';
            });
            
            // Reset logo dot
            if (logoDot) {
                logoDot.style.boxShadow = '';
                logoDot.style.transform = '';
            }
        });
        
        // Add ripple effect to nav links
        link.addEventListener('click', createRippleEffect);
    });
    
    // Function to create ripple effect on click
    function createRippleEffect(e) {
        const element = this;
        
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('nav-ripple');
        element.appendChild(ripple);
        
        // Set ripple position based on click
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        
        // Remove ripple after animation completes
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
    
    // Add logo interactive effects
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.05)';
            if (logoDot) {
                logoDot.style.transform = 'scale(1.3) rotate(45deg)';
                logoDot.style.boxShadow = '0 0 20px rgba(6, 214, 160, 0.8)';
            }
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = '';
            if (logoDot) {
                logoDot.style.transform = '';
                logoDot.style.boxShadow = '';
            }
        });
        
        // Add click animation
        logo.addEventListener('click', () => {
            if (logoDot) {
                logoDot.style.transform = 'scale(1.5) rotate(90deg)';
                setTimeout(() => {
                    logoDot.style.transform = '';
                }, 300);
            }
        });
    }
    
    // Back to Top Button functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add hover animation
        backToTopButton.addEventListener('mouseenter', () => {
            const icon = backToTopButton.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-3px)';
                backToTopButton.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            }
        });
        
        backToTopButton.addEventListener('mouseleave', () => {
            const icon = backToTopButton.querySelector('i');
            if (icon) {
                icon.style.transform = '';
                backToTopButton.style.boxShadow = '';
            }
        });
    }
    
    // Enhanced Mobile menu toggle with micro-animations
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-btn');
    const body = document.body;

    if (mobileMenuBtn && mobileMenu) {
        // Add hover effect to menu button
        mobileMenuBtn.addEventListener('mouseenter', () => {
            mobileMenuBtn.style.transform = 'scale(1.1)';
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(90deg)';
            }
        });
        
        mobileMenuBtn.addEventListener('mouseleave', () => {
            mobileMenuBtn.style.transform = '';
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.style.transform = '';
            }
        });
        
        // Opening animation
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'block';
            setTimeout(() => {
                mobileMenu.classList.add('open');
                body.classList.add('menu-open');
            }, 10);
        });
    }
    
    if (closeMenuBtn && mobileMenu) {
        // Add hover effect to close button
        closeMenuBtn.addEventListener('mouseenter', () => {
            closeMenuBtn.style.transform = 'scale(1.1) rotate(90deg)';
        });
        
        closeMenuBtn.addEventListener('mouseleave', () => {
            closeMenuBtn.style.transform = '';
        });
        
        // Closing animation
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            body.classList.remove('menu-open');
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
        });
    }
    
    // Close mobile menu when clicking on a menu link with added animations
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-links a');
    if (mobileMenuLinks.length > 0) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) {
                    // Animate the clicked link before closing
                    link.style.transform = 'scale(1.1)';
                    link.style.opacity = '0.7';
                    
                    setTimeout(() => {
                        mobileMenu.classList.remove('open');
                        body.classList.remove('menu-open');
                        setTimeout(() => {
                            mobileMenu.style.display = 'none';
                            // Reset link styles
                            link.style.transform = '';
                            link.style.opacity = '';
                        }, 300);
                    }, 100);
                }
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            // If click is outside the mobile menu and not on the toggle button
            if (!mobileMenu.contains(event.target) && 
                !event.target.closest('.mobile-menu-btn')) {
                mobileMenu.classList.remove('open');
                body.classList.remove('menu-open');
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300);
            }
        }
    });
    
    // Update tool counts
    updateToolCounts();
});

// Enhanced initialization of search filters with keyboard accessibility
function initSearchFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        // Add keyboard accessibility
        button.setAttribute('tabindex', '0');
        
        // Handle click event
        button.addEventListener('click', function() {
            activateFilterButton(this);
        });
        
        // Handle keyboard event
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateFilterButton(this);
            }
        });
    });
    
    function activateFilterButton(clickedButton) {
        // Update aria-pressed states
        filterButtons.forEach(btn => {
            btn.setAttribute('aria-pressed', 'false');
            btn.classList.remove('active');
        });
        
        clickedButton.setAttribute('aria-pressed', 'true');
        clickedButton.classList.add('active');
        
        // Announce filter change to screen readers
        const searchStatus = document.querySelector('.search-status');
        if (searchStatus) {
            searchStatus.textContent = `Filter changed to: ${clickedButton.textContent}`;
            searchStatus.classList.add('visible');
            
            // Hide status after a moment
            setTimeout(() => {
                searchStatus.classList.remove('visible');
            }, 2000);
        }
        
        // Clear the search input to show fresh results for the selected category
        const searchInput = document.getElementById('tool-search');
        if (searchInput && searchInput.value.trim().length > 0) {
            // Trigger the input event to refresh suggestions based on the new category
            const inputEvent = new Event('input', { bubbles: true });
            searchInput.dispatchEvent(inputEvent);
        }
    }
}

// Find the best matching tool for a query
function findBestMatchingTool(query) {
    const selectedCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    
    // First try to find an exact match in name
    let matches = toolsData.filter(tool => {
        const nameMatch = tool.name.toLowerCase().includes(query);
        const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
        return nameMatch && categoryMatch;
    });
    
    // If no matches in name, try tags and description
    if (!matches.length) {
        matches = toolsData.filter(tool => {
            const tagMatch = tool.tags.some(tag => tag.includes(query));
            const descMatch = tool.description.toLowerCase().includes(query);
            const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
            return (tagMatch || descMatch) && categoryMatch;
        });
    }
    
    // Return the first match or null if no matches
    return matches.length ? matches[0] : null;
}

// Enhanced autocomplete with category filtering and better UI
function initEnhancedSearchAutocomplete() {
    const searchInput = document.getElementById('tool-search');
    if (!searchInput) return;
    
    // Create suggestions container if it doesn't exist
    let suggestionsContainer = document.querySelector('.search-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.style.display = 'none'; // Hide by default
        searchInput.parentNode.appendChild(suggestionsContainer);
    }
    
    // Add input event to show suggestions
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const selectedCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
        
        // Clear suggestions if query is too short
        if (query.length < 2) {
            suggestionsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'none'; // Hide when query is cleared or too short
            suggestionsContainer.classList.remove('visible');
            return;
        }
        
        // Get matching tools filtered by category
        const matches = toolsData.filter(tool => {
            // Apply category filter if not "all"
            const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
            if (!categoryMatch) return false;
            
            // Check name, description, and tags
            const nameMatch = tool.name.toLowerCase().includes(query);
            const descMatch = tool.description.toLowerCase().includes(query);
            const tagMatch = tool.tags.some(tag => tag.includes(query));
            
            return nameMatch || descMatch || tagMatch;
        }).slice(0, 6); // Limit to 6 suggestions
        
        // Display matches with enhanced UI
        suggestionsContainer.innerHTML = '';
        if (matches.length > 0 || query.length >= 2) {
            suggestionsContainer.style.display = 'block'; // Show only when there's content
            
            // Add the visible class for CSS transitions
            setTimeout(() => {
                suggestionsContainer.classList.add('visible');
            }, 10);
            
            if (matches.length > 0) {
                matches.forEach(match => {
                    const suggestion = document.createElement('div');
                    suggestion.className = 'suggestion-item';
                    
                    // Create icon element
                    const iconSpan = document.createElement('span');
                    iconSpan.className = 'suggestion-icon';
                    iconSpan.innerHTML = `<i class="fas ${match.icon}"></i>`;
                    
                    // Create content div for text
                    const contentDiv = document.createElement('div');
                    contentDiv.className = 'suggestion-content';
                    
                    // Add tool name with highlighted query
                    const nameEl = document.createElement('div');
                    nameEl.className = 'suggestion-name';
                    const nameParts = match.name.split(new RegExp(`(${query})`, 'i'));
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
                    let desc = match.description;
                    if (desc.length > 60) {
                        desc = desc.substring(0, 57) + '...';
                    }
                    descEl.textContent = desc;
                    
                    // Add category badge
                    const categoryEl = document.createElement('span');
                    categoryEl.className = 'suggestion-category';
                    categoryEl.textContent = match.category.charAt(0).toUpperCase() + match.category.slice(1);
                    
                    // Assemble the content div
                    contentDiv.appendChild(nameEl);
                    contentDiv.appendChild(descEl);
                    
                    // Add everything to the suggestion item
                    suggestion.appendChild(iconSpan);
                    suggestion.appendChild(contentDiv);
                    suggestion.appendChild(categoryEl);
                    
                    // Add click event to navigate to the tool
                    suggestion.addEventListener('click', () => {
                        trackSearch(match.name.toLowerCase()); // Track this click as a search
                        window.location.href = match.url;
                    });
                    
                    suggestionsContainer.appendChild(suggestion);
                });
            } else {
                // No matches found
                const noResults = document.createElement('div');
                noResults.className = 'suggestion-item no-results';
                noResults.innerHTML = `<span class="no-results-icon"><i class="fas fa-search"></i></span> No matching tools found for "${query}"`;
                suggestionsContainer.appendChild(noResults);
            }
        }
    });
    
    // Hide suggestions when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.classList.remove('visible');
            // Wait for transition to complete before hiding
            setTimeout(() => {
                suggestionsContainer.style.display = 'none';
            }, 200);
        }
    });
    
    // Show suggestions when search input is focused with content
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            suggestionsContainer.style.display = 'block'; // Show when focused with valid content
            
            // Add the visible class after a small delay
            setTimeout(() => {
                suggestionsContainer.classList.add('visible');
            }, 10);
            
            // Simulate input event to show suggestions
            const inputEvent = new Event('input', { bubbles: true });
            this.dispatchEvent(inputEvent);
        }
    });
    
    // Hide suggestions when search input loses focus (with delay to allow clicking on suggestions)
    searchInput.addEventListener('blur', function(e) {
        // Use setTimeout to allow clicking on suggestions before hiding
        setTimeout(() => {
            // Only hide if the active element is not within the suggestions container
            if (!suggestionsContainer.contains(document.activeElement)) {
                suggestionsContainer.classList.remove('visible');
                // Wait for transition to complete before hiding
                setTimeout(() => {
                    suggestionsContainer.style.display = 'none';
                }, 200);
            }
        }, 150);
    });
    
    // Add escape key to hide suggestions
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            suggestionsContainer.classList.remove('visible');
            // Wait for transition to complete before hiding
            setTimeout(() => {
                suggestionsContainer.style.display = 'none';
            }, 200);
        }
        
        // Enable keyboard navigation for suggestions
        const suggestions = suggestionsContainer.querySelectorAll('.suggestion-item:not(.no-results)');
        if (!suggestions.length) return;
        
        // Find currently focused suggestion
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
                if (focused) focused.classList.remove('focused');
                suggestions[index + 1].classList.add('focused');
                suggestions[index + 1].scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index > 0) {
                if (focused) focused.classList.remove('focused');
                suggestions[index - 1].classList.add('focused');
                suggestions[index - 1].scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'Enter' && focused) {
            e.preventDefault();
            focused.click();
        }
    });
}

// Initialize voice search functionality
function initVoiceSearch() {
  const voiceButton = document.getElementById('voice-search');
  const searchInput = document.getElementById('tool-search');
  const searchError = document.getElementById('search-error');
  const searchStatus = document.querySelector('.search-status');
  
  if (!voiceButton || !searchInput) return;
  
  voiceButton.addEventListener('click', function() {
    // Clear previous errors
    if (searchError) {
      searchError.textContent = '';
      searchError.classList.remove('visible');
    }
    
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      // Use the appropriate recognition object based on browser support
      const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new Recognition();
      
      recognition.lang = 'en-US';
      recognition.interimResults = false; // We only want final results
      recognition.maxAlternatives = 1;
      
      // Start listening
      recognition.start();
      
      // Show visual feedback
      voiceButton.innerHTML = '<i class="fas fa-microphone-slash"></i>';
      voiceButton.classList.add('listening');
      
      // Show status message
      if (searchStatus) {
        searchStatus.textContent = 'Listening...';
        searchStatus.classList.add('visible');
      }
      
      // Process result
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        
        searchInput.value = transcript;
        searchInput.focus();
        
        // Animate the input to show it was updated
        searchInput.classList.add('voice-input-updated');
        setTimeout(() => {
          searchInput.classList.remove('voice-input-updated');
        }, 1000);
        
        // Show status message based on confidence
        if (searchStatus) {
          if (confidence < 0.5) {
            searchStatus.textContent = 'I heard: "' + transcript + '" (low confidence)';
          } else {
            searchStatus.textContent = 'I heard: "' + transcript + '"';
          }
        }
        
        // Trigger search after brief delay
        setTimeout(() => {
          const searchButton = document.querySelector('.search-button');
          if (searchButton) searchButton.click();
        }, 1000);
      };
      
      // Reset button when done
      recognition.onend = function() {
        voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceButton.classList.remove('listening');
        
        // Clear status after a delay
        setTimeout(() => {
          if (searchStatus) {
            searchStatus.classList.remove('visible');
          }
        }, 3000);
      };
      
      // Handle errors
      recognition.onerror = function(event) {
        voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceButton.classList.remove('listening');
        
        // Show appropriate error message based on the error
        let errorMsg = 'Voice recognition failed. Please try again or type your search.';
        
        if (event.error === 'no-speech') {
          errorMsg = 'No speech was detected. Please try again.';
        } else if (event.error === 'audio-capture') {
          errorMsg = 'No microphone was found. Ensure that a microphone is installed.';
        } else if (event.error === 'not-allowed') {
          errorMsg = 'Permission to use microphone was denied. Please enable microphone access.';
        }
        
        if (searchError) {
          searchError.textContent = errorMsg;
          searchError.classList.add('visible');
        } else {
          // Fallback to alert if search error element doesn't exist
          alert(errorMsg);
        }
      };
    } else {
      if (searchError) {
        searchError.textContent = 'Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.';
        searchError.classList.add('visible');
      } else {
        alert('Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.');
      }
    }
  });
}

// Track search queries for recent searches
function trackSearch(query) {
  if (query.length === 0) return;
  
  // Get existing recent searches from localStorage
  const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
  
  // Add this search to the beginning if it's not already there
  if (!recentSearches.includes(query)) {
    recentSearches.unshift(query);
    
    // Limit to 5 recent searches
    if (recentSearches.length > 5) {
      recentSearches.pop();
    }
    
    // Save back to localStorage
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }
}

// Display recent searches below the search box
function showRecentSearches() {
  const recentSearchesDiv = document.getElementById('recent-searches');
  if (!recentSearchesDiv) return;
  
  // Get recent searches from localStorage
  const searches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
  
  // Only show if we have searches
  if (searches.length === 0) return;
  
  // Create recent searches UI
  recentSearchesDiv.className = 'recent-searches';
  recentSearchesDiv.innerHTML = '<h4>Recent Searches</h4>';
  
  const list = document.createElement('ul');
  searches.forEach(search => {
    const item = document.createElement('li');
    item.innerHTML = `<a href="/tools-page/search-results.html?q=${encodeURIComponent(search)}">${search}</a>`;
    list.appendChild(item);
  });
  
  // Add a clear button
  const clearItem = document.createElement('li');
  const clearLink = document.createElement('a');
  clearLink.textContent = 'Clear recent searches';
  clearLink.href = '#';
  clearLink.style.color = '#7f8c8d';
  clearLink.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('recentSearches');
    recentSearchesDiv.remove();
  });
  clearItem.appendChild(clearLink);
  list.appendChild(clearItem);
  
  recentSearchesDiv.appendChild(list);
}

// Update tool counts for each category
function updateToolCounts() {
  const toolCounts = {
    calculator: 0,
    converter: 0,
    generator: 0,
    seo: 0
  };
  
  // Count tools by category
  toolsData.forEach(tool => {
    if (toolCounts.hasOwnProperty(tool.category)) {
      toolCounts[tool.category]++;
    }
  });
  
  // Update tool count badges
  const toolCountElements = document.querySelectorAll('.tool-count');
  toolCountElements.forEach(element => {
    const category = element.getAttribute('data-category');
    if (toolCounts.hasOwnProperty(category)) {
      element.textContent = toolCounts[category];
    }
  });
}

// Enhanced News Ticker Functionality with Error Handling
class NewsTicker {
  constructor(options = {}) {
    // Default configuration
    this.config = {
      tickerId: options.tickerId || 'ticker',
      tickerProgressBarId: options.tickerProgressBarId || 'ticker-progress-bar',
      tickerPauseBtn: options.tickerPauseBtn || '.ticker-pause',
      animationDuration: options.animationDuration || 30000, // 30 seconds
      errorRetryDelay: options.errorRetryDelay || 3000,
      maxRetries: options.maxRetries || 3
    };
    
    // State
    this.state = {
      isPaused: false,
      isInitialized: false,
      retryCount: 0
    };
    
    this.init();
  }
  
  init() {
    try {
      // Get DOM elements
      this.ticker = document.getElementById(this.config.tickerId);
      this.progressBar = document.getElementById(this.config.tickerProgressBarId);
      this.pauseBtn = document.querySelector(this.config.tickerPauseBtn);
      
      // Validate DOM elements
      if (!this.ticker || !this.progressBar) {
        throw new Error('Required ticker elements not found');
      }
      
      // Setup event listeners
      this.setupEventListeners();
      
      // Recalculate animation based on content
      this.calculateAnimationDistance();
      
      // Add resize listener for responsive behavior
      window.addEventListener('resize', this.debounce(this.calculateAnimationDistance.bind(this), 250));
      
      // Set initialization flag
      this.state.isInitialized = true;
      
      // Log success
      console.log('News ticker initialized successfully');
    } catch (error) {
      this.handleError(error);
    }
  }
  
  setupEventListeners() {
    try {
      // Pause button click handler
      if (this.pauseBtn) {
        this.pauseBtn.addEventListener('click', this.togglePause.bind(this));
        
        // Handle button keyboard interaction for accessibility
        this.pauseBtn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.togglePause();
          }
        });
      }
      
      // Mouse interaction with ticker content
      this.ticker.addEventListener('mouseenter', () => this.pause());
      this.ticker.addEventListener('mouseleave', () => {
        if (!this.state.isPaused) {
          this.play();
        }
      });
      
      // Touch interaction for mobile
      this.ticker.addEventListener('touchstart', () => this.pause(), { passive: true });
      this.ticker.addEventListener('touchend', () => {
        if (!this.state.isPaused) {
          this.play();
        }
      });
      
      // Animation end handling
      this.ticker.addEventListener('animationiteration', () => {
        // Emit event when ticker completes a cycle
        const event = new CustomEvent('tickerIteration');
        document.dispatchEvent(event);
      });
    } catch (error) {
      this.handleError(error, 'Error setting up event listeners');
    }
  }
  
  calculateAnimationDistance() {
    try {
      if (!this.ticker) return;
      
      console.log('Calculating ticker animation distance');
      
      // Reset any inline styles first
      this.ticker.style.animationDuration = '';
      if (this.progressBar) {
        this.progressBar.style.animationDuration = '';
      }
      
      // Get all ticker items
      const tickerItems = this.ticker.querySelectorAll('.ticker-item:not(.ticker-duplicate)');
      if (tickerItems.length === 0) {
        console.warn('No ticker items found');
        return;
      }
      
      console.log(`Found ${tickerItems.length} ticker items`);
      
      // Calculate total width of original items
      let totalWidth = 0;
      tickerItems.forEach(item => {
        const itemWidth = item.offsetWidth;
        totalWidth += itemWidth;
        console.log(`Item width: ${itemWidth}px`);
      });
      
      // Get container width
      const containerWidth = this.ticker.parentElement.offsetWidth;
      console.log(`Container width: ${containerWidth}px, Total content width: ${totalWidth}px`);
      
      // Set direct translation distance in pixels instead of percentage
      const pixelDistance = totalWidth + 100; // Add extra space
      
      // Update direct inline style for more reliable animation
      this.ticker.style.animation = `none`;
      
      // Force reflow
      void this.ticker.offsetWidth;
      
      // Update animation with direct pixel values
      const duration = Math.max(this.config.animationDuration, totalWidth * 20);
      console.log(`Setting animation duration: ${duration}ms, distance: -${pixelDistance}px`);
      
      // Apply the animation with direct values
      this.ticker.style.animation = `ticker-scroll ${duration}ms linear infinite`;
      
      // Set explicit translation distance using CSS custom property
      document.documentElement.style.setProperty('--ticker-distance', `-${pixelDistance}px`);
      
      // Also update direct keyframe animation
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${pixelDistance}px); }
        }
        
        #ticker {
          animation: ticker-scroll ${duration}ms linear infinite;
        }
        
        #ticker-progress-bar {
          animation: ticker-progress ${duration}ms linear infinite;
        }
      `;
      document.head.appendChild(styleSheet);
      
      // Update progress bar animation
      if (this.progressBar) {
        this.progressBar.style.animation = `none`;
        void this.progressBar.offsetWidth;
        this.progressBar.style.animation = `ticker-progress ${duration}ms linear infinite`;
      }
      
    } catch (error) {
      console.error('Error calculating ticker animation distance:', error);
      this.handleError(error, 'Error calculating ticker animation distance');
    }
  }
  
  togglePause() {
    try {
      if (this.state.isPaused) {
        this.play();
      } else {
        this.pause();
      }
    } catch (error) {
      this.handleError(error, 'Error toggling ticker pause state');
    }
  }
  
  pause() {
    try {
      if (!this.ticker) return;
      
      this.state.isPaused = true;
      this.ticker.classList.add('paused');
      
      // Update progress bar
      if (this.progressBar) {
        this.progressBar.parentElement.classList.add('paused');
      }
      
      // Update pause button
      if (this.pauseBtn) {
        this.pauseBtn.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i>';
        this.pauseBtn.setAttribute('aria-label', 'Play announcements');
        this.pauseBtn.setAttribute('title', 'Play');
      }
    } catch (error) {
      this.handleError(error, 'Error pausing ticker');
    }
  }
  
  play() {
    try {
      if (!this.ticker) return;
      
      this.state.isPaused = false;
      this.ticker.classList.remove('paused');
      
      // Update progress bar
      if (this.progressBar) {
        this.progressBar.parentElement.classList.remove('paused');
      }
      
      // Update pause button
      if (this.pauseBtn) {
        this.pauseBtn.innerHTML = '<i class="fas fa-pause" aria-hidden="true"></i>';
        this.pauseBtn.setAttribute('aria-label', 'Pause announcements');
        this.pauseBtn.setAttribute('title', 'Pause');
      }
    } catch (error) {
      this.handleError(error, 'Error playing ticker');
    }
  }
  
  handleError(error, context = 'Ticker error') {
    console.error(`${context}: ${error.message}`);
    
    // Attempt to retry initialization if needed
    if (!this.state.isInitialized && this.state.retryCount < this.config.maxRetries) {
      this.state.retryCount++;
      console.log(`Retrying ticker initialization (${this.state.retryCount}/${this.config.maxRetries})`);
      
      setTimeout(() => {
        this.init();
      }, this.config.errorRetryDelay);
    }
    
    // Display fallback content if we've hit the retry limit
    if (this.state.retryCount >= this.config.maxRetries && !this.state.isInitialized) {
      this.displayFallback();
    }
  }
  
  displayFallback() {
    try {
      // Find the ticker container
      const container = document.querySelector('.ticker-container');
      if (!container) return;
      
      // Create fallback content that doesn't require animation
      const fallbackHtml = `
        <div class="ticker-fallback">
          <div class="container">
            <div class="ticker-fallback-item">
              <i class="fas fa-info-circle" aria-hidden="true"></i>
              <span>Explore our collection of 50+ free online tools</span>
            </div>
          </div>
        </div>
      `;
      
      // Replace ticker with fallback
      container.innerHTML = fallbackHtml;
    } catch (error) {
      console.error('Error displaying ticker fallback:', error);
    }
  }
  
  // Utility function to debounce resize events
  debounce(func, delay) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }
}

// Initialize the ticker when DOM is ready
window.addEventListener('load', function() {
  // Small delay to ensure everything is rendered
  setTimeout(function() {
    try {
      console.log('Initializing ticker after window load');
      // Initialize the news ticker
      const newsTicker = new NewsTicker({
        tickerId: 'ticker',
        tickerProgressBarId: 'ticker-progress-bar',
        tickerPauseBtn: '.ticker-pause',
        animationDuration: 30000
      });
      
      // Store instance globally for debugging if needed
      window.newsTicker = newsTicker;
      
      // Force recalculation of ticker positioning
      if (window.newsTicker && typeof window.newsTicker.calculateAnimationDistance === 'function') {
        window.newsTicker.calculateAnimationDistance();
      }
    } catch (error) {
      console.error('Failed to initialize ticker:', error);
      // Show fallback ticker
      const tickerContainer = document.querySelector('.ticker-container');
      if (tickerContainer) {
        tickerContainer.innerHTML = `
          <div class="ticker-fallback">
            <div class="container">
              <div class="ticker-fallback-item">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
                <span>Explore our collection of 50+ free online tools</span>
              </div>
            </div>
          </div>
        `;
      }
    }
  }, 500); // 500ms delay
});

// Troubleshooting code for ticker
document.addEventListener('DOMContentLoaded', function() {
  try {
    console.log('DOM loaded - checking ticker elements');
    const tickerContainer = document.querySelector('.ticker-container');
    const ticker = document.getElementById('ticker');
    
    if (tickerContainer) {
      console.log('Ticker container found:', tickerContainer);
      console.log('Ticker container visibility:', getComputedStyle(tickerContainer).display);
      console.log('Ticker container bounds:', tickerContainer.getBoundingClientRect());
    } else {
      console.error('Ticker container not found in DOM');
    }
    
    if (ticker) {
      console.log('Ticker content element found:', ticker);
      console.log('Animation applied:', getComputedStyle(ticker).animation);
    } else {
      console.error('Ticker content element not found in DOM');
    }
    
    // Check CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    console.log('--ticker-transform value:', rootStyles.getPropertyValue('--ticker-transform'));
    
  } catch (error) {
    console.error('Error in ticker troubleshooting:', error);
  }
});
