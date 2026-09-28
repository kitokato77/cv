// Modal Logic
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling underneath
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Add scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
        navbar.style.padding = '20px 0';
    }
});

// Carousel Logic
function moveCarousel(button, direction) {
    const carousel = button.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-images img');
    let activeIndex = 0;
    
    // Find currently active image
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
            img.classList.remove('active');
        }
    });
    
    // Calculate new index
    let newIndex = activeIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    // Set new active image
    images[newIndex].classList.add('active');
}
