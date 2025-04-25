// Contact Page JavaScript for Everytool.tech

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                toolName: document.getElementById('tool-name').value,
                message: document.getElementById('message').value,
                privacyPolicy: document.getElementById('privacy-policy').checked
            };
            
            // Here you would typically send the data to a server
            // For demonstration, we'll show a success message
            
            // Simulate sending data (would be replaced with actual API call)
            setTimeout(function() {
                // Show success message
                const formSection = document.querySelector('.contact-form-section');
                const originalContent = formSection.innerHTML;
                
                formSection.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle fa-3x" style="color: #2ecc71; margin-bottom: 1rem;"></i>
                        <h2>Thank You!</h2>
                        <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                        <button class="primary-button" id="reset-form" style="margin-top: 1.5rem;">Send Another Message</button>
                    </div>
                `;
                
                // Handle reset button
                document.getElementById('reset-form').addEventListener('click', function() {
                    formSection.innerHTML = originalContent;
                    // Re-initialize the form handler
                    document.getElementById('contact-form').addEventListener('submit', arguments.callee);
                });
                
            }, 1000);
        });
    }
    
    // FAQ Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
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
    
    // Subject dropdown conditional fields
    const subjectDropdown = document.getElementById('subject');
    const toolNameField = document.getElementById('tool-name').parentNode;
    
    if (subjectDropdown && toolNameField) {
        // Initially hide the tool name field
        toolNameField.style.display = 'none';
        
        subjectDropdown.addEventListener('change', () => {
            // Show tool name field only for certain subjects
            const selectedValue = subjectDropdown.value;
            if (selectedValue === 'tool-request' || selectedValue === 'bug-report') {
                toolNameField.style.display = 'block';
            } else {
                toolNameField.style.display = 'none';
            }
        });
    }
    
    // Form validation enhancement
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateEmail(this);
        });
    }
    
    function validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input.value);
        
        if (!isValid && input.value) {
            input.classList.add('invalid');
            
            // Check if error message already exists
            let errorElement = input.parentNode.querySelector('.error-message');
            if (!errorElement) {
                errorElement = document.createElement('span');
                errorElement.className = 'error-message';
                errorElement.style.color = '#e74c3c';
                errorElement.style.fontSize = '0.8rem';
                errorElement.style.marginTop = '0.3rem';
                errorElement.style.display = 'block';
                input.parentNode.appendChild(errorElement);
            }
            
            errorElement.textContent = 'Please enter a valid email address';
        } else {
            input.classList.remove('invalid');
            const errorElement = input.parentNode.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
        }
    }
});