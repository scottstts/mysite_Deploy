document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const introContainer = document.getElementById('intro-video-container');
    const mainContent = document.querySelector('main');
    
    // Defer loading of sliders and other content
    let contentLoaded = false;
    
    // Function to load remaining content
    function loadRemainingContent() {
        if (contentLoaded) return;
        contentLoaded = true;
        
        // Load tiny-slider script dynamically
        const tinySliderScript = document.createElement('script');
        tinySliderScript.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js";
        document.head.appendChild(tinySliderScript);
        
        // Load tiny-slider CSS
        const tinySliderCSS = document.createElement('link');
        tinySliderCSS.rel = 'stylesheet';
        tinySliderCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css";
        document.head.appendChild(tinySliderCSS);
        
        // Initialize sliders after tiny-slider loads
        tinySliderScript.onload = initializeSliders;
        
        // Load GSAP for advanced animations
        const gsapScript = document.createElement('script');
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js";
        document.head.appendChild(gsapScript);
        
        gsapScript.onload = function() {
            // Initialize enhanced animations when GSAP loads
            initEnhancedAnimations();
        };
    }
    
    // Start loading video immediately
    introVideo.load();
    
    // When video can play through
    introVideo.addEventListener('canplaythrough', function() {
        introVideo.play();
        // Start loading other content while video plays
        loadRemainingContent();
    });
    
    // When video ends
    introVideo.addEventListener('ended', function() {
        introContainer.classList.add('hidden');
        mainContent.classList.add('visible');
        
        setTimeout(() => {
            window.scrollTo(0, 0);
            introContainer.remove();
        }, 500);
    });
    
    // Fallback in case video fails to load
    introVideo.addEventListener('error', function() {
        introContainer.classList.add('hidden');
        mainContent.classList.add('visible');
        introContainer.remove();
        loadRemainingContent();
    });
    
    // Optional: Skip intro if video takes too long to load
    setTimeout(() => {
        if (introVideo.readyState < 3) {
            introContainer.classList.add('hidden');
            mainContent.classList.add('visible');
            introContainer.remove();
            loadRemainingContent();
        }
    }, 5000);

    // Initialize tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(targetTab) {
        // Create a smoother transition between tabs
        const activeContent = document.querySelector('.tab-content.active');
        
        if (activeContent) {
            activeContent.style.opacity = '0';
            activeContent.style.transform = 'translateY(15px)';
            
            setTimeout(() => {
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                tabButtons.forEach(button => {
                    button.classList.remove('active');
                });
                
                const targetContent = document.getElementById(targetTab);
                targetContent.classList.add('active');
                
                // Force reflow to ensure the animation runs
                void targetContent.offsetWidth;
                
                targetContent.style.opacity = '1';
                targetContent.style.transform = 'translateY(0)';
                
                document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 300);
        } else {
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });
            
            const targetContent = document.getElementById(targetTab);
            targetContent.classList.add('active');
            
            document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        }
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
    
    if (tabButtons.length > 0) {
        const firstTab = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTab);
    }
});

// Function to initialize YouTube players
function initYouTubePlayers() {
    // Create a global callback for YouTube API
    window.onYouTubeIframeAPIReady = function() {
        // Find all YouTube iframes
        document.querySelectorAll('iframe[src*="youtube.com"]').forEach(iframe => {
            // Extract video ID from src
            const videoId = iframe.src.split('/').pop().split('?')[0];
            
            new YT.Player(iframe.id, {
                videoId: videoId,
                playerVars: {
                    enablejsapi: 1,
                    origin: window.location.origin
                },
                events: {
                    'onStateChange': function(event) {
                        // Find which slider contains this YouTube player
                        const sliderContainer = event.target.getIframe().closest('[class*="project"]');
                        if (!sliderContainer) return;
                        
                        const sliderId = sliderContainer.className.match(/project(\d+)-slider/)[1];
                        const currentSlider = window.sliders?.[`slider${sliderId}`];
                        
                        if (!currentSlider) return;

                        if (event.data === YT.PlayerState.PLAYING) {
                            // Pause the slider when video starts playing
                            currentSlider.pause();
                            currentSlider.options.autoplay = false;
                        } else if (event.data === YT.PlayerState.ENDED || 
                                 event.data === YT.PlayerState.PAUSED) {
                            // Re-enable autoplay and resume slider
                            currentSlider.options.autoplay = true;
                            currentSlider.play();
                        }
                    }
                }
            });
        });
    };

    // Load YouTube API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Slider initialization function with enhanced options
function initializeSliders() {
    try {
        // Preload images before initializing sliders
        const preloadImages = () => {
            const sliderContainers = document.querySelectorAll('[class*="project"]:not([class*="project-"])');
            let imagesToLoad = 0;
            let imagesLoaded = 0;
            
            // Count all images that need to be loaded
            sliderContainers.forEach(container => {
                const images = container.querySelectorAll('img');
                imagesToLoad += images.length;
                
                // Force load images and track progress
                images.forEach(img => {
                    // If image is already loaded or has error
                    if (img.complete) {
                        imagesLoaded++;
                        return;
                    }
                    
                    // Add load and error event listeners
                    img.addEventListener('load', () => {
                        imagesLoaded++;
                        if (imagesLoaded === imagesToLoad) {
                            initSliders();
                        }
                    });
                    
                    img.addEventListener('error', () => {
                        imagesLoaded++;
                        console.error('Error loading image:', img.src);
                        if (imagesLoaded === imagesToLoad) {
                            initSliders();
                        }
                    });
                    
                    // Force reload if needed
                    if (img.getAttribute('loading') === 'lazy') {
                        img.setAttribute('loading', 'eager');
                    }
                    
                    // Ensure src is set
                    if (img.src) {
                        const currentSrc = img.src;
                        img.src = '';
                        img.src = currentSrc;
                    }
                });
            });
            
            // If no images or all images already loaded
            if (imagesToLoad === 0 || imagesLoaded === imagesToLoad) {
                initSliders();
            }
        };
        
        // Initialize the actual sliders
        const initSliders = () => {
            const tnsOptions = {
                items: 1,
                slideBy: 'page',
                controls: true,
                controlsText: ['←', '→'],
                nav: true,
                autoplay: true,
                autoplayButtonOutput: false,
                autoplayTimeout: 5000,
                speed: 600,
                mode: 'carousel',
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                responsive: {
                    0: {
                        items: 1,
                        gutter: 0
                    },
                    640: {
                        items: 1,
                        gutter: 20
                    }
                },
                preventScrollOnTouch: 'auto',
                touch: true,
                mouseDrag: true,
                lazyload: false, // Disable tiny-slider's built-in lazy loading
                onInit: function() {
                    // Fix for image display issues - ensure proper rendering after init
                    setTimeout(() => {
                        const sliderItems = document.querySelectorAll('.tns-item');
                        sliderItems.forEach(item => {
                            const img = item.querySelector('img');
                            if (img) {
                                // Force a reflow/repaint
                                img.style.display = 'none';
                                void img.offsetHeight; // Trigger reflow
                                img.style.display = '';
                            }
                        });
                    }, 100);
                }
            };

            // Store sliders in window object for global access
            window.sliders = {};

            // Initialize each slider separately
            ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(num => {
                const container = document.querySelector(`.project${num}-slider`);
                if (container) {
                    window.sliders[`slider${num}`] = tns({
                        ...tnsOptions,
                        container: `.project${num}-slider`
                    });
                }
            });

            // Initialize YouTube players after sliders are ready
            initYouTubePlayers();
        };
        
        // Start the preloading process
        preloadImages();

    } catch (error) {
        console.error('Error initializing sliders:', error);
    }
}

// Initialize enhanced animations using GSAP
function initEnhancedAnimations() {
    if (!window.gsap) return;
    
    // Add parallax effect to glass cards on scroll
    const glassCards = document.querySelectorAll('.glass-card');
    
    if (glassCards.length) {
        // Parallax effect for glass cards has been disabled
        // The following code was causing up/down movement on scroll
        /*
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            
            glassCards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const centerY = rect.top + rect.height / 2;
                const viewportHeight = window.innerHeight;
                const distanceFromCenter = centerY - viewportHeight / 2;
                const translateY = distanceFromCenter * -0.03;
                
                // Only apply effect if card is in viewport
                if (rect.top < viewportHeight && rect.bottom > 0) {
                    gsap.to(card, {
                        y: translateY,
                        duration: 0.5,
                        ease: "power1.out"
                    });
                }
            });
        }, { passive: true });
        */
    }
    
    // Add subtle text reveal animation for highlighted text
    const highlightedElements = document.querySelectorAll('.highlight-glow, .text-yellow-200');
    
    if (highlightedElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target, 
                        { opacity: 0.7, y: 10 },
                        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        highlightedElements.forEach((element) => {
            observer.observe(element);
        });
    }
    
    // Enhance page title animation
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
        gsap.to(pageTitle, {
            textShadow: "0 0 30px rgba(99, 102, 241, 0.7)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// Scroll to top functionality with enhanced behavior
const scrollButton = document.getElementById('scroll-top-button');

function toggleScrollButton() {
    if (window.scrollY > 200) {
        if (scrollButton.classList.contains('hidden')) {
            scrollButton.classList.remove('hidden');
            setTimeout(() => {
                scrollButton.style.transform = "translateY(0)";
                scrollButton.style.opacity = "1";
            }, 10);
        }
    } else {
        if (!scrollButton.classList.contains('hidden')) {
            scrollButton.style.transform = "translateY(2rem)";
            scrollButton.style.opacity = "0";
            setTimeout(() => {
                scrollButton.classList.add('hidden');
            }, 300);
        }
    }
}

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add interactive card hover effects
const glassCards = document.querySelectorAll('.glass-card');
glassCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        if (window.innerWidth < 768) return; // Skip on mobile
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Throttle scroll event for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            toggleScrollButton();
            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

// Add subtle text animation to nav items
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('active') && window.gsap) {
            gsap.to(button, {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                duration: 0.3
            });
        }
    });
    
    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active') && window.gsap) {
            gsap.to(button, {
                backgroundColor: 'transparent',
                duration: 0.3
            });
        }
    });
});

// Listen for window resize events to ensure correct layout
window.addEventListener('resize', () => {
    // Throttle resize events
    if (window.resizeTimeout) {
        clearTimeout(window.resizeTimeout);
    }
    
    window.resizeTimeout = setTimeout(() => {
        // Adjust any layout issues that might occur on resize
        document.querySelectorAll('.glass-card').forEach(card => {
            card.style.transform = '';
        });
    }, 250);
}, { passive: true });

// Add subtle starfield movement to body background
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return; // Skip on mobile
    
    const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
    
    document.body.style.setProperty('--mouse-x', `${moveX}deg`);
    document.body.style.setProperty('--mouse-y', `${moveY}deg`);
    
    document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
}, { passive: true });