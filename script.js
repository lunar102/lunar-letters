document.addEventListener("DOMContentLoaded", function() {
    const messageForm = document.getElementById("messageForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const returnButton = document.getElementById("returnButton");
    const submitButton = document.querySelector('input[type="submit"]');

    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();

        messageForm.style.display = "none";

        confirmationMessage.style.display = "block";
    });

    returnButton.addEventListener("click", function() {
        confirmationMessage.style.display = "none";

        messageForm.style.display = "block";

        messageForm.reset();
    });

    submitButton.addEventListener("mouseenter", function() {
        this.classList.add("hover");
    });

    submitButton.addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });

    submitButton.addEventListener("mousedown", function() {
        this.classList.add("active");
    });

    submitButton.addEventListener("mouseup", function() {
        this.classList.remove("active");
    });

    returnButton.addEventListener("mouseenter", function() {
        this.classList.add("hover");
    });

    returnButton.addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });

    returnButton.addEventListener("mousedown", function() {
        this.classList.add("active");
    });

    returnButton.addEventListener("mouseup", function() {
        this.classList.remove("active");
    });

    const starryBackground = document.getElementById("starryBackground");
    if (starryBackground) {
        const numberOfStars = 250;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement("div");
            star.classList.add("star");

            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            star.style.opacity = Math.random() * 0.8 + 0.2;

            starryBackground.appendChild(star);

            anime({
                targets: star,
                opacity: [
                    { value: 0.2, duration: 0 },
                    { value: 1, duration: anime.random(500, 2000) },
                    { value: 0.2, duration: anime.random(500, 2000) }
                ],
                delay: anime.random(0, 3000),
                loop: true,
                easing: 'easeInOutSine'
            });
        }
    }
});
