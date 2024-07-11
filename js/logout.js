// logout.js
import { deleteCookie, getCookie } from './cookieUtils.js';

document.getElementById('logoutButton').addEventListener('click', function() {
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
});

// window.onload = function() {
//     const userToken = getCookie('user_login');
//     if (userToken) {
//         document.getElementById('logoutButton').style.display = 'block';
//     } else {
//         window.location.href = 'index.html'; // Redirect to login if no user cookie is found
//     }
// };
