// Función encargada de manipular los elementos del DOM y mostrar los proyectos
function addWords(params = {}) {
  // Primero, obtengo el template y el contenedor padre
  const templateEl = document.querySelector("#project-item-template");
  const contenedorEl = document.querySelector(".alquiler-content");
  console.log("soy el template", templateEl);
  console.log("soy el contenedor", contenedorEl);

  // Empiezo a modificar los elementos del template: Agrego la imagen
  templateEl.content
    .querySelector(".alquiler-img")
    .setAttribute("src", params.imagen);
  templateEl.content
    .querySelector(".alquiler-img-dos")
    .setAttribute("src", params.imagenes);

  // Agrego el nombre
  templateEl.content.querySelector(".alquiler-card-title").textContent =
    params.titulo;

  // Agrego la descripción
  templateEl.content.querySelector(".alquiler-card-text").textContent =
    params.descripcion;

  // Finalmente, agrego el link...
  templateEl.content.querySelector(".portfolio-card-link").href = params.url;

  // Ahora, agrego el elemento creado al DOM
  const mostrar = document.importNode(templateEl.content, true);
  contenedorEl.appendChild(mostrar);
}

// Función encargada de procesar los datos
function getWords() {
  return fetch(
    "https://cdn.contentful.com/spaces/wpnvcqocp561/environments/master/entries?access_token=WhXH2a8g41imwqtIhEOitV1f5CKzWtOApRefsya0R3E&content_type=alquiler"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollections = data.items.map((item) => {
        const obj = {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
          imagen: item.fields.imagen.sys.id,
          imagenes: item.fields.imagenes.sys.id,

          includes: data.includes.Asset,
        };

        return obj;
      });

      fieldsCollections.forEach((x) => {
        let idEncontrado = buscarAsset(x.imagen, x.includes);
        let idEncontrados = buscarAsset(x.imagenes, x.includes);

        console.log("Holaaa", idEncontrados);
        x.imagenes = "https:" + idEncontrados.fields.file.url;

        x.imagen = "https:" + idEncontrado.fields.file.url;
      });

      return fieldsCollections;
    });
}

function buscarAsset(assetID, includes) {
  const encontrado = includes.find((inc) => {
    return inc.sys.id == assetID;
  });

  return encontrado;
}
// Función principal
function main() {
  getWords().then((words) => {
    for (const w of words) {
      addWords(w);
    }
    menu();
  });
}

// EJECUCIÓN
main();
