/**
 * Everytool - Tools Page JavaScript
 * Handles filtering, animations, and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.querySelector('header');
    const categoriesNav = document.getElementById('categories-nav');
    const categoryLinks = document.querySelectorAll('.category-btn');
    const toolCards = document.querySelectorAll('.tool-card');
    const toolSearch = document.getElementById('tool-search');
    const searchClearButton = document.getElementById('search-clear');
    const clearSearchButton = document.getElementById('clear-search');
    const searchResultsCounter = document.querySelector('.search-results-counter');
    const noResultsMessage = document.getElementById('no-results-message');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const categoriesList = document.querySelector('.categories-list');
    const backToTopButton = document.getElementById('back-to-top');
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-btn');
    const mobileCategoryLinks = document.querySelectorAll('.mobile-category-btn');

    // Update tool counts based on actual number of tools
    updateToolCounts();

    // Event Listeners

    // Scroll category navigation horizontally
    scrollLeftButton.addEventListener('click', () => {
        categoriesList.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', () => {
        categoriesList.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });

    // Category selection - updated to handle anchor links without hiding sections
    categoryLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Update active state
            categoryLinks.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-current', 'false');
            });
            
            this.classList.add('active');
            this.setAttribute('aria-current', 'true');
            
            // The anchor navigation will happen automatically
            // No need to hide/show sections as we want all sections visible
        });
    });
    
    // Mobile category links
    mobileCategoryLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu when a category is selected
            mobileMenu.classList.remove('active');
        });
    });

    // Search functionality
    toolSearch.addEventListener('input', handleSearch);
    searchClearButton.addEventListener('click', clearSearch);
    clearSearchButton.addEventListener('click', clearSearch);

    function handleSearch() {
        const searchTerm = toolSearch.value.toLowerCase().trim();
        let matchCount = 0;

        if (searchTerm === '') {
            // Clear search, show all tools
            clearSearch();
            return;
        }

        toolCards.forEach(card => {
            const toolName = card.querySelector('h3').textContent.toLowerCase();
            const toolDescription = card.querySelector('p').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
                card.style.display = 'flex';
                matchCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update search results counter
        searchResultsCounter.textContent = `${matchCount} tools found`;
        
        // Show or hide no results message
        if (matchCount === 0) {
            noResultsMessage.classList.add('active');
        } else {
            noResultsMessage.classList.remove('active');
        }

        // Show clear button when search input has content
        searchClearButton.style.display = searchTerm ? 'block' : 'none';
    }

    function clearSearch() {
        toolSearch.value = '';
        searchClearButton.style.display = 'none';
        searchResultsCounter.textContent = '';
        noResultsMessage.classList.remove('active');
        
        // Show all tool cards
        toolCards.forEach(card => {
            card.style.display = 'flex';
        });
    }

    // Mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Back to top button
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

    // Header scroll effect
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > categoriesNav.offsetHeight) {
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

    // Fix broken tool card structure on page load
    document.querySelectorAll('.card-content').forEach(card => {
        const hoverDivs = card.querySelectorAll('.hover-content');
        if (hoverDivs.length > 1) {
            // Keep only the first hover-content div
            for (let i = 1; i < hoverDivs.length; i++) {
                hoverDivs[i].remove();
            }
        }
    });

    // Function to update tool counts based on actual number of tools
    function updateToolCounts() {
        // Get counts for each category
        const categories = {
            'all': 0,
            'calculators': 0,
            'converters': 0,
            'generators': 0,
            'seo-tools': 0
        };
        
        // Count tools in each category
        toolCards.forEach(card => {
            const category = card.getAttribute('data-category');
            categories[category]++;
            categories.all++; // Increment total count
        });
        
        // Update the displayed count for each category
        categoryLinks.forEach(link => {
            const category = link.getAttribute('data-category');
            const countElement = link.querySelector('.tool-count');
            if (countElement && categories[category] !== undefined) {
                countElement.textContent = categories[category];
            }
        });
    }
});