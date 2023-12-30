/*Este evento se encarga de enviar el formulario si se cumple una serie de parametros*/

// document.getElementById('miFormulario').addEventListener('submit', function (event) {
document.getElementById('button').addEventListener('click', function (event) {
  event.preventDefault();
  let currentUserInput = document.querySelector('.user-input').value;
  let currentPasswordInput = document.querySelector('.password-input').value;
  let user = "capAmerica";
  let password = 123456;
  let correctUser = false;
  let validationErrorUser = document.querySelector('.validation-error-user');
  let validationErrorPassword = document.querySelector('.validation-error-password');

  if (user === currentUserInput) {
    correctUser = true;
    validationErrorUser.style.transform = 'translateY(-25px)'; //Desaparecer cuando esta correcto
    validationErrorUser.style.opacity = '0'; //Desaparecer cuando esta correcto
    // Si el nombre de usuario es correcto se le da el valor de "true" a correctUser para ser usador despues
  } else {
    // Si el nombre de usuario es incorrecto una etiqueta <span> escondida aparecerá indicando que la contraseña 
    // es incorrecta y no se enviara el formulario
    validationErrorUser.style.transform = 'translateY(0px)';
    validationErrorUser.style.opacity = '1';
    // event.preventDefault(); Innecesario

  }

  if (password != currentPasswordInput && correctUser === true) {
    // Si el nombre de usuario es correcto pero la contraseña no es correcta, una etiqueta escondida <span> 
    // apareca desde el <input> indicando que ingrese la correcta.
    validationErrorPassword.style.transform = 'translateY(0px)';
    validationErrorPassword.style.opacity = '1';
    // event.preventDefault(); Innecesario
  } else if (password == currentPasswordInput && correctUser == true) { //Indicador de que el usuario se loggeo correctamente
    validationErrorPassword.style.transform = 'translateY(-25px)';
    validationErrorPassword.style.opacity = '0';
    alert('Bienvenido TurboBimbolo415!')
  }
});