document.getElementById('logoutButtonNavbar').addEventListener('click', function () {
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
                    localStorage.removeItem('username'); 
                    window.location.href = 'chat.html'; 
                }
            });
        }
    });
});

window.onload = function () {
    const userToken = getCookie('user_login');
    if (userToken) {
        document.getElementById('logoutButtonNavbar').style.display = 'block';
        const username = localStorage.getItem('username');
        if (username) {
            const defaultTextContainer = document.querySelector('.default-text');
        }
    } else {
        const chatContainer = document.querySelector(".chat-container");
        // Opsi: sembunyikan elemen input chat
        document.querySelector('.typing-container').style.display = 'none';
        document.querySelector('.profileLogo').style.display = 'none';

        const defaultTextContainer = document.querySelector('.default-text');
        defaultTextContainer.innerHTML = `<h1>Seterah Bot</h1><p>Selamat Datang di Sehat Sejahtera ChatBot</p>`;
    }
};
