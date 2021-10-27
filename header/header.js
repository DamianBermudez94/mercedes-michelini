function headertComponet(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
      <div class="container-header">
        <div class="container__contacto-header">
          <div class="box__contacto-header">
            <img class="header__img-whatsapp" src="./img/whatsapp.png" alt="Mercedes Michelini">
            <p class="header__text-whatsapp">+5492227576199</p>
          </div>
          <div class="box__contacto-header">
            <img class="header__img-correo" src="./img/simbolo-de-correo-electronico-sobre-negro.png" alt="Mercedes Michelini">
            <a href="mailto:info@mercedesmichelini.com" target="_blank">info@mercedesmichelini.com</a>
          </div>
        </div>
        <div class="container__header-menu">   
          <a class="container__header-title" href="./index.html" title="Mercedes Michelini"><img class="img-title" src="./img/logo.png" alt="Mercedes Michelini"></a>
          <button class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></button>
          <nav class="container__menu">
              <ul class="container__menu-link">
                <li class="list-menu"><a href="index.html"  class="link-menu">Inicio</a></li>
                <li class="list-menu" ><a href="alquileres.html" class="link-menu active">Alquiler</a></li>
                <li class="list-menu"><a href="ventas.html" class="link-menu">Venta</a></li>
                <li class="list-menu"><a href="contacto.html" class="link-menu">Contacto</a></li>
              </ul>
          </nav>
        </div>
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
  // Intercalar la clase Active

  /*let enlaces = document.querySelectorAll(
    ".container__menu .container__menu-link .list-menu .link-menu"
  );
  console.log("Soy el enlace", enlaces);
  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });
  console.log("Soy el enlace", enlaces);*/
}
// Efecto Scroll
function scrolTop() {
  let containerMenu = document.querySelector(".container-header");
  console.log("soy el header", containerMenu);
  // window = accedemos a toda la ventana del navegador
  //pageYOffset = devuelve el valor en pixeles del scroll
  let goTop = document.querySelector(".go-top");
  console.log("Holaa soy el buton", goTop);
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currenScrolPos = window.pageYOffset;
    // Mostrar y ocultar menu
    if (prevScrollPos > currenScrolPos) {
      containerMenu.style.top = "0";
      containerMenu.style.transition = "0.5s";
    } else {
      containerMenu.style.top = "-40px";
      containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrolPos;

    // Mostrar y ocultar estilos del menu

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
      goTop.style.right = "-100%";
    } else {
      goTop.style.right = "0";
      goTop.style.transition = "0.6s";
    }
  };

  // Boton de arriba y abajo

  goTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
