function componentReusables() {
  const headerEl = document.querySelector(".contenedor__header");
  addheader(headerEl);
  const footerEl = document.querySelector(".contenedor__footer");
  addFooter(footerEl);

  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = formEl.querySelector("#nombre").value;
    const email = document.querySelector("#mail").value;
    const message = document.querySelector("#mensaje").value;

    const data = {
      to: "andrestone9191@gmail.com.com",
      message: `Nombre: ${name}, Email: ${email}, Mensaje: ${message}.`,
    };
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log(error);
    });
    event.target["nombre"].value = "";
    event.target["mail"].value = "";
    event.target["mensaje"].value = "";
    alert("Mensaje enviado correctamente");
  });
}

componentReusables();
