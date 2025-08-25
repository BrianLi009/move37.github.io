// Move37 Podcast Website - Minimalist Squarepusher Style

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initSmoothScrolling();
    initAudioPlayer();
    initBasket();
});

// Navigation functionality
function initNavigation() {
    const header = document.querySelector('.header');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = '#000000';
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
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
}

// Audio player functionality
function initAudioPlayer() {
    const playButton = document.querySelector('.play-button');
    
    if (playButton) {
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle play/pause state
            const isPlaying = this.classList.contains('playing');
            
            if (isPlaying) {
                this.innerHTML = '<span class="play-icon">▶</span><span>Play</span>';
                this.classList.remove('playing');
                showNotification('Playback paused', 'info');
            } else {
                this.innerHTML = '<span class="play-icon">⏸</span><span>Pause</span>';
                this.classList.add('playing');
                showNotification('Now playing: The Future of AI Research', 'success');
            }
        });
    }
    
    // Share button functionality
    const shareButton = document.querySelector('.share-button');
    if (shareButton) {
        shareButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navigator.share) {
                navigator.share({
                    title: 'Move37 Podcast - The Future of AI Research',
                    text: 'Check out this episode about AI research and PhD life',
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showNotification('Link copied to clipboard', 'success');
                });
            }
        });
    }
}

// Basket functionality
function initBasket() {
    const basketLinks = document.querySelectorAll('a[href="#basket"]');
    const addToBasketButtons = document.querySelectorAll('.add-to-basket');
    
    // Add to basket functionality
    addToBasketButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const formatLabel = this.closest('.format-option').querySelector('.format-label').textContent;
            
            // Simulate playing audio
            this.textContent = 'Playing...';
            this.style.background = '#ffffff';
            this.style.color = '#000000';
            
            showNotification(`Now playing ${formatLabel} format`, 'success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                this.textContent = 'Listen';
                this.style.background = '#000000';
                this.style.color = '#ffffff';
            }, 3000);
        });
    });
    
    // Basket link functionality
    basketLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Basket feature coming soon', 'info');
        });
    });
}

// Subscribe button functionality
function initSubscribeButtons() {
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platformName = this.closest('.platform-option').querySelector('.platform-name').textContent;
            
            // Simulate subscription
            this.textContent = 'Subscribed';
            this.style.background = '#ffffff';
            this.style.color = '#000000';
            
            showNotification(`Subscribed to ${platformName}`, 'success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                this.textContent = 'Subscribe';
                this.style.background = '#000000';
                this.style.color = '#ffffff';
            }, 3000);
        });
    });
}

// Initialize subscribe buttons
document.addEventListener('DOMContentLoaded', function() {
    initSubscribeButtons();
});

// Utility function for notifications
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ffffff;
        color: #000000;
        padding: 15px 20px;
        border: 1px solid #ffffff;
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        letter-spacing: 0.3px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: #000000;
        font-size: 18px;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'JetBrains Mono', monospace;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
`;

document.head.appendChild(notificationStyles);

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle hover effects to buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '1px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.letterSpacing = '0.5px';
        });
    });
});

// Simple page transitions
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
