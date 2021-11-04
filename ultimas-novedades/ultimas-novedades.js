// Función encargada de manipular los elementos del DOM y mostrar los proyectos
function addWords(params = {}) {
  // Primero, obtengo el template y el contenedor padre
  const templateEl = document.querySelector("#project-item-template");
  const contenedorEl = document.querySelector(".novedades-content");

  // Empiezo a modificar los elementos del template: Agrego la imagen
  templateEl.content
    .querySelector(".novedades-img")
    .setAttribute("src", params.imagenes);
  templateEl.content
    .querySelector(".novedades-img-dos")
    .setAttribute("src", params.imagen);

  // Agrego el nombre
  templateEl.content.querySelector(".novedades-card-title").textContent =
    params.titulo;

  // Agrego la descripción
  templateEl.content.querySelector(".novedades-card-text").textContent =
    params.descripcion;

  // Finalmente, agrego el link...
  templateEl.content.querySelector(".novedades-card-link").href = params.url;

  // Ahora, agrego el elemento creado al DOM
  const mostrar = document.importNode(templateEl.content, true);
  contenedorEl.appendChild(mostrar);
}

// Función encargada de procesar los datos
function getWords() {
  return fetch(
    "https://cdn.contentful.com/spaces/ip7fn0dyxbho/environments/master/entries?access_token=eapv_7lhVyKtpg4h20F_M2I18cwncppaG1g1hfeSsjo&content_type=novedades"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log("soy la data", data);
      const fieldsCollections = data.items.map((items) => {
        const obj = {
          titulo: items.fields.titulo,
          descripcion: items.fields.descripcion,
          url: items.fields.url,
          imagenes: items.fields.imagenes.sys.id,
          imagen: items.fields.imagen.sys.id,

          includes: data.includes.Asset,
        };

        return obj;
      });

      fieldsCollections.forEach((x) => {
        let idEncontrado = buscarAsset(x.imagenes, x.includes);
        let idEncontrados = buscarAsset(x.imagen, x.includes);

        x.imagen = "https:" + idEncontrados.fields.file.url;

        x.imagenes = "https:" + idEncontrado.fields.file.url;
      });

      return fieldsCollections;
    });
}

function buscarAsset(assetID, includes) {
  const encontrado = includes.find((inc) => {
    return inc.sys.id == assetID;
  });
  console.log("Encontrado", encontrado);
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
