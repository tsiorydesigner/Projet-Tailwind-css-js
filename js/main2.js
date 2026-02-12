function goToPage() {
    window.location.href = "sign_in.html";
}

// Détecter la touche Entrée sur tout le document
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        goToPage();
    }
});

// Animation au chargement de la page
window.addEventListener('DOMContentLoaded', function() {
    // Animation du formulaire (fade in + slide up)
    const form = document.querySelector('.form');
    if (form) {
        form.style.opacity = '0';
        form.style.transform = 'translateY(30px)';
        form.style.transition = 'opacity 0.20s ease, transform 0.3s ease';
        
        setTimeout(() => {
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animation de l'image (fade in)
    const image = document.querySelector('img[src*="FOND1"]');
    if (image) {
        image.style.opacity = '0';
        image.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            image.style.opacity = '1';
        }, 300);
    }

    // Animation des inputs au focus
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animation du bouton Sign in
    const signInButton = document.querySelector('button[onclick="goToPage()"]');
    if (signInButton) {
        signInButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            this.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.4)';
        });

        signInButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });

        signInButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Animation des liens
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s ease';
            this.style.transform = 'translateX(3px)';
            this.style2.transform = 'transform 0.3s ease';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});
