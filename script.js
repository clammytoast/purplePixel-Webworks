document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ['Welcome to PurplePixel Webworks'],
        typeSpeed: 50, // Speed of typing in milliseconds
        showCursor: false, // Hide cursor after typing
        onComplete: function() {
            // Do something when typing animation completes, if needed
        }
    });
});
