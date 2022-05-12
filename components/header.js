function addheader(ele) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = ` <div class="header-contenedor">
  <a href="../index.html">
    <img src="../images/Andrestone.png" alt="" class="header-imagen" />
  </a>
  <div></div>
  <div></div>
  <a href="../portfolio.html" class="text-nav">Portfolio</a>
  <a href="../servicios.html" class="text-nav">Servicios</a>
  <a href="../contacto.html" class="text-nav">Contacto</a>

  <button class="abre-ventana"></button>
  <div class="ventana">
    <div class="ventana__contenedor-boton">
      <button class="ventana__cierra-ventana"></button>
    </div>
    <div class="ventana__contenido">
      <a class="ventana__text" href="../portfolio.html">Portfolio</a>
      <a class="ventana__text" href="../servicios.html">Servicios</a>
      <a class="ventana__text" href="../contacto.html">Contacto</a>

      <img class="ventana__cruz" src="../images/cruz.svg" alt="" />
    </div>
  </div>
  <img class="burger" src="../images/burger.png" alt="" />
</div>`;

  ele.appendChild(headerEl);

  const ventanaEl = document.querySelector(".ventana");
  const botonAbreVentana = document.querySelector(".abre-ventana");

  const botonCierraVentana = document.querySelector(".ventana__cierra-ventana");

  botonAbreVentana.addEventListener("click", () => {
    ventanaEl.style.display = "block";
  });
  botonCierraVentana.addEventListener("click", () => {
    ventanaEl.style.display = "none";
  });
}
