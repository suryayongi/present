document.addEventListener("DOMContentLoaded", function() {
    
    const overlay = document.getElementById('welcome-overlay');
    const btnEnter = document.getElementById('btn-enter');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');
    const heartbeatMonitor = document.querySelector('.heartbeat-monitor');

    // Menangani aksi klik tombol masuk
    btnEnter.addEventListener('click', function() {
        // Hilangkan overlay
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            mainContent.style.display = 'block';
            heartbeatMonitor.style.display = 'flex';
            
            // Putar lagu Ed Sheeran
            bgMusic.volume = 0.5;
            bgMusic.play();
            
            // Panggil fungsi scroll animasi setelah konten muncul
            checkVisibility();
        }, 1000);
    });

    // Logika Animasi Scroll
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const checkVisibility = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', checkVisibility);

    // Database Resep E-Prescription
    const resepSemangat = [
        "Tarik napas pelan-pelan. Laporan asuhan keperawatannya pasti selesai kok. Aku selalu bangga sama kamu.",
        "Kalau capek, tutup dulu laptopnya dan istirahat. Kamu sudah berjuang sangat keras hari ini.",
        "Jarak kita mungkin terbentang antara Bandung dan Depok, tapi dukunganku dari sini selalu penuh buat kamu.",
        "Satu langkah lagi menuju perawat hebat. Jangan menyerah ya, kamu pasti bisa melewati rintangan ini.",
        "Tidak apa-apa kalau hari ini terasa berat. Ingat kalau ada aku yang selalu mendukungmu dari jauh.",
        "Melihatmu mengejar cita-cita adalah hal yang luar biasa. Semangat terus, kesayanganku."
    ];

    // Logika Tombol Resep
    const btnResep = document.getElementById('btn-resep');
    const teksPesan = document.getElementById('pesan-semangat');

    btnResep.addEventListener('click', function() {
        // Efek loading singkat agar terasa seperti sistem yang sedang memproses data
        teksPesan.innerText = "Mengambil resep...";
        btnResep.disabled = true;
        btnResep.style.opacity = "0.7";

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * resepSemangat.length);
            teksPesan.innerText = '"' + resepSemangat[randomIndex] + '"';
            
            btnResep.disabled = false;
            btnResep.style.opacity = "1";
            btnResep.innerText = "Minta Resep Lainnya";
        }, 800);
    });
});