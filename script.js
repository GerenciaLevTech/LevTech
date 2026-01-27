function scrollToPrice() {
    document.getElementById("pricing").scrollIntoView({
        behavior: "smooth",
    });
}

function handlePurchase() {
    // Simulação de checkout
    alert("🎉 Redirecionando para o checkout seguro...");
}

// Animação suave ao scroll (Fade In)
const cards = document.querySelectorAll(
    ".question-card, .benefit-card, .authority-image",
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(30px)";

                // Pequeno delay para garantir que o CSS carregou
                setTimeout(() => {
                    entry.target.style.transition = "all 0.8s ease-out";
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, 100);

                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    },
    {threshold: 0.1},
);

cards.forEach((card) => observer.observe(card));