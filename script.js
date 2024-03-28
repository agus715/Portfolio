let menuIcon = document.querySelector ('#icon-menu');
let navbar = document.querySelector ('.navigation');

let sections = document.querySelectorAll ('section');
let navLinks = document.querySelectorAll ('header nav a');

// Ketika pengguna melakukan scroll, cek setiap bagian pada halaman
window.onscroll = () => {
    // Ambil semua elemen dengan kelas .section dan simpan dalam variabel sections
    sections.forEach(sec => {
        // Ambil posisi scroll vertikal
        let top = window.scrollY;
        // Ambil offset dari elemen .section dengan mengurangi 150px agar lebih awal terdeteksi
        let offset = sec.offsetTop - 150;
        // Ambil tinggi elemen .section
        let height = sec.offsetHeight;
        // Ambil ID dari elemen .section
        let id = sec.getAttribute('id');

        // Jika posisi scrollY berada di antara offset dan offset + height dari elemen .section
        if (top >= offset && top < offset + height) {
            // Hapus kelas active dari semua link navigasi
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Tambahkan kelas active pada link navigasi yang sesuai dengan elemen .section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Ketika ikon menu di-klik
menuIcon.onclick = () => {
    // Toggle kelas bx-x pada menuIcon untuk mengubah ikon menu menjadi close (X)
    menuIcon.classList.toggle('bx-x');
    // Toggle kelas active pada navbar untuk menampilkan atau menyembunyikan menu navigasi
    navbar.classList.toggle('active');
};

// Non-aktifkan Klik kanan dan shortcut Inspect Element
// Menangkap event klik kanan
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Sorry but right-click has been disabled.');
});

// Menangkap event tombol keyboard
document.addEventListener('keydown', function (e) {
    // Jika pengguna menekan tombol F12 atau tombol pintas lainnya
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
        e.preventDefault(); // Mencegah akses Inspect Element
    }
    // Jika pengguna menekan tombol lainnya
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault(); // Mencegah akses Inspect Element
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Menangkap semua tautan bahasa
    var langLinks = document.querySelectorAll('.lang-switcher');

    // Iterasi melalui setiap tautan bahasa
    langLinks.forEach(function(link) {
        // Menambahkan event listener untuk setiap tautan bahasa
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah tautan melakukan navigasi
            var lang = this.getAttribute('data-lang'); // Mendapatkan atribut data-lang

            // Panggil fungsi untuk mengganti bahasa
            changeLanguage(lang);
        });
    });
});

function changeLanguage() {
    const select = document.getElementById('languageSelect');
    const selectedLanguage = select.value;

    // Ganti path atau URL sesuai dengan struktur folder dan file bahasa yang Anda miliki
    switch (selectedLanguage) {
        case 'id':
            window.location.href = 'index.html';
            break;
        case 'en':
            window.location.href = 'index-en.html';
            break;
        // Tambahkan case untuk bahasa lain sesuai kebutuhan
        default:
            window.location.href = 'index.html'; // Redirect ke bahasa default jika tidak ada pilihan yang cocok
            break;
    }
}