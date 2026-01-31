document.addEventListener('DOMContentLoaded', () => {
    const eventDate = new Date('April 21, 2026 09:00:00').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const diff = eventDate - now;
        
        if (diff < 0) {
            document.getElementById("countdown").innerText = "CONFERENCE IN SESSION";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `Starts in ${days} days`;
    }

    updateTimer();
    setInterval(updateTimer, 1000); // Updates every second
});