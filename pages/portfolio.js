function componentReusables() {
  const header = document.querySelector(".portfolioPage__header");
  addheader(header);
  const footer = document.querySelector(".contenedor__footer");
  addFooter(footer);
}
function addPortfolioPage(contentful = {}) {
  const template = document.querySelector("#portfolioPage__template-card");
  const contenedor = document.querySelector(".portfolioPage__container-card");

  template.content.querySelector(".portfolioPage__caja-title").textContent =
    contentful.portfolioTitle;
  template.content.querySelector(".portfolioPage__caja-pres").textContent =
    contentful.portfolioText;
  template.content.querySelector(".portfolioPage__img").src =
    "https://" + contentful.imagen;
  template.content.querySelector(".portfolio__link").href =
    contentful.portfolioLink;
  template.content.querySelector(".portfolio__link").textContent =
    contentful.portfolioLinkText;

  var clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}
function getContentFulDataPortPage() {
  return fetch(
    "https://cdn.contentful.com/spaces/xeucyxm6wz1e/environments/master/entries?access_token=jJRyGB487G4TV1ldoop7KK45O7LbGdHhAUs16qWYmT8&content_type=portfolioPage"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const fieldsCollection = json.items.map((item) => {
        const imgId = item.fields.portfoioPageImg.sys.id;
        const imagen = getImagen(imgId, json);
        const linkImg = imagen.fields.file.url;
        return {
          portfolioTitle: item.fields.portfolioTitle,
          portfolioText: item.fields.portfolioText,
          imagen: linkImg,
          portfolioLink: item.fields.portfolioPageLink,
          portfolioLinkText: item.fields.portfolioLinkText,
        };
      });
      return fieldsCollection;
    });
}
function getImagen(id, json) {
  const imagen = json.includes.Asset.find((Asset) => {
    return Asset.sys.id == id;
  });
  return imagen;
}
function main() {
  componentReusables();
  getContentFulDataPortPage().then((res) => {
    for (const portPage of res.reverse()) {
      addPortfolioPage(portPage);
    }
  });
}
main();
