const textEl = document.getElementById('text');

const text = 'Welcome to PurplePixel Webworks!';
let idx = 0;
let speed = 100; // Faster speed

writeText();

function writeText() {
    if (idx < text.length) {
        textEl.innerText += text.charAt(idx);
        idx++;
        setTimeout(writeText, speed);
    } else {
        textEl.innerHTML += '<span class="blinking-cursor">|</span>'; // Add blinking cursor after typing
    }
}
