function main() {
  const headerPortfolio = document.querySelector(".contenedor-header");
  const footerPortfolio = document.querySelector(
    ".contenedor-footer-portfolio"
  );
  header(headerPortfolio);
  footer(footerPortfolio);
  const form = document.querySelector(".myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("mensaje").value;

    const data = {
      to: email,
      message: `Nombre: ${name}\nMensaje: ${message}`,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email enviado exitosamente!");
          form.reset();
        } else {
          alert("Error al enviar el email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un problema al enviar el email.");
      });
  });
}
main();
