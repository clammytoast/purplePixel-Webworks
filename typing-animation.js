// JavaScript for the typing animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.getElementsByClassName("typing-animation");
    for (let i = 0; i < elements.length; i++) {
        const text = elements[i].textContent.trim();
        elements[i].textContent = ''; // Clear the original text
        let index = 0;
        let typedText = 'Welcome to puplePixel Webworks';

        function type() {
            if (index < text.length) {
                typedText += text.charAt(index);
                elements[i].textContent = typedText;
                index++;
                setTimeout(type, Math.floor(Math.random() * 150) + 50); // Random delay between 50ms to 200ms
            }
        }

        type();
    }
});
