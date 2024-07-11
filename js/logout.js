// Check if the user_login cookie is present
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
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