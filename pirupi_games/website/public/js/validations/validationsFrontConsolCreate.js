window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    function checkImage(productImage) {
      if (/.*$/i.test(productImage.value)) {
        return true;
      }
      return false;
    }

    let errores = [];

    const name = document.querySelector("#name");
    const consoleImage = document.querySelector("#consol_image");

    if (name.value == "") {
      errores.push("El campo de nombre tiene que estar completo");
    } else if (name.value.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres");
    }

    if (consoleImage.value == "") {
      errores.push("Debe subir una imagen");
    } else if (checkImage(consoleImage) == false) {
      errores.push("La imagen deberá ser un archivo válido");
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
