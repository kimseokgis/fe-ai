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
// alert post 
export function AlertPost(value) {
    Swal.fire({
        icon: 'success',
        title: 'Daftar Berhasil',
        text: 'Anda telah berhasil daftar!',
    });
    window.location.href = "login.html"
}

export function ResponsePost(result) {
    AlertPost(result);
}