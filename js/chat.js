
const form = document.getElementById("chat")
// Function to check if a cookie exists
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
    }
}

// Run the check on page load
document.addEventListener("DOMContentLoaded", checkLoginStatus);

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get value from chat-input
    const messages = GetValue("chat-input");

    try {
        // Send POST request using Axios
        const response = await axios.post(
            `https://asia-southeast2-gis-project-401902.cloudfunctions.net/backend-ai/chatRegexp?key=${messages}`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'login': getCookie('user_login') // Assuming getCookie function retrieves the 'user_login' cookie
                },
                withCredentials: true // Ensures cookies are included in the request
            }
        );

        // Handle successful response
        console.log('Response:', response.data);
    } catch (error) {
        // Handle error
        console.error('There has been a problem with your Axios operation:', error);
        // You can add specific error handling here
    }
});



function GetValue(id) {
    value = document.getElementById(id).value;
    return value
}