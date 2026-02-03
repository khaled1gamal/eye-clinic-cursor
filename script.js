/**
 * Mobile Eye Clinic - Landing Page Script
 * Includes: GSAP Animations, Language Switching, Form Validation
 */

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================
// Language Switching (RTL/LTR)
// ============================================

let currentLang = 'ar'; // Default language

// Language data
const langData = {
    ar: {
        dir: 'rtl',
        lang: 'ar',
        font: 'Cairo'
    },
    en: {
        dir: 'ltr',
        lang: 'en',
        font: 'Poppins'
    }
};

/**
 * Switch language between Arabic and English
 */
function switchLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const lang = langData[currentLang];
    
    // Update HTML attributes
    document.documentElement.setAttribute('dir', lang.dir);
    document.documentElement.setAttribute('lang', lang.lang);
    document.body.style.fontFamily = `var(--font-${currentLang === 'ar' ? 'arabic' : 'english'})`;
    
    // Update language button text
    const langBtn = document.getElementById('langBtn');
    const langText = langBtn.querySelector('.lang-text');
    langText.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    
    // Update all text content
    updateTextContent();
    
    // Reinitialize animations after language switch
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
    
    // Save preference
    localStorage.setItem('preferredLang', currentLang);
}

/**
 * Update all text content based on current language
 */
function updateTextContent() {
    const elements = document.querySelectorAll('[data-ar][data-en]');
    elements.forEach(element => {
        const text = currentLang === 'ar' 
            ? element.getAttribute('data-ar') 
            : element.getAttribute('data-en');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.type === 'submit' || element.type === 'button') {
                element.value = text;
            } else if (element.placeholder !== undefined) {
                element.placeholder = text;
            }
        } else if (element.tagName === 'OPTION') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== 'ar') {
        switchLanguage();
    }
});

// Language button event listener
document.getElementById('langBtn').addEventListener('click', switchLanguage);

// ============================================
// Navigation
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// GSAP Page Load Animation
// ============================================

function initPageLoadAnimation() {
    // Set initial states
    gsap.set('.hero-title .title-line-1', { opacity: 0, y: 50 });
    gsap.set('.hero-title .title-line-2', { opacity: 0, y: 50 });
    gsap.set('.hero-description', { opacity: 0, y: 30 });
    gsap.set('.hero-buttons', { opacity: 0, y: 30 });
    gsap.set('.hero-shapes .shape', { scale: 0, opacity: 0 });
    
    // Create timeline
    const tl = gsap.timeline();
    
    // Animate hero content
    tl.to('.hero-title .title-line-1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .to('.hero-title .title-line-2', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero-shapes .shape', {
        scale: 1,
        opacity: 0.3,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        stagger: 0.2
    }, '-=0.6');
}

// ============================================
// GSAP Scroll Animations
// ============================================

function initScrollAnimations() {
    // Why Choose Us - Feature Cards
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Services - Service Cards
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    // How It Works - Steps
    gsap.utils.toArray('.step-item').forEach((step, index) => {
        const stepNumber = step.querySelector('.step-number');
        const stepContent = step.querySelector('.step-content');
        
        // Animate step number
        gsap.from(stepNumber, {
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            rotation: -180,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: index * 0.2
        });
        
        // Animate step content
        gsap.from(stepContent, {
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.2
        });
    });
    
    // Section Headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Booking Form
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        gsap.from(bookingForm, {
            scrollTrigger: {
                trigger: bookingForm,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // CTA Section
    const ctaContent = document.querySelector('.cta-content');
    if (ctaContent) {
        gsap.from(ctaContent, {
            scrollTrigger: {
                trigger: ctaContent,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: 'power3.out'
        });
    }
}

// ============================================
// GSAP Hover Animations
// ============================================

function initHoverAnimations() {
    // Feature Cards Hover
    document.querySelectorAll('.feature-card').forEach(card => {
        const icon = card.querySelector('.feature-icon');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Service Cards Hover
    document.querySelectorAll('.service-card').forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.15,
                rotation: 10,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
    });
    
    // Buttons Hover
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

// ============================================
// Form Validation
// ============================================

const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

/**
 * Validate phone number
 */
function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Validate form field
 */
function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    let isValid = true;
    
    // Remove previous error state
    formGroup.classList.remove('error');
    field.classList.remove('error');
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
    }
    
    // Validate phone number
    if (field.type === 'tel' && field.value.trim()) {
        if (!validatePhone(field.value)) {
            isValid = false;
        }
    }
    
    // Show error if invalid
    if (!isValid) {
        formGroup.classList.add('error');
        field.classList.add('error');
        
        // Animate error
        gsap.from(errorMessage, {
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        // Shake animation for field
        gsap.to(field, {
            x: [-10, 10, -10, 10, 0],
            duration: 0.5,
            ease: 'power2.out'
        });
    }
    
    return isValid;
}

/**
 * Validate entire form
 */
function validateForm() {
    const fields = bookingForm.querySelectorAll('input[required], select[required]');
    let isFormValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });
    
    return isFormValid;
}

/**
 * Handle form submission
 */
bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = bookingForm.querySelector('.btn-submit');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        formSuccess.classList.add('show');
        bookingForm.reset();
        
        // Animate success message
        gsap.from(formSuccess, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'back.out(1.7)'
        });
        
        // Scroll to success message
        gsap.to(window, {
            scrollTo: {
                y: formSuccess,
                offsetY: 100
            },
            duration: 0.8,
            ease: 'power2.out'
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            gsap.to(formSuccess, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    formSuccess.classList.remove('show');
                }
            });
        }, 5000);
        
        // Log form data (replace with actual API call)
        console.log('Form submitted:', formData);
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert(currentLang === 'ar' 
            ? 'حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.' 
            : 'An error occurred while submitting the form. Please try again.');
    } finally {
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// Real-time validation
const formFields = bookingForm.querySelectorAll('input, select, textarea');
formFields.forEach(field => {
    field.addEventListener('blur', () => {
        validateField(field);
    });
    
    field.addEventListener('input', () => {
        if (field.classList.contains('error')) {
            validateField(field);
        }
    });
});

// ============================================
// Initialize Everything
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page load animation
    initPageLoadAnimation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover animations
    initHoverAnimations();
    
    // Update text content on load
    updateTextContent();
});

// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ============================================
// Additional Utility Functions
// ============================================

/**
 * Smooth scroll to element
 */
function scrollToElement(element, offset = 80) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for potential external use
window.MobileEyeClinic = {
    switchLanguage,
    scrollToElement,
    isInViewport
};
