// Check Cookies
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Function to toggle button visibility based on login status
function checkLoginStatus() {
    const userLogin = getCookie("user_login");
    const loginButton = document.querySelector(".sidebar-buttons .sidebar-btn");
    const logoutButton = document.querySelector("#logoutButton");

    if (userLogin) {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
        profilePicture.style.display = "none";
        profilePicture.src = ""; // Clear profile picture
    }
}

// chat.js
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (username) {
        const defaultTextContainer = document.querySelector('.default-text');
        defaultTextContainer.innerHTML = `<h1>Selamat Datang, ${username}</h1>`;
    }
    checkLoginStatus();
});

document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();
});