document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("space-canvas");

    if (canvas) {
        const ctx = canvas.getContext("2d");

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let stars = [];

        for (let i = 0; i < 150; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 1.5
            });
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    // Scroll Reveal
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach(section => {
            const revealTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (revealTop < windowHeight - 150) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});