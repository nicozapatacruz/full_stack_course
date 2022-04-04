window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return true;
      }
      return false;
    }

    function CheckPassword(password) {
      const condition = /^[A-Za-z]\w{7,14}$/;
      if (password.value.match(condition)) {
        return true;
      } else {
        return false;
      }
    }

    function checkImage(userImage) {
      if (/.*$/i.test(userImage.value)) {
        return true;
      }
      return false;
    }

    let errores = [];

    const userName = document.querySelector("#user_name");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");
    const password = document.querySelector("#password");
    const userImage = document.querySelector("#user_image");
    const confirmPassword = document.querySelector("#confirmPassword");

    if (email.value == "") {
      errores.push("El campo de email tiene que estar completo");
    } else if (validateEmail(email) == false) {
      errores.push("Debes ingresar un email valido");
    }

    if (userName.value == "") {
      errores.push("El campo de nombre tiene que estar completo");
    } else if (userName.value.length < 2) {
      errores.push("El campo de nombre debe tener al menos 2 caracteres");
    }

    if (address.value == "") {
      errores.push("El campo de dirección tiene que estar completo");
    } else if (address.value.length < 10) {
      errores.push("Debes ingresar una dirección válida");
    }

    if (userImage.value == "") {
      errores.push("Debe subir una imagen");
    } else if (checkImage(userImage) == false) {
      errores.push("La imagen deberá ser un archivo válido");
    }

    if (password.value == "") {
      errores.push("El campo de contraseña tiene que estar completo");
    } else if (address.value.length < 8) {
      errores.push("La contraseña debe tener al menos 8 caracteres");
    } else if (CheckPassword(password) == false) {
      errores.push("La contraseña debe contener letras mayúsculas, minúsculas, un número y un carácter especial");
    }

    if (confirmPassword.value == "") {
      errores.push("El campo de repetir contraseña tiene que estar completo");
    } else if (confirmPassword.value != password.value) {
      errores.push("Las constraseñas deben coincidir");
    }

    if (errores.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("#errorsFront");
      password.value = "";
      confirmPassword.value = "";
      ulErrores.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
