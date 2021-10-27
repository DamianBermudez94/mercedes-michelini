function enviarFormulario() {
  const $form = document.querySelector("#form");
  console.log("Hola", $form);
  const $buttonEnviar = document.querySelector("#enviar-mail");
  $form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonEnviar.setAttribute(
      "href",
      `mailto:bermudezdamian7@gmail.com?subject= Nombre:${form.get(
        "name"
      )} Email:${form.get("mail")} Telefono:${form.get(
        "phone"
      )} Asunto:${form.get("asunto")}&body=${form.get("message")} `
    );
    $buttonEnviar.click();
  }
}

function main() {
  enviarFormulario();
}
main();
