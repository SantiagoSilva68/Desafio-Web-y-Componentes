// function main() {
//   const headerElement = document.querySelector(".header");
//   const footerElement = document.querySelector(".contenedor-footer");
//   const portfolio = document.querySelector(".contenedor-trabajos");
//   cards(portfolio);
//   header(headerElement);
//   footer(footerElement);

//   function fetchdata() {
//     const promesa = fetch(
//       "https://cdn.contentful.com/spaces/77w6vbvjdr3k/environments/master/entries?access_token=XgAEigsoStxTOh4hysOk0A6zI5flOdTMXuq021ryxrU"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const items = data.items;
//         items.forEach((item) => {
//           //bienvenida

//           const tituloBienvenida = document.querySelector(".title-bienvenida");
//           const imagenBienvenida = document.querySelector(".logo-cohete");
//           const titulo =
//             item.fields.tituloBienvenida.content[0].content[0].value;

//           const assets = data.includes.Asset;
//           const imagenCohete = assets[2].fields.file.url;
//           tituloBienvenida.textContent = titulo;
//           imagenBienvenida.src = imagenCohete;

//           //presentacion
//           const fotoBienvenida = document.querySelector(".ragnar");
//           const nombreBienvenida = document.querySelector(".nombre");
//           const descripcionBienvenida = document.querySelector(".descripcion");
//           const foto = assets[1].fields.file.url;
//           const soySanti =
//             item.fields.presentacionTitulo.content[0].content[0].value;
//           const descrip = item.fields.presentacionDescripcion;
//           nombreBienvenida.textContent = soySanti;
//           descripcionBienvenida.textContent = descrip;
//           fotoBienvenida.src = foto;

//           //cards

//           const fotoCardPrimera = document.querySelector(
//             ".imagen-primera-card"
//           );
//           const nombreCardPrimera = document.querySelector(
//             ".servicio-primera-card"
//           );
//           const descripCardPrimera = document.querySelector(
//             ".descrip-primera-card"
//           );

//           const fotoCardSegunda = document.querySelector(
//             ".imagen-segunda-card"
//           );
//           const nombreCardSegunda = document.querySelector(
//             ".servicio-segunda-card"
//           );
//           const descripCardSegunda = document.querySelector(
//             ".descrip-segunda-card"
//           );

//           const fotoCardTercera = document.querySelector(
//             ".imagen-tercera-card"
//           );
//           const nombreCardTercera = document.querySelector(
//             ".servicio-tercera-card"
//           );
//           const descripCardTercera = document.querySelector(
//             ".descrip-tercera-card"
//           );
//           const assets2 = data.includes.Asset;
//           const imagen1 = assets2[4].fields.file.url;
//           const imagen2 = assets2[5].fields.file.url;
//           const imagen3 = assets2[0].fields.file.url;
//           const tituloPrimeraCard = item.fields.portfolioTituloDescripcion;
//           const tituloSegundaCard = item.fields.portfolioTituloDescripcion2;
//           const tituloTerceraCard = item.fields.portfolioTituloDescripcion3;
//           const descripcionPrimeraCard = item.fields.portfolioDescripcion;
//           const descripcionSegundaCard =
//             item.fields.portfolioDescripcion3.content[0].content[0].value;
//           const descripcionTerceraCard =
//             item.fields.portfolioDescripcionn.content[0].content[0].value;
//           nombreCardPrimera.textContent = tituloPrimeraCard;
//           descripCardPrimera.textContent = descripcionPrimeraCard;
//           nombreCardSegunda.textContent = tituloSegundaCard;
//           descripCardSegunda.textContent = descripcionSegundaCard;
//           nombreCardTercera.textContent = tituloTerceraCard;
//           descripCardTercera.textContent = descripcionTerceraCard;
//           fotoCardPrimera.src = imagen1;
//           fotoCardSegunda.src = imagen2;
//           fotoCardTercera.src = imagen3;
//           console.log(assets2);
//         });
//       });
//   }
//   document.addEventListener("DOMContentLoaded", function () {
//     fetchdata();
//   });
// }
// main();
function main() {
  const headerElement = document.querySelector(".header");
  const footerElement = document.querySelector(".contenedor-footer");
  const portfolio = document.querySelector(".contenedor-trabajos");
  cards(portfolio);
  header(headerElement);
  footer(footerElement);

  function fetchdata() {
    const promesa = fetch(
      "https://cdn.contentful.com/spaces/77w6vbvjdr3k/environments/master/entries?access_token=XgAEigsoStxTOh4hysOk0A6zI5flOdTMXuq021ryxrU"
    )
      .then((response) => response.json())
      .then((data) => {
        const items = data.items;
        items.forEach((item) => {
          const tituloBienvenida = document.querySelector(".title-bienvenida");
          const imagenBienvenida = document.querySelector(".logo-cohete");
          const titulo =
            item.fields.tituloBienvenida.content[0].content[0].value;

          const assets = data.includes.Asset;
          const imagenCohete = assets[2].fields.file.url;
          tituloBienvenida.textContent = titulo;
          imagenBienvenida.src = imagenCohete;

          //presentacion
          const fotoBienvenida = document.querySelector(".ragnar");
          const nombreBienvenida = document.querySelector(".nombre");
          const descripcionBienvenida = document.querySelector(".descripcion");
          const foto = assets[1].fields.file.url;
          const soySanti =
            item.fields.presentacionTitulo.content[0].content[0].value;
          const descrip = item.fields.presentacionDescripcion;
          nombreBienvenida.textContent = soySanti;
          descripcionBienvenida.textContent = descrip;
          fotoBienvenida.src = foto;
        });
      });
  }

  function fetchdataCards() {
    const promesa = fetch(
      "https://cdn.contentful.com/spaces/77w6vbvjdr3k/environments/master/entries?access_token=XgAEigsoStxTOh4hysOk0A6zI5flOdTMXuq021ryxrU"
    )
      .then((response) => response.json())
      .then((data) => {
        const items = data.items;
        items.forEach((item) => {
          const fotoCardPrimera = document.querySelector(
            ".imagen-primera-card"
          );
          const nombreCardPrimera = document.querySelector(
            ".servicio-primera-card"
          );
          const descripCardPrimera = document.querySelector(
            ".descrip-primera-card"
          );

          const fotoCardSegunda = document.querySelector(
            ".imagen-segunda-card"
          );
          const nombreCardSegunda = document.querySelector(
            ".servicio-segunda-card"
          );
          const descripCardSegunda = document.querySelector(
            ".descrip-segunda-card"
          );

          const fotoCardTercera = document.querySelector(
            ".imagen-tercera-card"
          );
          const nombreCardTercera = document.querySelector(
            ".servicio-tercera-card"
          );
          const descripCardTercera = document.querySelector(
            ".descrip-tercera-card"
          );
          const assets2 = data.includes.Asset;
          const imagen1 = assets2[4].fields.file.url;
          const imagen2 = assets2[5].fields.file.url;
          const imagen3 = assets2[0].fields.file.url;
          const tituloPrimeraCard = item.fields.portfolioTituloDescripcion;
          const tituloSegundaCard = item.fields.portfolioTituloDescripcion2;
          const tituloTerceraCard = item.fields.portfolioTituloDescripcion3;
          const descripcionPrimeraCard = item.fields.portfolioDescripcion;
          const descripcionSegundaCard =
            item.fields.portfolioDescripcion3.content[0].content[0].value;
          const descripcionTerceraCard =
            item.fields.portfolioDescripcionn.content[0].content[0].value;
          nombreCardPrimera.textContent = tituloPrimeraCard;
          descripCardPrimera.textContent = descripcionPrimeraCard;
          nombreCardSegunda.textContent = tituloSegundaCard;
          descripCardSegunda.textContent = descripcionSegundaCard;
          nombreCardTercera.textContent = tituloTerceraCard;
          descripCardTercera.textContent = descripcionTerceraCard;
          fotoCardPrimera.src = imagen1;
          fotoCardSegunda.src = imagen2;
          fotoCardTercera.src = imagen3;
        });
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fetchdata();
    fetchdataCards();
  });
}
main();
