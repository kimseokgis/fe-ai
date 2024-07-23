// Function to get cookie by name
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
    const profilePicture = document.querySelector("#profile-picture");

    if (userLogin) {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
        profilePicture.style.display = "block";
        profilePicture.src = localStorage.getItem('profilePicture'); // Set profile picture from localStorage
    } else {
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
        profilePicture.style.display = "none";
        profilePicture.src = ""; // Clear profile picture
    }
}

// DOMContentLoaded event to set welcome message and check login status
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (username) {
        const defaultTextContainer = document.querySelector('.default-text');
        defaultTextContainer.innerHTML = `<h1>Selamat Datang, ${username}</h1>`;
    }
    checkLoginStatus();
});
