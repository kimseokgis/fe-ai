  // Select the form element
  const form = document.getElementById('formlogin');

  // Add event listener to form submit
  form.addEventListener('submit', async function(event) {
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

              // Show SweetAlert success message with OK button
              await Swal.fire({
                  icon: 'success',
                  title: 'Login Berhasil!',
                  text: message,
                  confirmButtonText: 'OK'
              }).then((result) => {
                  if (result.isConfirmed) {
                      // Redirect to dashboard.html
                      window.location.href = 'dashboard.html';
                  }
              });
          } else {
              // Show SweetAlert error message
              await Swal.fire({
                  icon: 'error',
                  title: 'Login Gagal!',
                  text: message
              });
          }
      } catch (error) {
          console.error('Error during login:', error);
          // Show SweetAlert error message
          await Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Terjadi kesalahan saat login. Silakan coba lagi nanti.'
          });
      }
  });