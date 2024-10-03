const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);

let canvasFontTransparent = 0.05


// Array to store the vertical positions of each column
let drops = Array(columns).fill(0);

// Characters to display (includes ASCII and Japanese characters for variety)
const matrixCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾜｵﾝ!?*#$%&';

// Function to draw the matrix effect
function draw() {
    // Clear the canvas with a slightly transparent black background
    ctx.fillStyle = `rgba(0, 0, 0, ${canvasFontTransparent})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green color for matrix effect
    ctx.font = `${fontSize}px monospace`;

    // Loop through the drops array to draw the characters falling down
    for (let i = 0; i < drops.length; i++) {
        const text = matrixCharacters.charAt(Math.floor(Math.random() * matrixCharacters.length));

        // Draw the character at the (x, y) position of the drop
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset drop to the top after it reaches the bottom of the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down by one row
        drops[i]++;
    }
}

// Start the draw loop
setInterval(draw, 50);
