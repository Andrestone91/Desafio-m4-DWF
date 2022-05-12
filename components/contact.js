function addContact(ele) {
  const contacto = document.createElement("div");
  contacto.innerHTML = `  <form class="form">
    <label for="nombre">
      <p class="input-text">NOMBRE</p>
      <input class="input-caja" type="text" id="nombre" />
    </label>
    <label for="mail">
      <p class="input-text">EMAIL</p>
      <input class="input-caja" type="email" id="mail" />
    </label>
    <label for="mensaje">
      <p class="input-text">Mensaje</p>
      <textarea class="input-caja textarea" id="mensaje"></textarea>
    </label>
    <button class="button">Enviar</button>
  </form>`;

  ele.appendChild(contacto);

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
