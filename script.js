document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Typing Effect for Headers
    var mainTitle = document.querySelector('h1');
    if (mainTitle) {
        var originalText = mainTitle.innerHTML;
        mainTitle.innerHTML = '';
        var charIndex = 0;
        
        function typeEffect() {
            if (charIndex < originalText.length) {
                mainTitle.innerHTML += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 50);
            }
        }
        typeEffect();
    }

    // 2. Interactive Video Hover
    // Videos only play when you hover over them
    var allVideos = document.querySelectorAll('video');
    allVideos.forEach(function(video) {
        video.removeAttribute('autoplay'); // Prevent auto-playing
        video.addEventListener('mouseenter', function() {
            video.play();
        });
        video.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0; // Resets video on leave
        });
    });
});