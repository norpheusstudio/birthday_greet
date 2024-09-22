const messages = [
    "You’re an amazing person! Enjoy your special day!",
    "May your day be filled with sweet surprises!",
    "Here’s to a year full of adventure and joy!",
    "You deserve all the happiness in the world!",
    "Cheers to you on your birthday!",
    "Happy na, birthday mo pa!",
];

document.getElementById("surpriseButton").addEventListener("click", function() {
    // Show a random birthday message
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("surpriseMessage").textContent = messages[randomIndex];
    document.getElementById("surpriseMessage").style.display = "block";

    // Trigger confetti effect
    createConfetti();
});

function createConfetti() {
    const colors = ['#ff4081', '#ffcd3c', '#2ecc71', '#3498db', '#e74c3c'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
