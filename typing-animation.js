// JavaScript for the typing animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.getElementsByClassName("typing-animation");
    for (let i = 0; i < elements.length; i++) {
        const text = elements[i].textContent;
        elements[i].innerHTML = "";
        for (let j = 0; j < text.length; j++) {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = text[j];
            letterSpan.style.animationDelay = `${0.1 * j}s`;
            elements[i].appendChild(letterSpan);
        }
    }
});
