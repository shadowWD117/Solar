let clickCount = 0; 
let clickCountb = 0; // Variabel untuk menghitung jumlah klik

// Ambil elemen bumi dan bumket dari DOM
var bumi = document.getElementById('bumi');
var bumket = document.getElementById('bumket');
var bulan = document.getElementById('bulan');
var bulket = document.getElementById('bulket');

// Periksa apakah elemen ditemukan sebelum menambahkan event listener
if (bumi && bumket) {
    bumi.addEventListener('click', function () {
        clickCount++; // Tambahkan jumlah klik

        if (clickCount === 1) {
            bumket.style.display = "block";
            bumket.style.animation = "buman 1s ease forwards";
        } else if (clickCount === 2) {
            clickCount = 0;
            bumket.style.animation = "bumano 1s ease forwards";

            // Sembunyikan elemen setelah animasi selesai
            bumket.addEventListener('animationend', function () {
                if (clickCount === 0) bumket.style.display = "none";
            }, { once: true }); // Jalankan hanya sekali
        }
    });
}

if (bulan && bulket) {
    bulan.addEventListener('click', function () {
        clickCountb++; // Tambahkan jumlah klik

        if (clickCountb === 1) {
            bulket.style.display = "block";
            bulket.style.animation = "bumlan 1s ease forwards";
        } else if (clickCountb === 2) {
            clickCountb = 0;
            bulket.style.animation = "bumlano 1s ease forwards";

            // Sembunyikan elemen setelah animasi selesai
            bulket.addEventListener('animationend', function () {
                if (clickCountb === 0) bulket.style.display = "none";
            }, { once: true }); // Jalankan hanya sekali
        }
    });
}
