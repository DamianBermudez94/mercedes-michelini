function headertComponet(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<div class="container__header">
      <a class="container__header-title" href="./index.html" title="Mercedes Michelini"><img class="img-title" src="./img/logo.png" alt="Mercedes Michelini"></a>
      <button class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></button>
      <nav class="container__menu">
          <ul class="container__menu-link">
            <a href="index.html" class="link-menu selected">Inicio</a>
            <a href="alquileres.html" class="link-menu">Alquiler</a>
            <a href="ventas.html" class="link-menu">Venta</a>
            <a href="contacto.html" class="link-menu">Contacto</a>
          </ul>
      </nav>
     
  </div>
         `;

  el.appendChild(headerEl);
  console.log("sadasdasd", headerEl);
}

// Animacion del menu
function menu() {
  let btnMenu = document.querySelector("#btn-menu");
  let menu = document.querySelector(".container__menu");

  let activador = true;

  btnMenu.addEventListener("click", function () {
    document.querySelector("#btn-menu i").classList.toggle("fa-times");
    if (activador) {
      menu.style.left = "0";
      menu.style.transition = "0.6s";
      activador = false;
    } else {
      activador = false;
      menu.style.left = "-100%";
      menu.style.transition = "0.6s";
      activador = true;
    }
  });
  console.log("sadDasdAS", btnMenu);

  const menuLinks = document.querySelectorAll(
    '.container__menu-link a[href^="#"]'
  );
  console.log(menuLinks);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        console.log("asdsa", id);
        const menuLink = document.querySelector(
          `.container__menu-link a[href="#${id}"]`
        );
        console.log("sdafasdfdsa", menuLink);
        if (entry.isIntersecting) {
          document
            .querySelector(".container__menu-link a.selected")
            .classList.remove("selected");
          console.log("soy la entry", entry);
          menuLink.classList.add("selected");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

  menuLinks.forEach((menuLink) => {
    console.log("Holaaaa!!", menuLinks);
    menuLink.addEventListener("click", () => {
      console.log("Holaaaa perrooo!!", menuLink);
      menu.classList.remove("menu_opened");
      console.log("Soy el menu", menu);
    });

    const hash = menuLink.getAttribute("href");
    console.log("soy el hash", hash);
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });
}
