import { deleteCookie, getCookie } from './cookieUtils.js';

document.getElementById('logoutButton').addEventListener('click', function () {
    Swal.fire({
        title: 'Apakah Anda yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            // Remove the user login cookie
            deleteCookie('user_login');

            Swal.fire({
                icon: 'success',
                title: 'Logout Berhasil!',
                text: 'Anda telah berhasil logout.',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('username'); // Tambahkan ini untuk menghapus localStorage
                    window.location.href = 'chat.html'; // Redirect to the login page or homepage
                }
            });
        }
    });
});

window.onload = function () {
    const userToken = getCookie('user_login');
    if (userToken) {
        document.getElementById('logoutButton').style.display = 'block';
        const username = localStorage.getItem('username');
        if (username) {
            const defaultTextContainer = document.querySelector('.default-text');
            defaultTextContainer.innerHTML = `<h1>Selamat Datang, ${username}</h1>`;
        }
    } else {
        // Tampilkan pesan di halaman bahwa pengguna perlu login
        const chatContainer = document.querySelector(".chat-container");
        // Opsi: sembunyikan elemen input chat
        document.querySelector('.typing-container').style.display = 'none';
        document.querySelector('.profileLogo').style.display = 'none';

        const defaultTextContainer = document.querySelector('.default-text');
        defaultTextContainer.innerHTML = `<h1>Seterah Bot</h1><p>Selamat Datang di Sehat Sejahtera ChatBot</p>`;
    }
};
