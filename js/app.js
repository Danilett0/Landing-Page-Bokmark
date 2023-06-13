window.addEventListener("load", function () {
  new WOW().init();

  const lon = document.getElementById("sub-london");
  const pari = document.getElementById("sub-paris");
  const tok = document.getElementById("sub-tokio");

  const plondon = document.getElementById("london");
  const pparis = document.getElementById("paris");
  const ptokio = document.getElementById("tokio");

  const pestaña1 = document.getElementById("section1");
  const pestaña2 = document.getElementById("section2");
  const pestaña3 = document.getElementById("section3");

  const bloque1 = document.getElementById("panel1");
  const bloque2 = document.getElementById("panel2");
  const bloque3 = document.getElementById("panel3");

  const magia = document.getElementById("accion");
  const magia2 = document.getElementById("accion2");

  const capa = document.getElementById("desplegable");

  magia.style.width = "40px";
  magia2.style.width = "0px";

  capa.style.width = "0vw";
  capa.style.height = "100vh";
  capa.style.top = "0";
  capa.style.left = "-1000px";
  capa.style.position = "fixed";

  magia.addEventListener("click", function () {
    magia.style.width = "0px";
    magia2.style.width = "25px";
    magia.style.transition = ".6s";

    if (capa.style.left == "-1000px") {
      capa.style.width = "100vw";
      capa.style.top = "0px";
      capa.style.left = "0px";
      capa.style.transition = ".7s";
    } else {
      capa.style.width = "0%";
      capa.style.top = "0";
      capa.style.left = "-1000px";
    }
  });

  magia2.addEventListener("click", function () {
    magia.style.width = "40px";
    magia2.style.width = "0px";
    magia.style.transition = ".6s";

    if (capa.style.left == "-1000px") {
      capa.style.width = "100vw";
      capa.style.top = "0px";
      capa.style.left = "0px";
      capa.style.transition = ".7s";
    } else {
      capa.style.width = "0%";
      capa.style.top = "0";
      capa.style.left = "-1000px";
    }
  });

  lon.style.display = "flex";
  pari.style.display = "none";
  tok.style.display = "none";

  bloque1.style.display = "none";
  bloque2.style.display = "none";
  bloque3.style.display = "none";

  plondon.addEventListener("click", function () {
    lon.style.display = "flex";
    pari.style.display = "none";
    tok.style.display = "none";
  });
  pparis.addEventListener("click", function () {
    lon.style.display = "none";
    pari.style.display = "flex";
    tok.style.display = "none";
  });
  ptokio.addEventListener("click", function () {
    lon.style.display = "none";
    pari.style.display = "none";
    tok.style.display = "flex";
  });

  pestaña1.addEventListener("click", function () {
    if (bloque1.style.display == "none") {
      bloque1.style.display = "flex";
    } else {
      bloque1.style.display = "none";
    }
  });
  pestaña2.addEventListener("click", function () {
    if (bloque2.style.display == "none") {
      bloque2.style.display = "flex";
    } else {
      bloque2.style.display = "none";
    }
  });
  pestaña3.addEventListener("click", function () {
    if (bloque3.style.display == "none") {
      bloque3.style.display = "flex";
    } else {
      bloque3.style.display = "none";
    }
  });

  window.addEventListener("resize", function () {
    const tamaño = document.documentElement.clientWidth;

    if (tamaño > 830) {
      capa.style.display = "none";
    }
    if (tamaño < 830) {
      capa.style.display = "flex";
    }
  });
});
