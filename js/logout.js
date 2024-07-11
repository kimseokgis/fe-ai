function getCookie(user_login) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${user_login}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

window.onload = function() {
    const userToken = getCookie('user_login');
    if (userToken) {
        document.getElementById('logoutButton').style.display = 'block';
    } else {
        window.location.href = 'index.html'; // Redirect to login if no user cookie is found
    }
};

document.getElementById('logoutButton').addEventListener('click', function() {
    // Remove the user login cookie
    document.cookie = 'user_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Show SweetAlert success message
    Swal.fire({
        icon: 'success',
        title: 'Logout Berhasil!',
        text: 'Anda telah berhasil logout.',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html'; // Redirect to the login page or homepage
        }
    });
});