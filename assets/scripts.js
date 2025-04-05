'use strict'; // Enable strict mode

document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const introContainer = document.getElementById('intro-video-container');
    const mainContent = document.querySelector('main');
    
    // Defer loading of sliders and other content
    let contentLoaded = false;
    let tinySliderLoaded = false;
    let videoPlaybackFinished = false; // Flag for video ended, error, or skipped
    
    // Function to attempt slider initialization only when ready
    function attemptSliderInitialization() {
        // Ensure tns function exists (means script loaded) and video is done
        if (typeof tns === 'function' && videoPlaybackFinished) {
             // Check if sliders were already initialized to prevent double init
            if (!window.sliders || Object.keys(window.sliders).length === 0) {
                 console.log("Conditions met: Initializing sliders now."); // For debugging
                 initializeSliders();
            }
        } else {
            console.log("Conditions not met for slider init:", { tinySliderAvailable: typeof tns === 'function', videoPlaybackFinished }); // For debugging
        }
    }
    
    // Function to load non-critical scripts (slider, gsap)
    function loadRemainingContent() {
        if (contentLoaded) return;
        contentLoaded = true;
        console.log("Loading remaining content scripts..."); // For debugging
        
        // Load tiny-slider script dynamically
        const tinySliderScript = document.createElement('script');
        tinySliderScript.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js";
        tinySliderScript.async = true; // Load asynchronously
        document.head.appendChild(tinySliderScript);
        
        // Load tiny-slider CSS
        const tinySliderCSS = document.createElement('link');
        tinySliderCSS.rel = 'stylesheet';
        tinySliderCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css";
        document.head.appendChild(tinySliderCSS);
        
        // When tiny-slider script loads, set flag and attempt initialization
        tinySliderScript.onload = () => {
            console.log("Tiny-slider script loaded."); // For debugging
            // Flag tinySliderLoaded implicitly by checking `typeof tns` in attemptSliderInitialization
            // No need for a separate flag if we check the function directly.
            attemptSliderInitialization(); // Check if video is already done
        };
        tinySliderScript.onerror = () => {
            console.error("Failed to load tiny-slider script.");
            // Sliders won't initialize, handle accordingly if needed
        };
        
        // Load GSAP for advanced animations
        const gsapScript = document.createElement('script');
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js";
        gsapScript.async = true; // Load asynchronously
        document.head.appendChild(gsapScript);
        
        gsapScript.onload = function() {
            console.log("GSAP script loaded."); // For debugging
            initEnhancedAnimations(); // GSAP animations can start when ready
        };
        gsapScript.onerror = () => console.error("Failed to load GSAP script.");
    }
    
    // Function to handle video completion (ended, error, skipped)
    function handleVideoFinished() {
        if (videoPlaybackFinished) return; // Prevent multiple calls
        console.log("Video playback finished (ended, error, or skipped)."); // For debugging
        videoPlaybackFinished = true; // Set the flag
        
        // Hide video container and show main content
        if (introContainer) introContainer.classList.add('hidden');
        if (mainContent) mainContent.classList.add('visible');
        
        // Attempt to initialize sliders now that the video is done
        attemptSliderInitialization();
        
        // Clean up video container after transition
        setTimeout(() => {
            window.scrollTo(0, 0); // Ensure scroll to top after content appears
            if (introContainer) introContainer.remove();
        }, 700); // Match the CSS transition duration for opacity
    }
    
    // Start loading video immediately
    introVideo.load();
    
    // When video can play through, play it and start loading OTHER scripts
    introVideo.addEventListener('canplaythrough', function() {
        introVideo.play().catch(error => {
            console.error("Video play failed:", error);
            handleVideoFinished(); // Treat inability to play as an error/skip
        });
        // Start loading secondary scripts (slider, gsap) in parallel with video playback
        loadRemainingContent();
    });
    
    // When video ends normally
    introVideo.addEventListener('ended', handleVideoFinished);
    
    // If video fails to load or play
    introVideo.addEventListener('error', function(e) {
        console.error("Intro video error:", e);
        handleVideoFinished();
    });
    
    // Fallback: Skip intro if video takes too long to become playable
    const videoLoadTimeout = setTimeout(() => {
        // Check readyState: < 3 means it hasn't reached HAVE_FUTURE_DATA/CAN_PLAY_THROUGH
        if (!videoPlaybackFinished && introVideo.readyState < 3) {
            console.log("Video fallback timeout triggered (5s). Skipping video."); // Debug log
            handleVideoFinished();
        }
    }, 5000); // 5 seconds
    
    // Initialize tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(targetTab, clickedButton) {
        const activeContent = document.querySelector('.tab-content.active');
        
        // Deactivate all buttons and contents first
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active')); // Deactivate all content
        
        // Activate the target button and content
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        if (clickedButton) {
            clickedButton.classList.add('active');
        } else {
            // Fallback for initial load
            const buttonToActivate = document.querySelector(`[data-tab="${targetTab}"]`);
            if (buttonToActivate) buttonToActivate.classList.add('active');
        }
        
        // Scroll to top smoothly after the switch
        // No need for setTimeout or manual style changes, CSS handles the transition
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab, button);
        });
    });
    
    // Initial tab setup
    if (tabButtons.length > 0) {
        const firstTab = tabButtons[0].getAttribute('data-tab');
        // Activate the first tab directly on load (CSS handles initial state)
        const firstContent = document.getElementById(firstTab);
        if (firstContent) {
            firstContent.classList.add('active');
            // Ensure initial styles are applied correctly for transition
            // Setting opacity/transform directly might interfere with CSS transitions
            // Let the initial state be handled by CSS rules for .tab-content and .tab-content.active
        }
        tabButtons[0].classList.add('active');
         // Ensure initial scroll position is top
        window.scrollTo(0, 0);
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
            const sliderContainers = document.querySelectorAll('div[class*="project"][class*="-slider"]:not([class*="project-"])');
            let imagesToLoad = 0;
            let imagesLoaded = 0;

            sliderContainers.forEach(container => {
                const images = container.querySelectorAll('img');
                imagesToLoad += images.length;

                images.forEach(img => {
                    // Explicitly set eager loading if needed, though removing 'lazy' is preferred in HTML
                    // img.loading = 'eager';

                    if (img.complete) {
                        imagesLoaded++;
                        return;
                    }

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

                    // Force reload if needed (keep this part of preloading logic)
                    if (img.src) {
                        const currentSrc = img.src;
                        img.src = ''; // Clear src first
                        img.src = currentSrc; // Re-assign to trigger load
                    }
                });
            });

            if (imagesToLoad === 0 || imagesLoaded === imagesToLoad) {
                // If all images are ready (or no images), proceed to init
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
                // Using default fade effect is often more robust than custom animateIn/Out
                // animateIn: 'fadeIn', // Consider removing if causing issues
                // animateOut: 'fadeOut', // Consider removing if causing issues
                responsive: {
                    0: { items: 1, gutter: 0 },
                    640: { items: 1, gutter: 20 }
                },
                preventScrollOnTouch: 'auto',
                touch: true,
                mouseDrag: true,
                lazyload: false, // Keep disabled
                onInit: function(info) {
                    // REMOVED the forced reflow hack.
                    // console.log('Slider initialized:', info.container);
                }
            };

            window.sliders = {};
            const sliderContainers = document.querySelectorAll('div[class*="project"][class*="-slider"]:not([class*="project-"])');

            sliderContainers.forEach(container => {
                const match = container.className.match(/project(\d+)-slider/);
                if (match && match[1]) {
                    const sliderId = match[1];
                    const sliderKey = `slider${sliderId}`;
                    const containerSelector = `.${container.className.split(' ').join('.')}`;

                    // **DELAY INITIALIZATION**
                    // Wrap the tns() call in setTimeout 0
                    setTimeout(() => {
                        try {
                            // Check if container still exists (robustness)
                            if (document.querySelector(containerSelector)) {
                                window.sliders[sliderKey] = tns({
                                    ...tnsOptions,
                                    container: containerSelector
                                });
                                // Initialize YouTube players *after* all sliders have attempted init
                                // This might need adjustment if YouTube init depends on slider state immediately
                                if (Object.keys(window.sliders).length === sliderContainers.length) {
                                    initYouTubePlayers();
                                }
                            }
                        } catch(e) {
                            console.error(`Failed to initialize slider for ${containerSelector} inside setTimeout:`, e);
                        }
                    }, 0); // Delay of 0ms pushes execution to next event loop cycle

                } else {
                    console.warn("Could not extract slider ID from class:", container.className);
                }
            });

            // Move YouTube init call inside the setTimeout callback
            // or handle it separately if it doesn't strictly depend on sliders being fully ready
            // If initYouTubePlayers doesn't rely on slider instances immediately,
            // it could potentially be called once after the loop finishes.
            // Let's assume it's safer to call it after all initializations are attempted.
            // Note: The check inside setTimeout ensures it's called only once.
            if (sliderContainers.length === 0) {
                 initYouTubePlayers(); // Call if there are no sliders
            }
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