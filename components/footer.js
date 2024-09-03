function footer(foot) {
  const footer = document.createElement("div");
  footer.innerHTML = `<div class="contenedor-div">
        <a href="index.html#probando"><img class="logo-footer" src="./footer-images/logo.png" alt=""></a>
        <div class="contendor-apartados">
            <a href="index.html#probando"><img href="#probando" class="imagenes" class="home-footer" src="./footer-images/home.png" alt=""></a>
            <a href="index.html#servicios"><img class="imagenes" class="services-footer" src="./footer-images/servicios.png" alt=""></a>
            <a href="contacto.html"><img class="imagenes" class="contacts-footer" src="./footer-images/contacto.png" alt=""></a>
        </div>
        <div class="contendor-redes">
           <a href="https://www.linkedin.com/jobs?src=go-pa&trk=sem-ga_campid.18853522261_asid.146084015209_crid.633923221414_kw.linkedin_d.c_tid.kwd-296170574619_n.g_mt.e_geo.1012872&mcid=6994434350142418944&cid=&gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ijTjcgrNavW1nwq5zOBQGhO_EH4P8S0mA_UPHF6qtmHKj8GT53xmp5BoCa6kQAvD_BwE&gclsrc=aw.ds"><img class="imagenes-redes" class="linkedin-footer" src="./footer-images/linkedin.png" alt=""></a>
           <a href="https://github.com"><img class="imagenes-redes" class="git-footer" src="./footer-images/git.png" alt=""></a>
           <a href="https://x.com"><img class="imagenes-redes" class="twitter-footer" src="./footer-images/twitter.png" alt=""></a>
        </div>
        <a class="copyright" href="https://apx.school">©2022 - https://apx.school</a>
    </div>`;
  foot.appendChild(footer);
}
