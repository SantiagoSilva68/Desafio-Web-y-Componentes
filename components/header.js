function header(head) {
  const header = document.createElement("div");
  header.innerHTML = ` 
  <header>
    <a href="https://santiagosilva68.github.io/Desafio-Web-y-Componentes/index.html"><img class="logo" src="./footer-images/logo.png" alt=""></a>
    <div class="menu-icon" id="menuIcon">&#9776;</div>
<nav class="nav-large">
  <ul>
    <li class="li--menu--largo">
      <a href="https://santiagosilva68.github.io/Desafio-Web-y-Componentes/portfolio.html">Portfolio</a>
    </li>
    <li class="li--menu--largo">
      <a href="#servicios">Servicios</a>
    </li>
    <li class="li--menu--largo">
      <a href="https://santiagosilva68.github.io/Desafio-Web-y-Componentes/contacto.html">Contacto</a>
    </li>
  </ul>
</nav>

  </header>
  
  <nav class="full-screen-menu" id="fullScreenMenu">
    <div class="close-icon" id="closeIcon">&times;</div>
    <ul>
      <a href="https://santiagosilva68.github.io/Desafio-Web-y-Componentes/portfolio.html"><li class="li--menu--corto">Portfolio</li></a>
      <li class="li--menu--corto"><a href="/index.html#servicios" id="serviciosLink">Servicios</a></li>
      <a href="https://santiagosilva68.github.io/Desafio-Web-y-Componentes/contacto.html"><li class="li--menu--corto">Contacto</li></a>
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
