window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return true;
      }
      return false;
    }

    let errores = [];

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    if (email.value == "") {
      errores.push("El campo de email tiene que estar completo");
    } else if (validateEmail(email) == false) {
      errores.push("Debes ingresar un email valido");
    }

    if (password.value == "") {
      errores.push("El campo de contraseña tiene que estar completo");
    }

    if (errores.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("#errorsFront");
      password.value = "";
      ulErrores.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
