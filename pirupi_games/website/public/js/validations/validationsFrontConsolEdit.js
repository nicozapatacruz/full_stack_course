window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    let errores = [];

    const name = document.querySelector("#name");
    if (name.value == "") {
      errores.push("El campo de nombre tiene que estar completo");
    } else if (name.value.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres");
    }

    if (errores.length > 0) {
      e.preventDefault();

      let ulErrores = document.querySelector("#errorsFront");
      ulErrores.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
