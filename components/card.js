function cards(card) {
  const cards = document.createElement("div");
  cards.className = "contenedorAux";
  cards.innerHTML = `    <div class="contenedor-portfolio" id="servicios">
        <h1 class="mis">Mis<span class="servicios"> servicios</span></h1>
        <div class="contenedor-cards">
            <div class="card-primera">
                <img class="imagen-primera-card cardsimg" src="" alt="">
                <h2 class="servicio-primera-card servicioaux"></h2>
                <p class="descrip-primera-card desc"></p>
            </div>
            <div class="card-segunda">
                <img class="imagen-segunda-card cardsimg" src="" alt="">
                <h2 class="servicio-segunda-card servicioaux"></h2>
                <p class="descrip-segunda-card desc"></p>
            </div>
            <div class="card-tercera">
                <img class="imagen-tercera-card cardsimg" src="" alt="">
                <h2 class="servicio-tercera-card servicioaux"></h2>
                <p class="descrip-tercera-card desc"></p>
            </div>
        </div>
        <img class="verMas" src="./footer-images/verMas.png" alt="">
    </div>`;
  card.appendChild(cards);
}
