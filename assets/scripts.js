document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const introContainer = document.getElementById('intro-video-container');
    const mainContent = document.querySelector('main');
    
    // Start playing the video
    introVideo.play();
    
    // When video ends
    introVideo.addEventListener('ended', function() {
        introContainer.classList.add('hidden');
        mainContent.classList.add('visible');
        
        // Remove the video container after transition
        setTimeout(() => {
            introContainer.remove();
        }, 500);
    });
    
    // Fallback in case video fails to load
    introVideo.addEventListener('error', function() {
        introContainer.classList.add('hidden');
        mainContent.classList.add('visible');
        introContainer.remove();
    });
    
    // Optional: Skip intro if video takes too long to load
    setTimeout(() => {
        if (introVideo.readyState < 3) { // Video hasn't loaded enough to play
            introContainer.classList.add('hidden');
            mainContent.classList.add('visible');
            introContainer.remove();
        }
    }, 5000); // 5 second timeout
});

window.addEventListener('load', function() {
    try {
        const tnsOptions = {
            container: '',
            items: 1,
            slideBy: 'page',
            controls: true,
            controlsText: ['←', '→'],
            nav: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 5000,
            speed: 400,
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
            mouseDrag: true
        };

        // Store all sliders in an object for easy reference
        const sliders = {};

        // Initialize each slider separately
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(num => {
            sliders[`slider${num}`] = tns({
                ...tnsOptions,
                container: `.project${num}-slider`
            });
        });

        // YouTube API integration
        function onYouTubeIframeAPIReady() {
            // Create players for all YouTube iframes
            document.querySelectorAll('iframe[src*="youtube.com"]').forEach(iframe => {
                const player = new YT.Player(iframe.id, {
                    events: {
                        'onStateChange': function(event) {
                            // Find which slider contains this YouTube player
                            const sliderContainer = iframe.closest('[class*="project"]');
                            if (!sliderContainer) return;
                            
                            const sliderId = sliderContainer.className.match(/project(\d+)-slider/)[1];
                            const currentSlider = sliders[`slider${sliderId}`];
                            
                            if (!currentSlider) return;

                            if (event.data === YT.PlayerState.PLAYING) {
                                // Pause the slider when video starts playing
                                currentSlider.pause();
                                // Disable autoplay
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
        }

        // Add YouTube API script
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Make onYouTubeIframeAPIReady global
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    } catch (error) {
        console.error('Error initializing sliders:', error);
    }
});

// Tab functionality remains the same
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(targetTab) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        const targetContent = document.getElementById(targetTab);
        targetContent.classList.add('active');
        
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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