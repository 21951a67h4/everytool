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

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Initialize search components
    initSearchFilters();
    initEnhancedSearchAutocomplete();
    initVoiceSearch();
    showRecentSearches();
    
    // Handle search functionality
    const searchInput = document.getElementById('tool-search');
    const searchButton = document.querySelector('.search-button');
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length > 0) {
            // Track this search in recent searches
            trackSearch(query);
            
            // Find the first matching tool and redirect to it
            const matchingTool = findBestMatchingTool(query);
            if (matchingTool) {
                window.location.href = matchingTool.url;
            }
        }
    }
    
    // Event listeners for search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Initialize category filters
function initSearchFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Clear the search input to show fresh results for the selected category
            const searchInput = document.getElementById('tool-search');
            if (searchInput && searchInput.value.trim().length > 0) {
                // Trigger the input event to refresh suggestions based on the new category
                const inputEvent = new Event('input', { bubbles: true });
                searchInput.dispatchEvent(inputEvent);
            }
        });
    });
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
  
  if (!voiceButton || !searchInput) return;
  
  voiceButton.addEventListener('click', function() {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      
      // Start listening
      recognition.start();
      
      // Update button state
      voiceButton.innerHTML = '<i class="fas fa-microphone-slash"></i>';
      voiceButton.classList.add('listening');
      
      // Process result
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        
        // Trigger search after brief delay
        setTimeout(() => {
          const searchButton = document.querySelector('.search-button');
          if (searchButton) searchButton.click();
        }, 500);
      };
      
      // Reset button when done
      recognition.onend = function() {
        voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceButton.classList.remove('listening');
      };
      
      // Handle errors
      recognition.onerror = function() {
        voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceButton.classList.remove('listening');
        alert('Voice recognition failed. Please try again or type your search.');
      };
    } else {
      alert('Voice search is not supported in your browser. Please use Chrome for this feature.');
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

// Mobile Menu functionality
document.addEventListener('DOMContentLoaded', function() {
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
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-btn');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Header scroll effects
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        if (scrollTop > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // Search Box Animation
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('#tool-search');

    searchInput.addEventListener('focus', () => {
        searchBox.style.transform = 'scale(1.02)';
    });

    searchInput.addEventListener('blur', () => {
        searchBox.style.transform = 'scale(1)';
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.feature, .accordion-item, .category').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });

    // Add fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });

    // Tool Categories Hover Effect
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-2px)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'translateY(0)';
        });
    });

    // News Ticker Pause on Hover
    const tickerContent = document.querySelector('.ticker-content');
    tickerContent.addEventListener('mouseenter', () => {
        tickerContent.style.animationPlayState = 'paused';
    });

    tickerContent.addEventListener('mouseleave', () => {
        tickerContent.style.animationPlayState = 'running';
    });

    // Add loading animation to images
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button, .category').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    });
});