function header(head) {
  const header = document.createElement("div");
  header.innerHTML = ` 
  <header>
    <a href="./index.html"><img class="logo" src="./footer-images/logo.png" alt=""></a>
    <div class="menu-icon" id="menuIcon">&#9776;</div>
    <nav class="nav-large">
      <ul>
        <li class="li--menu--largo"><a href="/portfolio.html">Portfolio</a></li>
        <li class="li--menu--largo"><a href="#servicios">Servicios</a></li>
        <li class="li--menu--largo"><a href="/contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <nav class="full-screen-menu" id="fullScreenMenu">
    <div class="close-icon" id="closeIcon">&times;</div>
    <ul>
      <li class="li--menu--corto"><a href="/portfolio.html">Portfolio</a></li>
      <li class="li--menu--corto"><a href="/index.html#servicios" id="serviciosLink">Servicios</a></li>
      <li class="li--menu--corto"><a href="/contacto.html">Contacto</a></li>
    </ul>
  </nav>
  `;

  head.appendChild(header);

  document.getElementById("menuIcon").addEventListener("click", function () {
    document.getElementById("fullScreenMenu").style.display = "block";
  });

  document.getElementById("closeIcon").addEventListener("click", function () {
    document.getElementById("fullScreenMenu").style.display = "none";
  });

  document
    .getElementById("serviciosLink")
    .addEventListener("click", function () {
      document.getElementById("fullScreenMenu").style.display = "none";
    });
}
