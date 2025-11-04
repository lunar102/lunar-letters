// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the form, confirmation message, and buttons
    const messageForm = document.getElementById("messageForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const returnButton = document.getElementById("returnButton");
    const submitButton = document.querySelector('input[type="submit"]');

    // Add submit event listener to the form
    messageForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Hide the form
        messageForm.style.display = "none";

        // Show the confirmation message
        confirmationMessage.style.display = "block";
    });

    // Add click event listener to the return button
    returnButton.addEventListener("click", function() {
        // Hide the confirmation message
        confirmationMessage.style.display = "none";

        // Show the form again
        messageForm.style.display = "block";

        // Reset the form (optional)
        messageForm.reset();
    });

    // Add button animation code for the submit button
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

    // Add button animation code for the return button
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

    // Create and animate stars
    const starryBackground = document.getElementById("starryBackground");
    if (starryBackground) {
        const numberOfStars = 200; // Number of stars

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement("div");
            star.classList.add("star");

            // Random size between 1px and 3px
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Random opacity for twinkling effect
            star.style.opacity = Math.random() * 0.8 + 0.2;

            starryBackground.appendChild(star);

            // Animate each star with twinkling effect
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
