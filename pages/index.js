function componentReusables() {
  const headerEl = document.querySelector(".bienvenida__header-contenedor");
  addheader(headerEl);
  const footerEl = document.querySelector(".footer__contenedor");
  addFooter(footerEl);
  const contactEl = document.querySelector(".formulario__contenedor-input");
  addContact(contactEl);
}
function addBienvenida(contentful = {}) {
  const template = document.querySelector("#bienvenida__template");
  const contenedor = document.querySelector(".bienvenida__contenedor");

  template.content.querySelector(".bienvenida__texto-hola-y-menu").textContent =
    contentful.textoSaludo;
  template.content.querySelector(".bienvenida__name").textContent =
    contentful.textoNombre;

  var clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

function getContentFulDataBien() {
  return fetch(
    "https://cdn.contentful.com/spaces/xeucyxm6wz1e/environments/master/entries?access_token=jJRyGB487G4TV1ldoop7KK45O7LbGdHhAUs16qWYmT8&content_type=bienvendia"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const fieldCollection = json.items.map((item) => {
        return {
          textoSaludo: item.fields.textoSaludo,
          textoNombre: item.fields.textoName,
        };
      });
      return fieldCollection;
    });
}
function addPresentacion(contentful = {}) {
  const template = document.querySelector("#presentacion__template");
  const contenedor = document.querySelector(".presentacion__contenedor");

  template.content.querySelector(".presentacion__title").textContent =
    contentful.titlePres;

  template.content.querySelector(".presentacion__texto").textContent =
    contentful.textoPres;
  template.content.querySelector(".presentacion__imagen").src =
    "https://" + contentful.image;

  var clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

function getContentFulDataPres() {
  return fetch(
    "https://cdn.contentful.com/spaces/xeucyxm6wz1e/environments/master/entries?access_token=jJRyGB487G4TV1ldoop7KK45O7LbGdHhAUs16qWYmT8&content_type=presentacion"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const fieldCollection = json.items.map((item) => {
        const imgId = item.fields.presentacionImg.sys.id;
        const imagen = getImg(imgId, json);
        const linkImg = imagen.fields.file.url;
        return {
          titlePres: item.fields.titulo,
          textoPres: item.fields.presentacion,
          image: linkImg,
        };
      });
      return fieldCollection;
    });
}
function addServices(contentFul = {}) {
  const template = document.querySelector("#servicios__template");
  const contenedor = document.querySelector(".servicios__contenedor");

  template.content.querySelector(".sevicios__subtitulo").textContent =
    contentFul.titleServices;
  template.content.querySelector(".servicios__texto").textContent =
    contentFul.textServices;
  template.content.querySelector(".servicios__imagen").src =
    "https://" + contentFul.image;

  var clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}
function getContentFulDataSer() {
  return fetch(
    "https://cdn.contentful.com/spaces/xeucyxm6wz1e/environments/master/entries?access_token=jJRyGB487G4TV1ldoop7KK45O7LbGdHhAUs16qWYmT8&content_type=servicios"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      const fieldCollection = json.items.map((item) => {
        const imgId = item.fields.servicesImg.sys.id;
        const imagen = getImg(imgId, json);
        const linkImg = imagen.fields.file.url;
        return {
          titleServices: item.fields.titleServices,
          textServices: item.fields.textServices,
          image: linkImg,
        };
      });
      return fieldCollection;
    });
}
function getImg(id, json) {
  const img = json.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return img;
}
function main() {
  componentReusables();
  getContentFulDataBien().then((res) => {
    for (const bienvenida of res) {
      addBienvenida(bienvenida);
    }
  });
  getContentFulDataPres().then((res) => {
    for (const presentacion of res) {
      addPresentacion(presentacion);
    }
  });
  getContentFulDataSer().then((res) => {
    for (const services of res.reverse()) {
      addServices(services);
    }
  });
}
main();
