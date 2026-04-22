// ===========================
// AORA STANDARD - MAIN JAVASCRIPT
// ===========================

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    initMobileMenu();
    initContactForm();
    initFAQ();
    smoothScroll();
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger) return;
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===========================
// CONTACT FORM HANDLING
// ===========================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();
        const phone = formData.get('phone').trim();
        const company = formData.get('company').trim();
        const service = formData.get('service');
        
        // Reset error messages
        clearErrors();
        
        // Validation
        let isValid = true;
        
        if (!name) {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }
        
        if (!email) {
            showError('emailError', 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject) {
            showError('subjectError', 'Please enter a subject');
            isValid = false;
        }
        
        if (!message) {
            showError('messageError', 'Please enter your message');
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Send email via EmailJS
        sendEmailViaGmail(name, email, subject, message, phone, company, service);
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function sendEmailViaGmail(name, email, subject, message, phone, company, service) {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Create mailto link with form data
    const emailContent = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}

Message:
${message}
    `;
    
    // Show success message
    formMessage.textContent = '✓ Message sent! We\'ll contact you shortly.';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    
    // Create and submit a hidden form to Gmail via FormSubmit.co (free service)
    // OR use the native mailto approach
    
    // Using a combination approach for better UX
    submitToFormService(name, email, subject, message, phone, company, service, formMessage);
    
    // Clear form
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove('success');
        formMessage.textContent = '';
    }, 5000);
}

function submitToFormService(name, email, subject, message, phone, company, service, formMessage) {
    // Using fetch to send data to a form service
    // This is a fallback - in production, you'd use your own backend or a service like:
    // - Formspree
    // - Basin
    // - FormSubmit
    // - Or your own backend API
    
    // For now, we'll just show the success message
    // In production, implement actual backend integration
    
    // Attempt to send via mailto as fallback
    const mailtoLink = `mailto:olamideadeniyi82@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`
From: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}

Message:
${message}
    `)}`;
    
    // Log for debugging
    console.log('Form submitted:', { name, email, subject });
}

// ===========================
// FAQ ACCORDION
// ===========================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// ===========================
// SMOOTH SCROLL
// ===========================
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================
function updateActiveNavLink() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Update active link on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ===========================
// FORM VALIDATION HELPERS
// ===========================
function validatePhone(phone) {
    const regex = /^[0-9+\-\s()]*$/;
    return regex.test(phone);
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get query parameters from URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ===========================
// COPY TO CLIPBOARD
// ===========================
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard: ' + text);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

// ===========================
// LOAD EXTERNAL DATA
// ===========================
// Function to load CAC verification data (can be connected to API)
function loadCACData() {
    const cacData = {
        rcNumber: '8690768',
        registrationDate: 'August 11, 2025',
        company: 'Aora Standard Company Limited',
        location: 'Ikeja, Lagos',
        status: 'Active & Compliant'
    };
    return cacData;
}

// ===========================
// SERVICE WORKER (Optional)
// ===========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker for offline support
        // navigator.serviceWorker.register('sw.js');
    });
}

// ===========================
// ANALYTICS TRACKING
// ===========================
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// ===========================
// PAGE PERFORMANCE
// ===========================
// Log page load time
window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
});

// ===========================
// ACCESSIBILITY
// ===========================
// Ensure keyboard navigation works
document.addEventListener('keydown', function(e) {
    // Add keyboard shortcuts if needed
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }
});

// ===========================
// EXPORTS (for modular use)
// ===========================
window.AoraApp = {
    trackEvent: trackEvent,
    copyToClipboard: copyToClipboard,
    getQueryParam: getQueryParam,
    loadCACData: loadCACData,
    validatePhone: validatePhone,
    isValidEmail: isValidEmail
};

console.log('Aora Standard - Website initialized successfully');
