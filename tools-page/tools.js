// Sticky Category Navigation with enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const categoryBtns = document.querySelectorAll('.category-btn');
    const toolCards = document.querySelectorAll('.tool-card');
    const categoriesNav = document.getElementById('categories-nav');
    const searchInput = document.getElementById('tool-search');
    const categoriesWrapper = document.querySelector('.categories-wrapper ul');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    
    // Initial scroll position check
    checkScrollButtons();
    
    // Event Listeners
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', filterTools);
    });
    
    if (searchInput) {
        searchInput.addEventListener('keyup', searchTools);
        searchInput.addEventListener('search', searchTools); // For the 'x' clear button
    }
    
    if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            categoriesWrapper.scrollBy({ left: -200, behavior: 'smooth' });
        });
        
        scrollRightBtn.addEventListener('click', () => {
            categoriesWrapper.scrollBy({ left: 200, behavior: 'smooth' });
        });
        
        // Check scroll position on horizontal scroll
        if (categoriesWrapper) {
            categoriesWrapper.addEventListener('scroll', checkScrollButtons);
            // Check on window resize too
            window.addEventListener('resize', checkScrollButtons);
        }
    }
    
    // Initialize counters for each category
    updateCategoryCounts();
    
    // Enhanced Sticky Navigation
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and reduce padding when scrolling down
        if (st > 100) {
            categoriesNav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            categoriesNav.style.padding = '0.5rem 0';
        } else {
            categoriesNav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            categoriesNav.style.padding = '0.75rem 0';
        }
        
        // Hide navigation when scrolling down rapidly
        if (st > lastScrollTop && st > 300 && (st - lastScrollTop) > 50) {
            categoriesNav.style.transform = 'translateY(-100%)';
        } else {
            categoriesNav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = st <= 0 ? 0 : st;
    });
    
    // Functions
    function filterTools(e) {
        e.preventDefault();
        
        // Update active button
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        categoryBtns.forEach(btn => btn.setAttribute('aria-current', 'false'));
        this.classList.add('active');
        this.setAttribute('aria-current', 'true');
        
        const category = this.getAttribute('data-category');
        
        // Filter tools
        toolCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'flex';
            } else if (card.classList.contains(category)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Smooth scroll to section
        const section = document.getElementById(category);
        if (section) {
            // Get the sticky navigation height to offset scroll
            const navHeight = categoriesNav.offsetHeight;
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    }
    
    function searchTools() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // If search is empty, reapply current category filter
        if (searchTerm === '') {
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                const category = activeCategory.getAttribute('data-category');
                filterByCategory(category);
            }
            return;
        }
        
        // Clear active category when searching
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        categoryBtns.forEach(btn => btn.setAttribute('aria-current', 'false'));
        
        // Filter tools by search term
        let matchFound = false;
        toolCards.forEach(card => {
            const toolName = card.querySelector('h3').textContent.toLowerCase();
            const toolDesc = card.querySelector('p').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                card.style.display = 'flex';
                matchFound = true;
                
                // Highlight the matching text (optional)
                highlightMatches(card, searchTerm);
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show no results message
        const noResultsMsg = document.getElementById('no-results-message');
        if (noResultsMsg) {
            noResultsMsg.style.display = matchFound ? 'none' : 'block';
        }
    }
    
    function filterByCategory(category) {
        toolCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'flex';
            } else if (card.classList.contains(category)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function highlightMatches(card, term) {
        // Remove any existing highlights first
        card.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
        
        // Highlight new matches
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        
        [title, desc].forEach(element => {
            if (!element) return;
            
            const html = element.innerHTML;
            const regex = new RegExp(`(${term})`, 'gi');
            element.innerHTML = html.replace(regex, '<span class="highlight">$1</span>');
        });
    }
    
    function checkScrollButtons() {
        if (!categoriesWrapper || !scrollLeftBtn || !scrollRightBtn) return;
        
        // Show left button only if scrolled
        if (categoriesWrapper.scrollLeft > 0) {
            scrollLeftBtn.style.opacity = '1';
            scrollLeftBtn.style.visibility = 'visible';
        } else {
            scrollLeftBtn.style.opacity = '0';
            scrollLeftBtn.style.visibility = 'hidden';
        }
        
        // Show right button only if there's more to scroll
        const isScrollable = categoriesWrapper.scrollWidth > categoriesWrapper.clientWidth;
        const hasScrolledToEnd = categoriesWrapper.scrollLeft + categoriesWrapper.clientWidth >= categoriesWrapper.scrollWidth - 10;
        
        if (isScrollable && !hasScrolledToEnd) {
            scrollRightBtn.style.opacity = '1';
            scrollRightBtn.style.visibility = 'visible';
        } else {
            scrollRightBtn.style.opacity = '0';
            scrollRightBtn.style.visibility = 'hidden';
        }
    }
    
    function updateCategoryCounts() {
        // Get counts for each category
        const counts = {};
        const allToolsCount = document.querySelectorAll('.tool-card').length;
        
        // Set the count for "all" category
        categoryBtns.forEach(btn => {
            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                const countEl = btn.querySelector('.tool-count');
                if (countEl) {
                    countEl.textContent = allToolsCount;
                }
                counts[category] = allToolsCount;
            }
        });
        
        // Count tools for each specific category
        toolCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory) {
                if (!counts[cardCategory]) {
                    counts[cardCategory] = 0;
                }
                counts[cardCategory]++;
            }
        });
        
        // Update the count display for specific categories
        categoryBtns.forEach(btn => {
            const category = btn.getAttribute('data-category');
            if (category !== 'all') {
                const countEl = btn.querySelector('.tool-count');
                if (countEl) {
                    countEl.textContent = counts[category] || 0;
                }
            }
        });
    }
});