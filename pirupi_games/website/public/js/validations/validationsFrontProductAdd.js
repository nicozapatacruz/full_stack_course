window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    function checkImage(productImage) {
      if (/.*$/i.test(productImage.value)) {
        return true;
      }
      return false;
    }

    function checkNumber(number) {
      if (Number(number)) {
        return true;
      }
      return false;
    }

    let errores = [];

    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const productImage = document.querySelector("#product_image");
    const price = document.querySelector("#price");

    if (name.value == "") {
      errores.push("El campo de nombre tiene que estar completo");
    } else if (name.value.length < 5) {
      errores.push("El nombre debe tener al menos 5 caracteres");
    }

    if (description.value == "") {
      errores.push("El campo de descripción tiene que estar completo");
    } else if (description.value.length < 20) {
      errores.push("La descripción debe tener al menos 20 caracteres");
    }

    if (productImage.value == "") {
      errores.push("Debe subir una imagen");
    } else if (checkImage(productImage) == false) {
      errores.push("La imagen deberá ser un archivo válido");
    }

    if (price.value == "") {
      errores.push("Debe ingresar un precio para el producto");
    } else if (checkNumber(price.value) == false) {
      errores.push("El precio debe ser un número");
    }

    console.log(price.value > 0);

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
