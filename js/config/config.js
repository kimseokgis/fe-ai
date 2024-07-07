import {
    setCookieWithExpireHour
} from "https://jscroot.github.io/cookie/croot.js";

let userToken = '';

export function getTokenFromAPI() {
    const tokenUrl = "https://asia-southeast2-gis-project-401902.cloudfunctions.net/backend-ai/login";
    return fetch(tokenUrl)
        .then(response => response.json())
        .then(tokenData => {
            if (tokenData.token) {
                userToken = tokenData.token;
                console.log("Token dari API:", userToken);
                return userToken;
            } else {
                throw new Error("Token tidak ditemukan dalam respons API");
            }
        })
        .catch(error => {
            console.error("Gagal mengambil token:", error);
            return null;
        });
}

export function GetDataForm() {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    return {
        username: username,
        email: email,
        password: password
    };
}

// Login
export function PostLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    return {
        email: email,
        password: password
    };
}

// alert post 
export function AlertPost() {
    Swal.fire({
        icon: 'success',
        title: 'Daftar Berhasil',
        text: 'Anda telah berhasil daftar!',
    });
    window.location.href = "login.html";
}

// Response Post Login
function ResponsePostLogin(response) {
    if (response && response.token) {
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
            text: 'Email atau Kata Sandi tidak valid. Silakan coba lagi.',
        });
    }
}

export function ResponsePost(result) {
    AlertPost();
}

export function ResponseLogin(result) {
    ResponsePostLogin(result);
}
