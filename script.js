document.addEventListener("DOMContentLoaded", function() {
    
    // Fungsi untuk memutar musik secara otomatis (jika diizinkan browser)
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.volume = 0.6; // Mengatur volume agar tidak terlalu mengagetkan (60%)
        // Mencoba play otomatis
        let playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Autoplay was prevented.
                console.log("Autoplay dicegah oleh browser. Pengguna harus berinteraksi dengan halaman.");
            });
        }
    }

    // Fungsi untuk animasi Fade In Up saat di-scroll
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');

    const checkVisibility = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Jika elemen terlihat di layar
            if (rect.top <= windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };

    // Cek saat pertama kali dimuat
    checkVisibility();

    // Cek setiap kali halaman digulir
    window.addEventListener('scroll', checkVisibility);
});