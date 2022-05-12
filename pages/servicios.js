function componentReusables() {
  const header = document.querySelector(".serviciosPage__header");
  addheader(header);
  const footer = document.querySelector(".contenedor__footer");
  addFooter(footer);
}
function addServiciosPage(contentful = {}) {
  const template = document.querySelector("#serviciosPage__template-card");
  const container = document.querySelector(".serviciosPage__container-card");

  template.content.querySelector(".serviciosPage__caja-title").textContent =
    contentful.servicesTitle;
  template.content.querySelector(".serviciosPage__caja-pres").textContent =
    contentful.servicesPagePres;
  template.content.querySelector(".serviciosPage__img").src =
    "https://" + contentful.image;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getContentFulDataSerPage() {
  return fetch(
    "https://cdn.contentful.com/spaces/xeucyxm6wz1e/environments/master/entries?access_token=jJRyGB487G4TV1ldoop7KK45O7LbGdHhAUs16qWYmT8&content_type=serviciosPage"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const fieldsCollection = json.items.map((item) => {
        const imagenId = item.fields.sevicesPageImg.sys.id;
        const image = getImg(imagenId, json);
        const linkImg = image.fields.file.url;
        return {
          servicesTitle: item.fields.servicesTitle,
          servicesPagePres: item.fields.servicesPagePres,
          image: linkImg,
        };
      });
      return fieldsCollection;
    });
}
function getImg(id, json) {
  const imagen = json.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return imagen;
}
function main() {
  componentReusables();

  getContentFulDataSerPage().then((res) => {
    for (const SerPage of res.reverse()) {
      addServiciosPage(SerPage);
    }
  });
}
main();
