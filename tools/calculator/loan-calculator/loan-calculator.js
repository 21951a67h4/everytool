// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the calculator
    setupCalculator();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Set default start date to today
    document.getElementById('start-date').valueAsDate = new Date();
});

/**
 * Sets up the main calculator functionality
 */
function setupCalculator() {
    const calculateBtn = document.getElementById('calculate-btn');
    const errorMessage = document.getElementById('error-message');
    const resultSection = document.getElementById('result-section');
    
    // Add event listener to calculate button
    calculateBtn.addEventListener('click', function() {
        try {
            // Hide any previous error messages
            errorMessage.classList.add('hidden');
            
            // Get input values
            const loanAmount = parseFloat(document.getElementById('loan-amount').value);
            const interestRate = parseFloat(document.getElementById('interest-rate').value);
            const loanTerm = parseInt(document.getElementById('loan-term').value);
            const termType = document.getElementById('term-type').value;
            const paymentFrequency = document.getElementById('payment-frequency').value;
            const startDate = document.getElementById('start-date').value ? new Date(document.getElementById('start-date').value) : new Date();
            
            // Validate inputs
            if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
                throw new Error('Please enter valid positive numbers for all fields.');
            }
            
            // Calculate loan details
            const loanDetails = calculateLoan(loanAmount, interestRate, loanTerm, termType, paymentFrequency, startDate);
            
            // Display results
            displayResults(loanDetails);
            
            // Show result section
            resultSection.classList.remove('hidden');
            
            // Create payment chart
            createPaymentChart(loanDetails.totalInterest, loanDetails.loanAmount);
            
            // Generate amortization schedule
            generateAmortizationTable(loanDetails);
            
        } catch (error) {
            // Show error message
            errorMessage.textContent = error.message;
            errorMessage.classList.remove('hidden');
            resultSection.classList.add('hidden');
        }
    });
}

/**
 * Calculate loan details based on input values
 */
function calculateLoan(loanAmount, annualInterestRate, term, termType, paymentFrequency, startDate) {
    // Convert term to months if it's in years
    const totalMonths = termType === 'years' ? term * 12 : term;
    
    // Convert annual interest rate to monthly
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    
    // Calculate payments per year based on frequency
    let paymentsPerYear, paymentInterval;
    switch (paymentFrequency) {
        case 'biweekly':
            paymentsPerYear = 26;
            paymentInterval = 14; // days
            break;
        case 'weekly':
            paymentsPerYear = 52;
            paymentInterval = 7; // days
            break;
        default: // monthly
            paymentsPerYear = 12;
            paymentInterval = 30; // days
            break;
    }
    
    // Calculate interest rate per payment period
    const periodicInterestRate = (annualInterestRate / 100) / paymentsPerYear;
    
    // Calculate total number of payments
    const totalPayments = (totalMonths / 12) * paymentsPerYear;
    
    // Calculate payment amount using the formula:
    // Payment = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    // Where P = principal, r = periodic interest rate, n = total number of payments
    let paymentAmount;
    if (periodicInterestRate === 0) {
        paymentAmount = loanAmount / totalPayments;
    } else {
        const x = Math.pow(1 + periodicInterestRate, totalPayments);
        paymentAmount = loanAmount * (periodicInterestRate * x) / (x - 1);
    }
    
    // Calculate total payment and interest
    const totalPayment = paymentAmount * totalPayments;
    const totalInterest = totalPayment - loanAmount;
    
    return {
        loanAmount,
        periodicInterestRate,
        totalPayments,
        paymentAmount,
        totalPayment,
        totalInterest,
        paymentFrequency,
        paymentInterval,
        startDate
    };
}

/**
 * Display the calculated results in the UI
 */
function displayResults(loanDetails) {
    // Format currency values
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    // Update the result values
    document.getElementById('monthly-payment').textContent = formatter.format(loanDetails.paymentAmount);
    document.getElementById('total-payment').textContent = formatter.format(loanDetails.totalPayment);
    document.getElementById('total-interest').textContent = formatter.format(loanDetails.totalInterest);
    
    // Update payment frequency label
    const paymentLabel = document.querySelector('.result-box:first-child .result-label');
    switch (loanDetails.paymentFrequency) {
        case 'biweekly':
            paymentLabel.textContent = 'Bi-Weekly Payment';
            break;
        case 'weekly':
            paymentLabel.textContent = 'Weekly Payment';
            break;
        default:
            paymentLabel.textContent = 'Monthly Payment';
            break;
    }
}

/**
 * Create a pie chart showing the breakdown of principal vs interest
 */
function createPaymentChart(totalInterest, principal) {
    const ctx = document.getElementById('payment-chart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.paymentChart instanceof Chart) {
        window.paymentChart.destroy();
    }
    
    // Create new chart
    window.paymentChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, totalInterest],
                backgroundColor: ['#3498db', '#e74c3c'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const formatter = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            });
                            return context.label + ': ' + formatter.format(context.raw);
                        }
                    }
                }
            }
        }
    });
}

/**
 * Generate the amortization schedule table
 */
function generateAmortizationTable(loanDetails) {
    const tableBody = document.getElementById('amortization-body');
    tableBody.innerHTML = '';
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    let remainingBalance = loanDetails.loanAmount;
    let currentDate = new Date(loanDetails.startDate);
    
    // Create rows for each payment
    for (let i = 1; i <= loanDetails.totalPayments; i++) {
        // Calculate interest for this period
        const interestPayment = remainingBalance * loanDetails.periodicInterestRate;
        
        // Calculate principal for this period
        const principalPayment = loanDetails.paymentAmount - interestPayment;
        
        // Update remaining balance
        remainingBalance -= principalPayment;
        if (remainingBalance < 0.01) remainingBalance = 0; // Fix for floating point errors
        
        // Create table row
        const row = document.createElement('tr');
        
        // Format date
        currentDate.setDate(currentDate.getDate() + (i === 1 ? 0 : loanDetails.paymentInterval));
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        // Add cell data
        row.innerHTML = `
            <td>${i}</td>
            <td>${formattedDate}</td>
            <td>${formatter.format(loanDetails.paymentAmount)}</td>
            <td>${formatter.format(principalPayment)}</td>
            <td>${formatter.format(interestPayment)}</td>
            <td>${formatter.format(remainingBalance)}</td>
        `;
        
        tableBody.appendChild(row);
        
        // Limit to first 60 payments for performance
        if (i >= 60) {
            const noteRow = document.createElement('tr');
            noteRow.innerHTML = `
                <td colspan="6" style="text-align: center; font-style: italic;">
                    Showing first 60 payments. Full schedule available for download.
                </td>
            `;
            tableBody.appendChild(noteRow);
            break;
        }
    }
}

/**
 * Set up mobile menu functionality
 */
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.right = '0';
    });
    
    closeBtn.addEventListener('click', function() {
        mobileMenu.style.right = '-100%';
    });
}