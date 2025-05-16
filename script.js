/**
 * EveryTool - Free online tools collection
 * Main JavaScript file for the website functionality
 * 
 * This file handles all interactive features including:
 * - Search functionality with advanced features
 * - UI animations and enhancements
 * - Tool filtering and discovery
 */

/**
 * Debounce function to limit how often a function is called
 * @param {Function} func - The function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Sample tools data (this would be replaced by your actual tools database)
// Keep toolsData as a global variable since it's referenced throughout the app
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

/**
 * Document ready handler - All DOM operations must happen inside this event
 * This ensures all DOM elements are available before any scripts attempt to access them
 */
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Track window width to optimize resize handling
    let lastWidth = window.innerWidth;
    
    // DOM Element References - all elements accessed by multiple functions
    // Search-related elements
    const searchInput = document.getElementById('tool-search');
    const searchBox = document.querySelector('.search-box');
    const searchButton = document.querySelector('.search-submit-btn') || document.querySelector('.search-button');
    const searchSuggestionsContainer = document.querySelector('.search-suggestions');
    const voiceButton = document.getElementById('voice-search');
    const searchTags = document.querySelectorAll('.search-tag-btn');
    const searchStatus = document.getElementById('search-status');
    const searchError = document.getElementById('search-error');
    
    // Header elements
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');
    const logoDot = document.querySelector('.logo-dot');
    
    // Content elements
    const accordionItems = document.querySelectorAll('.accordion-item');
    const particlesContainer = document.getElementById('particles-background');
    
    // Initialize particle background if container exists
    if (particlesContainer) {
      try {
        initParticlesBackground(particlesContainer, lastWidth);
      
        // Add resize handler to maintain proper particle density
        window.addEventListener('resize', function() {
          // Only recreate if the width change is significant
          if (Math.abs(window.innerWidth - lastWidth) > 200) {
            lastWidth = window.innerWidth;
            initParticlesBackground(particlesContainer, lastWidth);
          }
        });
      } catch (error) {
        console.error('Failed to initialize particles background:', error);
      }
    }
    
    // Initialize header animations if elements exist
    if (header || navLinks.length || logo) {
      try {
        initHeaderAnimations(header, navLinks, logo, logoDot);
      } catch (error) {
        console.error('Failed to initialize header animations:', error);
      }
    }
    
    // Initialize search functionality if search elements exist
    if (searchInput && searchBox) {
      try {
        // Initialize search UI components
        initSearchUI(searchInput, searchBox, searchButton, voiceButton, searchTags, searchStatus, searchError, searchSuggestionsContainer);
        
        // Initialize advanced placeholder cycling
        initAdvancedPlaceholderCycling(searchInput);
        
        // Initialize dynamic search suggestions (moved inside DOMContentLoaded)
        initDynamicSuggestions(searchInput, searchBox, searchSuggestionsContainer, searchError);
        
        // Initialize voice search if available
        if (voiceButton && (window.webkitSpeechRecognition || window.SpeechRecognition)) {
          initVoiceSearch(voiceButton, searchInput);
          
          // Setup keyboard shortcut for voice search (moved inside DOMContentLoaded)
          // Alt+V shortcut for voice search
          document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 'v') {
              e.preventDefault();
              const voiceSearchAPI = initVoiceSearch(voiceButton, searchInput);
              if (voiceSearchAPI) {
                if (voiceSearchAPI.isListening()) {
                  voiceSearchAPI.stop();
                } else {
                  voiceSearchAPI.start();
                }
              }
            }
            
            // Escape key to stop listening
            if (e.key === 'Escape') {
              const voiceSearchAPI = initVoiceSearch(voiceButton, searchInput);
              if (voiceSearchAPI && voiceSearchAPI.isListening()) {
                e.preventDefault();
                voiceSearchAPI.stop();
              }
            }
          });
        }
      } catch (error) {
        console.error('Failed to initialize search functionality:', error);
      }
    }
    
    // Initialize accordion if elements exist
    if (accordionItems && accordionItems.length) {
      try {
        initAccordion(accordionItems);
      } catch (error) {
        console.error('Failed to initialize accordion:', error);
      }
    }
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});

/**
 * Hero section particles background effect
 * @param {HTMLElement} container - The container element for particles
 * @param {number} windowWidth - Current window width for responsive adjustments
 */
function initParticlesBackground(container, windowWidth) {
  try {
    if (!container) {
      throw new Error('Particles container not found');
    }
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Adjust particle count based on screen size for performance
    let particleCount;
    if (windowWidth < 768) {
      particleCount = 10; // Fewer particles on mobile
    } else if (windowWidth < 1200) {
      particleCount = 15; // Medium amount on tablets
    } else {
      particleCount = 25; // Full amount on desktops
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle(container);
      container.appendChild(particle);
    }
  } catch (error) {
    console.error('Error initializing particles background:', error);
  }
}

/**
 * Creates a single particle element with random properties
 * @param {HTMLElement} container - The container element for particles
 * @returns {HTMLElement} The created particle element
 */
function createParticle(container) {
  try {
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
    
    // Apply styles
    Object.assign(particle.style, {
      width: size + 'px',
      height: size + 'px',
      left: posX + '%',
      top: posY + '%',
      opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8 opacity
      animationDelay: delay + 's',
      animationDuration: duration + 's'
    });
    
    // Set custom properties for unique animations
    particle.style.setProperty('--x1', x1);
    particle.style.setProperty('--y1', y1);
    particle.style.setProperty('--x2', x2);
    particle.style.setProperty('--y2', y2);
    particle.style.setProperty('--x3', x3);
    particle.style.setProperty('--y3', y3);
    particle.style.setProperty('--r1', r1);
    particle.style.setProperty('--r2', r2);
    particle.style.setProperty('--r3', r3);
    
    return particle;
  } catch (error) {
    console.error('Error creating particle:', error);
    // Return an empty div as fallback
    return document.createElement('div');
  }
}

/**
 * Initialize header animations and interactions
 * @param {HTMLElement} header - The header element
 * @param {NodeList} navLinks - Navigation links
 * @param {HTMLElement} logo - Logo element
 * @param {HTMLElement} logoDot - Logo dot element (accent)
 */
function initHeaderAnimations(header, navLinks, logo, logoDot) {
  try {
    // Only proceed if necessary elements exist
    if (!header) {
      throw new Error('Header element not found');
    }
    
    // Handle scroll effects for header
    let lastScrollY = window.scrollY;
    const scrollThreshold = 50;
    
    // Throttled scroll handler for better performance
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      
      // Add/remove 'scrolled' class based on scroll position
      if (currentScrollY > scrollThreshold) {
        header.classList.add('scrolled');
        if (logo) logo.classList.add('scrolled');
        if (logoDot) logoDot.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        if (logo) logo.classList.remove('scrolled');
        if (logoDot) logoDot.classList.remove('scrolled');
      }
      
      // Add/remove 'header-hidden' class based on scroll direction
      if (currentScrollY > lastScrollY + 50 && currentScrollY > 300) {
        header.classList.add('header-hidden');
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY < 300) {
        header.classList.remove('header-hidden');
      }
      
      lastScrollY = currentScrollY;
    }, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Setup nav link animations if they exist
    if (navLinks && navLinks.length) {
      navLinks.forEach((link, index) => {
        // Stagger animation delays for smoother appearance
        link.style.animationDelay = `${0.1 + index * 0.05}s`;
      });
    }
  } catch (error) {
    console.error('Error initializing header animations:', error);
  }
}

/**
 * Initialize search UI components and interactions
 * @param {HTMLElement} searchInput - Search input element
 * @param {HTMLElement} searchBox - Search box container
 * @param {HTMLElement} searchButton - Search button
 * @param {HTMLElement} voiceButton - Voice search button
 * @param {NodeList} searchTags - Search tag buttons
 * @param {HTMLElement} searchStatus - Search status message element
 * @param {HTMLElement} searchError - Search error message element
 * @param {HTMLElement} suggestionsContainer - Container for search suggestions
 */
function initSearchUI(searchInput, searchBox, searchButton, voiceButton, searchTags, searchStatus, searchError, suggestionsContainer) {
  try {
    // Verify required elements
    if (!searchInput || !searchBox) {
      throw new Error('Search elements not found');
    }
    
    // Create search effect particles manager
    const particleManager = new InputParticleManager(searchBox);
    
    // Handle focus effects
    searchInput.addEventListener('focus', function() {
      searchBox.classList.add('focused');
      particleManager.start();
      
      // Clear any existing errors
      if (searchError) clearSearchError(searchError);
    });
    
    searchInput.addEventListener('blur', function() {
      searchBox.classList.remove('focused');
      particleManager.stop();
      
      // Hide suggestions on blur after small delay (allows clicking suggestions)
      setTimeout(() => {
        if (suggestionsContainer) {
          suggestionsContainer.classList.remove('visible');
        }
      }, 200);
    });
    
    // Add typing particle effects
    searchInput.addEventListener('input', function() {
      if (this.value.length > 0) {
        // Create particles on keypress
        particleManager.createParticle();
        
        // Show clear button when input has content
        const clearButton = searchBox.querySelector('.search-clear');
        if (clearButton) clearButton.style.display = 'block';
      } else {
        // Hide clear button when input is empty
        const clearButton = searchBox.querySelector('.search-clear');
        if (clearButton) clearButton.style.display = 'none';
        
        // Hide suggestions when input is empty
        if (suggestionsContainer) {
          suggestionsContainer.classList.remove('visible');
        }
      }
    });
    
    // Create clear button if it doesn't exist
    if (!searchBox.querySelector('.search-clear')) {
      const clearButton = document.createElement('button');
      clearButton.className = 'search-clear';
      clearButton.innerHTML = '&times;';
      clearButton.setAttribute('aria-label', 'Clear search');
      clearButton.style.display = 'none';
      searchBox.appendChild(clearButton);
      
      // Handle clear button click
      clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        searchInput.focus();
        
        // Clear and hide suggestions
        if (suggestionsContainer) {
          suggestionsContainer.innerHTML = '';
          suggestionsContainer.classList.remove('visible');
        }
        
        // Clear status and error messages
        if (searchStatus) searchStatus.innerHTML = '';
        if (searchError) clearSearchError(searchError);
      });
    }
    
    // Handle search form submission
    if (searchButton) {
      searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch(searchInput.value);
      });
    }
    
    // Handle search tag clicks
    if (searchTags && searchTags.length) {
      searchTags.forEach(tag => {
        tag.addEventListener('click', function() {
          const tagText = this.textContent.trim();
          searchInput.value = tagText;
          searchInput.focus();
          
          // Trigger search
          performSearch(tagText);
        });
      });
    }
    
    // Search function (would connect to your actual search)
    function performSearch(query) {
      try {
        if (!query.trim()) return;
        
        // Show search status
        if (searchStatus) {
          searchStatus.innerHTML = `<i class="fas fa-search"></i> Searching for "${query}"...`;
          searchStatus.style.display = 'block';
        }
        
        // Simulate search for demo purposes
        // In production, this would connect to your actual search API
        setTimeout(() => {
          if (searchStatus) {
            searchStatus.innerHTML = `<i class="fas fa-check"></i> Found results for "${query}"`;
            
            // Hide status after a delay
            setTimeout(() => {
              searchStatus.style.opacity = '0';
              setTimeout(() => {
                searchStatus.style.display = 'none';
                searchStatus.style.opacity = '1';
              }, 500);
            }, 2000);
          }
          
          // Redirect to results page or update results on the same page
          // window.location.href = `/search-results/?q=${encodeURIComponent(query)}`;
        }, 1000);
      } catch (error) {
        console.error('Error performing search:', error);
        if (searchError) {
          showSearchError('An error occurred while searching. Please try again.', searchError);
        }
      }
    }
  } catch (error) {
    console.error('Error initializing search UI:', error);
  }
}

/**
 * Initialize advanced placeholder cycling effect
 * @param {HTMLElement} input - Input element to add cycling placeholders to
 * @returns {Function} Cleanup function to remove the effect
 */
function initAdvancedPlaceholderCycling(input) {
  try {
    if (!input) {
      throw new Error('Input element not found');
    }
    
    // Configuration options with reasonable defaults
    const config = {
      initialDelay: 2000,    // Wait before starting cycling
      interval: 3000,        // Time between transitions
      fadeTime: 300,         // Fade transition time
      inputSelector: null,   // Use element passed directly
    };
    
    // Placeholder text variations - can customize or load from data attribute
    const customPlaceholders = input.dataset.placeholders;
    const placeholders = customPlaceholders 
      ? JSON.parse(customPlaceholders) 
      : [
          'Search for tools...',
          'Try "password generator"',
          'Try "color converter"',
          'Try "mortgage calculator"',
          'Try "QR code generator"'
        ];
    
    let currentPlaceholder = 0;
    let intervalId = null;
    let isRunning = false;
    let isUserFocused = false;
    
    // Create visual placeholder element if not already present
    let visualPlaceholder = input.parentNode.querySelector('.visual-placeholder');
    if (!visualPlaceholder) {
      visualPlaceholder = document.createElement('span');
      visualPlaceholder.className = 'visual-placeholder';
      visualPlaceholder.setAttribute('aria-hidden', 'true');
      
      // Position properly
      Object.assign(visualPlaceholder.style, {
        position: 'absolute',
        pointerEvents: 'none',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: '0.8',
        transition: `opacity ${config.fadeTime}ms ease`
      });
      
      // Insert visual placeholder
      if (input.parentNode) {
        input.parentNode.insertBefore(visualPlaceholder, input.nextSibling);
      }
    }
    
    // Main function to cycle placeholders
    const cyclePlaceholders = () => {
      // Skip if input has content or is focused
      if (isUserFocused || input.value || document.activeElement === input) {
        return;
      }
      
      // Start fade out
      visualPlaceholder.style.opacity = '0';
      
      // Update text after fade-out
      setTimeout(() => {
        currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
        visualPlaceholder.textContent = placeholders[currentPlaceholder];
        
        // Regular placeholder also gets updated (for accessibility)
        input.setAttribute('placeholder', placeholders[currentPlaceholder]);
        
        // Fade back in
        visualPlaceholder.style.opacity = '0.8';
      }, config.fadeTime);
    };
    
    // Track focus state
    input.addEventListener('focus', () => {
      isUserFocused = true;
      visualPlaceholder.style.opacity = '0';
    });
    
    input.addEventListener('blur', () => {
      isUserFocused = false;
      if (!input.value) {
        visualPlaceholder.style.opacity = '0.8';
      }
    });
    
    // Hide visual placeholder when typing
    input.addEventListener('input', () => {
      visualPlaceholder.style.opacity = input.value ? '0' : '0.8';
    });
    
    // Start the cycling after initial delay
    const startCycling = () => {
      if (isRunning) return;
      
      isRunning = true;
      setTimeout(() => {
        // Initialize with first placeholder
        input.setAttribute('placeholder', placeholders[currentPlaceholder]);
        visualPlaceholder.textContent = placeholders[currentPlaceholder];
        
        // Start cycle
        intervalId = setInterval(cyclePlaceholders, config.interval);
      }, config.initialDelay);
    };
    
    startCycling();
    
    // Return cleanup function
    return function cleanup() {
      if (intervalId) {
        clearInterval(intervalId);
      }
      
      // Remove visual placeholder if it exists
      if (visualPlaceholder.parentNode) {
        visualPlaceholder.parentNode.removeChild(visualPlaceholder);
      }
      
      // Clean up event listeners
      isRunning = false;
    };
  } catch (error) {
    console.error('Error initializing placeholder cycling:', error);
    return () => {}; // Return empty cleanup function
  }
}

/**
 * Enhanced typing particle effect manager for better performance
 */
class InputParticleManager {
  constructor(container) {
    try {
      this.container = container;
      this.particlePool = [];
      this.maxPoolSize = 20; // Limit particles for performance
      this.active = false;
      this.createParticlePool();
    } catch (error) {
      console.error('Error initializing input particle manager:', error);
    }
  }
  
  createParticlePool() {
    try {
      // Create reusable particles
      for (let i = 0; i < this.maxPoolSize; i++) {
        const particle = document.createElement('span');
        particle.className = 'input-particle';
        particle.style.display = 'none';
        this.container.appendChild(particle);
        this.particlePool.push(particle);
      }
    } catch (error) {
      console.error('Error creating particle pool:', error);
    }
  }
  
  getParticle() {
    try {
      // Find an available particle from the pool
      for (let i = 0; i < this.particlePool.length; i++) {
        const particle = this.particlePool[i];
        if (particle.style.display === 'none') {
          return particle;
        }
      }
      
      // If no particles available, return the first one (recycle)
      return this.particlePool[0];
    } catch (error) {
      console.error('Error getting particle from pool:', error);
      return null;
    }
  }
  
  createParticle() {
    try {
      if (!this.active) return;
      
      const particle = this.getParticle();
      if (!particle) return;
      
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
    } catch (error) {
      console.error('Error creating particle:', error);
    }
  }
  
  start() {
    this.active = true;
  }
  
  stop() {
    this.active = false;
  }
  
  // Clean up method to remove all particles
  destroy() {
    try {
      this.particlePool.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      this.particlePool = [];
    } catch (error) {
      console.error('Error destroying particle manager:', error);
    }
  }
}

/**
 * Initialize dynamic search suggestions with animations
 * @param {HTMLElement} searchInput - Search input element
 * @param {HTMLElement} searchBox - Search box container
 * @param {HTMLElement} suggestionsContainer - Container for search suggestions
 * @param {HTMLElement} searchError - Search error message element
 */
function initDynamicSuggestions(searchInput, searchBox, suggestionsContainer, searchError) {
  try {
    if (!searchInput) {
      throw new Error('Search input element not found');
    }
    
    // Create suggestions container if it doesn't exist
    if (!suggestionsContainer) {
      suggestionsContainer = document.createElement('div');
      suggestionsContainer.className = 'search-suggestions';
      suggestionsContainer.setAttribute('aria-live', 'polite');
      suggestionsContainer.setAttribute('role', 'listbox');
      if (searchBox) searchBox.appendChild(suggestionsContainer);
    }
    
    // Create a debounced function to update suggestions
    const debouncedUpdateSuggestions = debounce(function(query, selectedCategory) {
      // Clear suggestions when query is too short
      if (query.length < 2) {
        hideSuggestions();
        return;
      }
      
      try {
        // Get matches filtered by category
        const matches = toolsData
          .filter(tool => {
            const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
            if (!categoryMatch) return false;
            
            // Check for matches in name, description, and tags
            const nameMatch = tool.name.toLowerCase().includes(query);
            const descMatch = tool.description.toLowerCase().includes(query);
            const tagMatch = Array.isArray(tool.tags) && 
                            tool.tags.some(tag => tag.toLowerCase().includes(query));
            
            return nameMatch || descMatch || tagMatch;
          })
          .slice(0, 5); // Limit to 5 suggestions for better UX
        
        // Update the suggestions display
        updateSuggestions(matches, query);
        
        // Display error message if no matches found
        if (matches.length === 0) {
          clearSearchError(searchError);
          showSearchError(`No tools match "${query}"`, searchError);
        } else if (searchError) {
          clearSearchError(searchError);
        }
      } catch (error) {
        console.error('Error updating suggestions:', error);
        clearSearchError(searchError);
        showSearchError('Error fetching suggestions', searchError);
      }
    }, 200); // 200ms debounce time for responsive but efficient suggestions
    
    // Handle showing suggestions when typing
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      const selectedCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
      
      // Use debounced function to update suggestions
      debouncedUpdateSuggestions(query, selectedCategory);
    });
    
    // Function to update suggestions
    function updateSuggestions(matches, query) {
      // Clear previous suggestions
      suggestionsContainer.innerHTML = '';
      
      if (matches.length > 0) {
        // Create DocumentFragment for batch insertion (more efficient)
        const fragment = document.createDocumentFragment();
        
        // Add heading for suggestions
        const heading = document.createElement('div');
        heading.className = 'suggestions-heading';
        heading.innerHTML = '<i class="fas fa-search"></i> Matching Tools';
        fragment.appendChild(heading);
        
        // Add all matching suggestions
        matches.forEach(tool => {
          const suggestion = document.createElement('a');
          suggestion.className = 'suggestion-item';
          suggestion.href = tool.url;
          suggestion.setAttribute('role', 'option');
          
          // Use icon if available or default to category icon
          const iconClass = tool.icon || getCategoryIcon(tool.category);
          
          // Highlight matching text in name
          const highlightedName = highlightMatches(tool.name, query);
          
          // Create the HTML for suggestion with icon
          suggestion.innerHTML = `
            <i class="fas ${iconClass}"></i>
            <div class="suggestion-details">
              <div class="suggestion-name">${highlightedName}</div>
              <div class="suggestion-category">${formatCategoryName(tool.category)}</div>
            </div>
          `;
          
          fragment.appendChild(suggestion);
        });
        
        // Append all suggestions at once (more efficient)
        suggestionsContainer.appendChild(fragment);
        
        // Show suggestions with animation
        suggestionsContainer.classList.add('visible');
      } else {
        // Hide suggestions if no matches
        suggestionsContainer.classList.remove('visible');
      }
    }
    
    // Helper function to hide suggestions
    function hideSuggestions() {
      suggestionsContainer.classList.remove('visible');
    }
    
    // Helper functions
    function highlightMatches(text, query) {
      if (!query) return text;
      
      const regex = new RegExp(`(${query})`, 'gi');
      return text.replace(regex, '<span class="highlight">$1</span>');
    }
    
    function formatCategoryName(category) {
      return category
        .replace('-', ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
    }
    
    function getCategoryIcon(category) {
      // Default icons based on category
      const categoryIcons = {
        calculator: 'fa-calculator',
        converter: 'fa-exchange-alt',
        generator: 'fa-magic',
        formatter: 'fa-indent',
        validator: 'fa-check-circle',
        analyzer: 'fa-chart-bar',
        seo: 'fa-search',
        default: 'fa-tools'
      };
      
      return categoryIcons[category] || categoryIcons.default;
    }
  } catch (error) {
    console.error('Error initializing dynamic suggestions:', error);
  }
}

/**
 * Initialize accordion component for better UX in mobile views
 * @param {NodeList} accordionItems - Accordion container elements
 */
function initAccordion(accordionItems) {
  try {
    if (!accordionItems || !accordionItems.length) {
      throw new Error('Accordion items not found');
    }
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      
      if (header && content) {
        header.addEventListener('click', () => {
          // Toggle the active state of the clicked item
          const isActive = item.classList.toggle('active');
          
          // Toggle the aria-expanded attribute for accessibility
          header.setAttribute('aria-expanded', isActive);
          
          // Apply height-based animation for smooth transition
          if (isActive) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = '0';
          }
        });
      }
    });
    
    // Expand first accordion item by default (if none are expanded)
    const hasExpanded = Array.from(accordionItems).some(item => 
      item.classList.contains('active')
    );
    
    if (!hasExpanded && accordionItems.length > 0) {
      const firstItem = accordionItems[0];
      const firstHeader = firstItem.querySelector('.accordion-header');
      const firstContent = firstItem.querySelector('.accordion-content');
      
      if (firstItem && firstHeader && firstContent) {
        firstItem.classList.add('active');
        firstHeader.setAttribute('aria-expanded', true);
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
      }
    }
  } catch (error) {
    console.error('Error initializing accordion:', error);
  }
}

/**
 * Initialize voice search functionality
 * @param {HTMLElement} voiceButton - Voice search button
 * @param {HTMLElement} searchInput - Search input element
 * @returns {Object|null} Control methods for voice search or null if not supported
 */
function initVoiceSearch(voiceButton, searchInput) {
  try {
    // Check for browser support for Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      throw new Error('Speech recognition not supported');
    }
    
    if (!voiceButton || !searchInput) {
      throw new Error('Voice button or search input not found');
    }
    
    // State and instance variables
    const state = {
      recognition: new SpeechRecognition(),
      isListening: false,
      hasResults: false
    };
    
    // Configure the recognition object
    state.recognition.continuous = false;
    state.recognition.interimResults = true;
    state.recognition.lang = 'en-US'; // Default to English - could be made configurable
    
    // Function to show pulse animation when listening
    function startListening() {
      if (state.isListening) return;
      
      state.recognition.start();
      state.isListening = true;
      
      // Update button appearance
      voiceButton.classList.add('listening');
      voiceButton.setAttribute('title', 'Stop voice input');
      voiceButton.setAttribute('aria-label', 'Stop voice input');
      
      // Clear any existing search input
      searchInput.value = '';
    }
    
    // Function to stop listening
    function stopListening() {
      if (!state.isListening) return;
      
      state.recognition.stop();
      state.isListening = false;
      
      // Update button appearance
      voiceButton.classList.remove('listening');
      voiceButton.setAttribute('title', 'Search with voice');
      voiceButton.setAttribute('aria-label', 'Search with voice');
    }
    
    // Handle recognized speech
    state.recognition.onresult = (event) => {
      state.hasResults = true;
      
      // Get the most confident result
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      
      // Update search input with recognized speech
      searchInput.value = transcript;
      
      // Trigger input event for suggestions to update
      searchInput.dispatchEvent(new Event('input'));
    };
    
    // Handle end of speech recognition
    state.recognition.onend = () => {
      stopListening();
      
      // If we have results when recognition ends, trigger a search
      if (state.hasResults && searchInput.value.trim().length > 0) {
        setTimeout(() => {
          // Find and click the search button
          const searchButton = document.querySelector('.search-submit-btn') || 
                              document.querySelector('.search-button');
          
          if (searchButton) {
            searchButton.click();
          }
        }, 500);
      }
      
      state.hasResults = false;
    };
    
    // Handle errors
    state.recognition.onerror = (event) => {
      stopListening();
      
      switch (event.error) {
        case 'no-speech':
          showSearchError('No voice input detected. Please try again.');
          break;
        case 'aborted':
          showSearchError('Voice search was aborted');
          break;
        case 'audio-capture':
          showSearchError('No microphone detected');
          break;
        case 'not-allowed':
          showSearchError('Microphone access denied');
          break;
        case 'network':
          showSearchError('Network error occurred. Please try again.');
          break;
        case 'service-not-allowed':
          showSearchError('Speech service not allowed');
          break;
        default:
          showSearchError('Voice recognition error. Please try typing instead.');
      }
    };
    
    // Set up voice button click handler if button exists
    if (voiceButton) {
      voiceButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (state.isListening) {
          stopListening();
        } else {
          startListening();
        }
      });
      
      // Make sure button is visible and properly styled
      voiceButton.style.display = 'flex';
      voiceButton.style.alignItems = 'center';
      voiceButton.style.justifyContent = 'center';
    }
    
    // Return methods for controlling voice search
    return {
      start: startListening,
      stop: stopListening,
      isListening: () => state.isListening
    };
  } catch (error) {
    console.error('Error initializing voice search:', error);
    return null;
  }
}

/**
 * Show a search status message with improved accessibility
 * @param {string} message - The status message to display
 * @param {HTMLElement} statusElement - The element to display the status in
 */
function showSearchStatus(message, statusElement) {
  try {
    if (!statusElement) return;
    
    statusElement.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    statusElement.style.display = 'block';
    statusElement.setAttribute('aria-live', 'polite');
    
    // Hide after a delay
    setTimeout(() => {
      statusElement.style.opacity = '0';
      setTimeout(() => {
        statusElement.style.display = 'none';
        statusElement.style.opacity = '1';
      }, 500);
    }, 3000);
  } catch (error) {
    console.error('Error showing search status:', error);
  }
}

/**
 * Show a search error message with accessibility support
 * @param {string} message - The error message to display
 * @param {HTMLElement} errorElement - The element to display the error in
 */
function showSearchError(message, errorElement) {
  try {
    if (!errorElement) return;
    
    errorElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorElement.style.display = 'block';
    errorElement.setAttribute('aria-live', 'assertive');
    
    // Add shake animation
    errorElement.classList.add('shake');
    
    // Remove shake animation after it completes
    setTimeout(() => {
      errorElement.classList.remove('shake');
    }, 820); // Animation duration + a little extra
    
    // Hide after a delay
    setTimeout(() => {
      clearSearchError(errorElement);
    }, 5000);
  } catch (error) {
    console.error('Error showing search error:', error);
  }
}

/**
 * Clear search error message
 * @param {HTMLElement} errorElement - The error element to clear
 */
function clearSearchError(errorElement) {
  try {
    if (!errorElement) return;
    
    // Fade out
    errorElement.style.opacity = '0';
    
    // Hide completely after transition
    setTimeout(() => {
      errorElement.style.display = 'none';
      errorElement.innerHTML = '';
      errorElement.style.opacity = '1';
    }, 300);
  } catch (error) {
    console.error('Error clearing search error:', error);
  }
}
