document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Toggle aria-expanded for accessibility
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    }

    // Hamburger click event
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only close menu on mobile
            if (window.innerWidth <= 480) {
                // Smooth scroll to section
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close menu first
                    toggleMenu();
                    
                    // Scroll to section after menu closes
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 400);
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 480) {
            const isClickInsideMenu = navMenu.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu on window resize (if resizing to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Enhanced touch events for mobile
    let startX = 0;
    let currentX = 0;

    navMenu.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    }, { passive: true });

    navMenu.addEventListener('touchmove', function(e) {
        if (!navMenu.classList.contains('active')) return;
        
        currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        
        // Swipe left to close
        if (diff > 50) {
            toggleMenu();
        }
    }, { passive: true });

    // Add aria labels for accessibility
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('role', 'button');
});

// Optional: Add page load animation for menu
window.addEventListener('load', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});
