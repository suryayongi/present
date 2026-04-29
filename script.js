document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Jika elemen sudah masuk ke dalam jangkauan layar
            if (elementTop < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    };

    // Jalankan sekali saat pertama kali dimuat
    fadeInOnScroll();

    // Jalankan setiap kali halaman digulir
    window.addEventListener('scroll', fadeInOnScroll);
});