import { deleteCookie, getCookie } from './cookieUtils.js';

document.getElementById('logoutButton').addEventListener('click', function() {
    // Show SweetAlert confirmation dialog
    Swal.fire({
        title: 'Apakah Anda yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, keluar',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Remove the user login cookie
            deleteCookie('user_login');

            // Show SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'Logout Berhasil!',
                text: 'Anda telah berhasil logout.',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'login.html'; // Redirect to the login page or homepage
                }
            });
        }
    });
});

window.onload = function() {
    const userToken = getCookie('user_login');
    if (userToken) {
        document.getElementById('logoutButton').style.display = 'block';
    } else {
        // Tampilkan pesan di halaman bahwa pengguna perlu login
        const chatContainer = document.querySelector(".chat-container");
        // Opsi: sembunyikan elemen input chat
        document.querySelector('.typing-container').style.display = 'none';
    }
};
