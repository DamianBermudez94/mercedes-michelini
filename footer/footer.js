function footerComponet(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = ` <div class="container__footer">
        <a class="footer-img" href="./index.html" title="Mercedes Michelini"><img class="img-title-footer" src="./img/logo.png" alt="Mercedes Michelini"></a>
        <div class="footer-text">
            <p class="title-copy">&copy; Mercedes Michelini - 2021 | Todos los derechos reservados</p>
        </div>
        
        <div class="container__contacto-footer">
                <div class="box__contacto-footer">
                    <img class="footer__img-ubicacion" src="img/marcador-de-posicion.png" alt="Mercedes Michelini">
                 
                    <p class="footer__text-ubicacion">Moreno 240, Lobos</p>

                </div>
              
                <div class="box__contacto-footer">
                    <img class="footer__img-whatsapp" src="./img/whatsapp.png" alt="Mercedes Michelini">
                  
                    <p class="footer__text-whatsapp">+549 2227576199</p>
                </div>
                <div class="box__contacto-footer">
                    <img class="footer__img-correo" src="./img/simbolo-de-correo-electronico-sobre-negro.png" alt="Mercedes Michelini">
                
                    <a href="mailto:info@mercedesmichelini.com" target="_blank">info@mercedesmichelini.com</a>
                </div>

        </div>
    </div>
           `;

  el.appendChild(footerEl);
  console.log("sadasdasd", footerEl);
}
