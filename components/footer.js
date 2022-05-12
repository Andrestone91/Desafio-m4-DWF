function addFooter(ele) {
  const footer = document.createElement("div");
  footer.innerHTML = `    
  <footer class="footer">
  <img src="./images/Andrestone.png" class="footer-img" />
  <div class="footer__contenedor-redes">
    <a
      class="footer__social"
      href="https://www.instagram.com/andre_frias_/"
    >
      <p class="footer__text-social">Instagram</p>
      <img src="./images/instagram.svg" class="footer__img-social" />
    </a>
    <a
      class="footer__social"
      href="https://www.linkedin.com/in/andres-frias-17738819b/"
    >
      <p class="footer__text-social">Linkedin</p>
      <img src="./images/in.svg" class="footer__img-social" />
    </a>
    <a class="footer__social" href="https://github.com/Andrestone91">
      <p class="footer__text-social">Github</p>
      <img src="./images/git.svg" class="footer__img-social" />
    </a>
  </div>
</footer>`;
  ele.appendChild(footer);
}
