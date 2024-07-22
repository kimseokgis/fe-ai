// Select the form element
const form = document.getElementById('formlogin');

// Add event listener to form submit
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send POST request to API
        const response = await axios.post('https://asia-southeast2-gis-project-401902.cloudfunctions.net/backend-ai/login', {
            username,
            password
        });

        // Handle successful response
        const { status, token, message } = response.data;
        if (status) {
            // Set cookie with token
            document.cookie = `user_login=${token}; path=/`;

            // Set login flag in local storage
            localStorage.setItem('isLoggedIn', 'true');

            // Show SweetAlert success message with OK button
            await Swal.fire({
                icon: 'success',
                title: 'Login Berhasil!',
                text: message,
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'chat.html';
                }
            });
        } else {
            await Swal.fire({
                icon: 'error',
                title: 'Login Gagal!',
                text: message
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        await Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Terjadi kesalahan saat login. Silakan coba lagi nanti.'
        });
    }
});

// Show Password Function
const showPassword = document.getElementById('showPassword');
const passwordField = document.getElementById('password');
showPassword.addEventListener('change', function () {
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});