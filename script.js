document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    let isMenuOpen = false;

    hamburger.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--nav-bg)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid var(--card-border)';
            navLinks.style.backdropFilter = 'blur(12px)';
            
            // Change icon to close
            hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            navLinks.style.display = 'none';
            
            // Revert to hamburger
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    // Handle window resize to reset mobile menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.padding = '0';
            navLinks.style.background = 'transparent';
            navLinks.style.borderBottom = 'none';
            isMenuOpen = false;
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else if (!isMenuOpen) {
            navLinks.style.display = 'none';
        }
    });
});
