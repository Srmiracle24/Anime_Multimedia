document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const menuItems = document.querySelector(".menu-items");

  menuIcon.addEventListener("click", function() {
    menuItems.classList.toggle("active");
  });
});


document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente

  // Resetear mensajes de error y éxito
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('login-success').textContent = '';

  // Validar los campos del formulario
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var isValid = true;

  if (email.trim() === '') {
    document.getElementById('email-error').textContent = 'El correo electrónico es obligatorio.';
    isValid = false;
  }

  if (password.trim() === '') {
    document.getElementById('password-error').textContent = 'La contraseña es obligatoria.';
    isValid = false;
  }

  if (isValid) {
    // Aquí puedes realizar el proceso de inicio de sesión o enviar los datos a un servidor

    // Simulando un inicio de sesión exitoso después de 1 segundo
    setTimeout(function() {
      document.getElementById('login-success').textContent = '¡Inicio de sesión exitoso! Bienvenido/a.';
    }, 1000);
  }
});
