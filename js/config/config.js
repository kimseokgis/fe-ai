import {
    setCookieWithExpireHour
} from "https://jscroot.github.io/cookie/croot.js";


// Token
export function getTokenFromAPI() {
    const tokenUrl =
        "https://asia-southeast2-gis-project-401902.cloudfunctions.net/backend-ai/login";
    fetch(tokenUrl)
        .then((response) => response.json())
        .then((tokenData) => {
            if (tokenData.token) {
                userToken = tokenData.token;
                console.log("Token dari API:", userToken);
            }
        })
        .catch((error) => console.error("Gagal mengambil token:", error));
}

export function GetDataForm() {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const data = {
        username: username,
        email: email,
        password: password,
    };
    return data
}

// Login
export function PostLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        username: username,
        password: password,
    };
    return data;
}

// alert post 
export function AlertPost(value) {
    Swal.fire({
        icon: 'success',
        title: 'Daftar Berhasil',
        text: 'Anda telah berhasil daftar!',
    });
    window.location.href = "login.html"
}

// Response Post Login
function ResponsePostLogin(response) {
    if (response && response.token) {
        console.log("Token User:", response.token);
        setCookieWithExpireHour("Login", response.token, 2);
        window.location.href = 'https://kimseokgis.advocata.me/fe-ai/chat.html';
        Swal.fire({
            icon: 'success',
            title: 'Masuk Berhasil',
            text: 'Anda telah berhasil masuk!',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Gagal Masuk',
            text: 'Username atau Kata Sandi tidak valid. Silakan coba lagi.',
        });
    }
}

export function ResponsePost(result) {
    AlertPost(result);
}

export function ResponseLogin(result) {
    ResponsePostLogin(result);
}