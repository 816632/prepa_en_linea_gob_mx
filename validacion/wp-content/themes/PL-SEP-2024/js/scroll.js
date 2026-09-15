function muestra_oculta(id) {
  if (document.getElementById) {
    //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = el.style.display == "none" ? "block" : "none"; //damos un atributo display:none que oculta el div
    el.style.opacity = "0" ? "1" : "0";
  }
}
window.onload = function () {
  /*hace que se cargue la funciÃ³n lo que predetermina que div estarÃ¡ oculto hasta llamar a la funciÃ³n nuevamente*/
  muestra_oculta(
    "contenido"
  ); /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
};

/* formatear hr */
function hr() {
  var obj = document.querySelector("hr");
  obj.style.removeProperty("margin");
}

/* collapse menu */
var coll = document.getElementsByClassName("collapsiblem");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseenter", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function myFunction() {
  var element = document.getElementById("overlay");
  element.classList.toggle("open");
  var element = document.getElementById("toggle");
  element.classList.toggle("active");
  var element = document.getElementById("menu-buttoms");
  element.classList.toggle("d-none");
}

/* window.onscroll = function () {
  var y = window.scrollY;
  console.log(y);
} */

window.addEventListener("scroll", function () {
  if (window.scrollY > 38) {
    document.querySelector(".menu-principal").style.margin = "0";
  }
});
window.addEventListener("scroll", function () {
  var header = document.querySelector(".f-top");
  header.classList.toggle("nav-top", window.scrollY <= 30);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".f-top");
  header.classList.toggle("menu-down", window.scrollY > 30);
});

/* Dropmenu movi  */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  });
});
// DOMContentLoaded  end

/* copy url */

function getlink() {
  var aux = document.createElement("input");
  aux.setAttribute("value", window.location.href.split("?")[0].split("#")[0]);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  var css = document.createElement("style");
  var estilo = document.createTextNode(
    "#aviso {position:fixed; z-index: 9999999; top:30%;left:50%;margin-left: -40px;padding: 5px; background: #26290F ;border-radius: 8px;font-size: 18px; color:#C2D04C}"
  );
  css.appendChild(estilo);
  document.head.appendChild(css);
  var aviso = document.createElement("div");
  aviso.setAttribute("id", "aviso");
  var contenido = document.createTextNode("URL copiada");
  aviso.appendChild(contenido);
  document.body.appendChild(aviso);
  window.load = setTimeout("document.body.removeChild(aviso)", 4000);
}

/* lanzar popop con url */
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si la URL contiene #medios
  if (window.location.href.indexOf("#mi-comunidad") !== -1) {
    // Obtener el elemento con ID #mediosBtn y hacer clic en Ã©l
    var comunidadBtn = document.getElementById("btn-comunidad");
    if (comunidadBtn) {
      comunidadBtn.click();
    }
  }
});
/* boton 10 aÃ±os   */

const buttanos = document.createElement("a");
buttanos.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style>.aniv{fill:#e0e7a5;stroke-width:1px;}</style></defs><g id="Capa_1-2"><path class="aniv" d="M20.46,18.81c-.09-.26-.38-.39-.64-.3-.26.09-.39.38-.3.64,0,0,0,.01,0,.02.46,1.19.49,2.1.09,2.5-.48.48-1.69.33-3.23-.4-2.06-1.07-3.93-2.46-5.53-4.13-3.92-3.92-5.53-7.76-4.53-8.76.32-.25.73-.35,1.13-.26.28.02.52-.19.54-.46.02-.27-.17-.5-.44-.53-.7-.12-1.41.08-1.93.55-1.83,1.83.97,6.61,4.53,10.17,1.69,1.75,3.65,3.21,5.81,4.32.39.19.79.35,1.21.48l-3.55,1.35c-4.74-1.8-8.16-6.01-8.95-11.02-.04-.27-.3-.46-.57-.42s-.46.3-.42.57c.08.5.18,1,.31,1.49,1.15,4.36,4.18,7.98,8.27,9.89l-5.85,2.21s-.06-.08-.1-.12c-1.49-1.19-2.42-2.94-2.58-4.84l-.23-2.81c-.02-.27-.25-.48-.53-.46,0,0-.01,0-.02,0-.28.02-.48.26-.46.54,0,0,0,0,0,0l.24,2.81c.18,2.03,1.12,3.91,2.65,5.27l-4.17,1.58.75-3.08c.07-.27-.1-.54-.37-.6-.27-.07-.54.1-.6.37L.01,29.37c-.07.27.1.54.37.6.1.02.2.02.3-.02l18.5-7s.06-.03.08-.05c.4-.06.77-.25,1.06-.53.5-.5.92-1.52.14-3.56Z"></path><path class="aniv" d="M25.18,17.52c-2.7-1.01-5.62-1.3-8.47-.82l-1.79.3c-.27.05-.45.31-.4.59.05.26.3.44.56.4l1.79-.3c2.67-.44,5.42-.18,7.96.77.06.02.12.03.18.03.28,0,.5-.22.5-.5,0-.21-.13-.4-.33-.47Z"></path><path class="aniv" d="M26.95,9.78c-.12-.25-.42-.36-.67-.24l-10.5,5c-.25.12-.36.42-.24.67,0,0,0,0,0,0,.12.25.42.36.67.24,0,0,0,0,0,0l10.5-5c.25-.12.36-.42.24-.67Z"></path><path class="aniv" d="M12.14,3.39c-.05-.27-.32-.45-.59-.39-.27.05-.45.32-.39.59,0,0,0,.01,0,.02.63,2.83.37,5.78-.75,8.45l-.73,1.74c-.11.25.01.55.27.65.06.03.13.04.19.04.2,0,.38-.12.46-.31l.73-1.74c1.2-2.86,1.48-6.03.8-9.05Z"></path><path class="aniv" d="M27.5,17.99c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM27.5,19.99c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z"></path><path class="aniv" d="M15.5,4c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM15.5,6c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z"></path><circle class="aniv" cx="11" cy="1" r="1"></circle><path class="aniv" d="M25,2.5c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M25,0c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M26.5,1.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M24,1.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M21.5,5.49h-2.51c-.28,0-.5.22-.5.5v2.51c0,.28.22.5.5.5h2.51c.28,0,.5-.22.5-.5v-2.51c0-.28-.22-.5-.5-.5ZM21,8h-1.51v-1.51h1.51v1.51Z"></path><path class="aniv" d="M17.86,9.66c-.18-.2-.49-.21-.69-.04l-5,4.5c-.21.18-.22.5-.04.71.18.21.5.22.71.04l5-4.5c.2-.19.21-.5.02-.71Z"></path><path class="aniv" d="M27,11.5c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M29.12,11.41l-.35-.35c-.2-.19-.52-.19-.71.01-.19.19-.19.5,0,.69l.35.35c.2.19.52.19.71-.01.19-.19.19-.5,0-.69Z"></path><path class="aniv" d="M29.5,9.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M29.11,7.88c-.19-.19-.5-.19-.69,0l-.35.35c-.2.2-.2.51,0,.71.09.09.22.15.35.15h0c.13,0,.26-.05.35-.15l.35-.35c.19-.2.19-.51-.01-.71Z"></path><path class="aniv" d="M27,7c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M25.94,8.23l-.35-.35c-.2-.19-.52-.19-.71.01-.19.19-.19.5,0,.69l.35.35c.2.19.52.19.71-.01.19-.19.19-.5,0-.69Z"></path><path class="aniv" d="M5.98,2.16c-.06-.18-.22-.31-.4-.34l-1.47-.21-.65-1.33c-.15-.25-.46-.33-.71-.18-.08.04-.14.11-.18.18l-.66,1.33-1.47.21c-.27.04-.46.29-.42.57.02.11.07.21.15.29l1.06,1.03-.25,1.46c-.05.27.13.53.41.58.11.02.22,0,.32-.05l1.31-.69,1.31.69c.24.13.55.03.68-.21.05-.1.07-.21.05-.32l-.25-1.46,1.06-1.03c.14-.13.18-.33.13-.51ZM3.9,3.18c-.12.11-.17.28-.14.44l.12.72-.65-.34c-.15-.08-.32-.08-.46,0l-.65.34.12-.72c.03-.16-.02-.33-.14-.44l-.53-.51.73-.11c.16-.02.3-.13.38-.27l.32-.66.32.66c.07.15.21.25.38.27l.72.11-.52.51Z"></path><path class="aniv" d="M28.31,25.05h0l-.21-.31c-1.16-1.73-2.97-2.9-5.02-3.25-.27-.04-.53.15-.57.42-.04.26.14.51.4.56,1.48.25,2.82,1,3.82,2.13-.83.15-1.56.65-2,1.37-.54.96-.19,2.18.77,2.72s2.18.19,2.72-.77c.21-.4.32-.84.32-1.28.53.77.57,1.78.11,2.6-.14.24-.06.54.17.68.24.14.54.06.69-.17,0,0,0-.02.01-.02.92-1.63.38-3.7-1.22-4.68ZM27.35,27.44c-.27.48-.88.66-1.36.39s-.66-.87-.39-1.36c0,0,0,0,0,0,.3-.48.79-.81,1.35-.88.09,0,.17.02.25.06.42.24.44,1.26.14,1.8Z"></path></g></svg> 10 aÃ±os PL-SEP';
buttanos.setAttribute("class","link-menu d-none d-md-inline-block");
buttanos.setAttribute("href","https://prepaenlinea.sep.gob.mx/x-aniversario/")


const tab_padrebut = document.querySelector('#menu-buttoms')
const Itembut = tab_padrebut.querySelector(".link-menu");
  tab_padrebut.insertBefore(buttanos, Itembut);

/* overlay */

const tab_padrebutmover = document.querySelector('#v-pills-tab')
const Itembutmover = tab_padrebutmover.querySelector("hr.menu"); /*hr.menu:last-child  li:nth-of-type(10) li.nav-item:nth-of-type(9)*/
/* tab_padrebutm.insertBefore(buttanosm, Itembutm); */
Itembutmover.insertAdjacentHTML('afterend', '<li class="nav-item"><a class="nav-link" href="https://prepaenlinea.sep.gob.mx/x-aniversario/"><svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style>.aniv{fill:#e0e7a5;stroke-width:1px;}</style></defs><g id="Capa_1-2"><path class="aniv" d="M20.46,18.81c-.09-.26-.38-.39-.64-.3-.26.09-.39.38-.3.64,0,0,0,.01,0,.02.46,1.19.49,2.1.09,2.5-.48.48-1.69.33-3.23-.4-2.06-1.07-3.93-2.46-5.53-4.13-3.92-3.92-5.53-7.76-4.53-8.76.32-.25.73-.35,1.13-.26.28.02.52-.19.54-.46.02-.27-.17-.5-.44-.53-.7-.12-1.41.08-1.93.55-1.83,1.83.97,6.61,4.53,10.17,1.69,1.75,3.65,3.21,5.81,4.32.39.19.79.35,1.21.48l-3.55,1.35c-4.74-1.8-8.16-6.01-8.95-11.02-.04-.27-.3-.46-.57-.42s-.46.3-.42.57c.08.5.18,1,.31,1.49,1.15,4.36,4.18,7.98,8.27,9.89l-5.85,2.21s-.06-.08-.1-.12c-1.49-1.19-2.42-2.94-2.58-4.84l-.23-2.81c-.02-.27-.25-.48-.53-.46,0,0-.01,0-.02,0-.28.02-.48.26-.46.54,0,0,0,0,0,0l.24,2.81c.18,2.03,1.12,3.91,2.65,5.27l-4.17,1.58.75-3.08c.07-.27-.1-.54-.37-.6-.27-.07-.54.1-.6.37L.01,29.37c-.07.27.1.54.37.6.1.02.2.02.3-.02l18.5-7s.06-.03.08-.05c.4-.06.77-.25,1.06-.53.5-.5.92-1.52.14-3.56Z"></path><path class="aniv" d="M25.18,17.52c-2.7-1.01-5.62-1.3-8.47-.82l-1.79.3c-.27.05-.45.31-.4.59.05.26.3.44.56.4l1.79-.3c2.67-.44,5.42-.18,7.96.77.06.02.12.03.18.03.28,0,.5-.22.5-.5,0-.21-.13-.4-.33-.47Z"></path><path class="aniv" d="M26.95,9.78c-.12-.25-.42-.36-.67-.24l-10.5,5c-.25.12-.36.42-.24.67,0,0,0,0,0,0,.12.25.42.36.67.24,0,0,0,0,0,0l10.5-5c.25-.12.36-.42.24-.67Z"></path><path class="aniv" d="M12.14,3.39c-.05-.27-.32-.45-.59-.39-.27.05-.45.32-.39.59,0,0,0,.01,0,.02.63,2.83.37,5.78-.75,8.45l-.73,1.74c-.11.25.01.55.27.65.06.03.13.04.19.04.2,0,.38-.12.46-.31l.73-1.74c1.2-2.86,1.48-6.03.8-9.05Z"></path><path class="aniv" d="M27.5,17.99c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM27.5,19.99c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z"></path><path class="aniv" d="M15.5,4c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM15.5,6c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z"></path><circle class="aniv" cx="11" cy="1" r="1"></circle><path class="aniv" d="M25,2.5c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M25,0c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M26.5,1.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M24,1.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M21.5,5.49h-2.51c-.28,0-.5.22-.5.5v2.51c0,.28.22.5.5.5h2.51c.28,0,.5-.22.5-.5v-2.51c0-.28-.22-.5-.5-.5ZM21,8h-1.51v-1.51h1.51v1.51Z"></path><path class="aniv" d="M17.86,9.66c-.18-.2-.49-.21-.69-.04l-5,4.5c-.21.18-.22.5-.04.71.18.21.5.22.71.04l5-4.5c.2-.19.21-.5.02-.71Z"></path><path class="aniv" d="M27,11.5c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M29.12,11.41l-.35-.35c-.2-.19-.52-.19-.71.01-.19.19-.19.5,0,.69l.35.35c.2.19.52.19.71-.01.19-.19.19-.5,0-.69Z"></path><path class="aniv" d="M29.5,9.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M29.11,7.88c-.19-.19-.5-.19-.69,0l-.35.35c-.2.2-.2.51,0,.71.09.09.22.15.35.15h0c.13,0,.26-.05.35-.15l.35-.35c.19-.2.19-.51-.01-.71Z"></path><path class="aniv" d="M27,7c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M25.94,8.23l-.35-.35c-.2-.19-.52-.19-.71.01-.19.19-.19.5,0,.69l.35.35c.2.19.52.19.71-.01.19-.19.19-.5,0-.69Z"></path><path class="aniv" d="M5.98,2.16c-.06-.18-.22-.31-.4-.34l-1.47-.21-.65-1.33c-.15-.25-.46-.33-.71-.18-.08.04-.14.11-.18.18l-.66,1.33-1.47.21c-.27.04-.46.29-.42.57.02.11.07.21.15.29l1.06,1.03-.25,1.46c-.05.27.13.53.41.58.11.02.22,0,.32-.05l1.31-.69,1.31.69c.24.13.55.03.68-.21.05-.1.07-.21.05-.32l-.25-1.46,1.06-1.03c.14-.13.18-.33.13-.51ZM3.9,3.18c-.12.11-.17.28-.14.44l.12.72-.65-.34c-.15-.08-.32-.08-.46,0l-.65.34.12-.72c.03-.16-.02-.33-.14-.44l-.53-.51.73-.11c.16-.02.3-.13.38-.27l.32-.66.32.66c.07.15.21.25.38.27l.72.11-.52.51Z"></path><path class="aniv" d="M28.31,25.05h0l-.21-.31c-1.16-1.73-2.97-2.9-5.02-3.25-.27-.04-.53.15-.57.42-.04.26.14.51.4.56,1.48.25,2.82,1,3.82,2.13-.83.15-1.56.65-2,1.37-.54.96-.19,2.18.77,2.72s2.18.19,2.72-.77c.21-.4.32-.84.32-1.28.53.77.57,1.78.11,2.6-.14.24-.06.54.17.68.24.14.54.06.69-.17,0,0,0-.02.01-.02.92-1.63.38-3.7-1.22-4.68ZM27.35,27.44c-.27.48-.88.66-1.36.39s-.66-.87-.39-1.36c0,0,0,0,0,0,.3-.48.79-.81,1.35-.88.09,0,.17.02.25.06.42.24.44,1.26.14,1.8Z"></path></g></svg> 10 aÃ±os PL-SEP</a></li>');

  /* movil */
  
const tab_padrebutm = document.querySelector('#nav_accordion')
const Itembutm = tab_padrebutm.querySelector("hr.menu"); /*hr.menu:last-child  li:nth-of-type(10) li.nav-item:nth-of-type(9)*/
/* tab_padrebutm.insertBefore(buttanosm, Itembutm); */
Itembutm.insertAdjacentHTML('afterend', '<li class="nav-item"><a class="nav-link" href="https://prepaenlinea.sep.gob.mx/x-aniversario/"><svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style>.aniv{fill:#e0e7a5;stroke-width:1px;}</style></defs><g id="Capa_1-2"><path class="aniv" d="M20.46,18.81c-.09-.26-.38-.39-.64-.3-.26.09-.39.38-.3.64,0,0,0,.01,0,.02.46,1.19.49,2.1.09,2.5-.48.48-1.69.33-3.23-.4-2.06-1.07-3.93-2.46-5.53-4.13-3.92-3.92-5.53-7.76-4.53-8.76.32-.25.73-.35,1.13-.26.28.02.52-.19.54-.46.02-.27-.17-.5-.44-.53-.7-.12-1.41.08-1.93.55-1.83,1.83.97,6.61,4.53,10.17,1.69,1.75,3.65,3.21,5.81,4.32.39.19.79.35,1.21.48l-3.55,1.35c-4.74-1.8-8.16-6.01-8.95-11.02-.04-.27-.3-.46-.57-.42s-.46.3-.42.57c.08.5.18,1,.31,1.49,1.15,4.36,4.18,7.98,8.27,9.89l-5.85,2.21s-.06-.08-.1-.12c-1.49-1.19-2.42-2.94-2.58-4.84l-.23-2.81c-.02-.27-.25-.48-.53-.46,0,0-.01,0-.02,0-.28.02-.48.26-.46.54,0,0,0,0,0,0l.24,2.81c.18,2.03,1.12,3.91,2.65,5.27l-4.17,1.58.75-3.08c.07-.27-.1-.54-.37-.6-.27-.07-.54.1-.6.37L.01,29.37c-.07.27.1.54.37.6.1.02.2.02.3-.02l18.5-7s.06-.03.08-.05c.4-.06.77-.25,1.06-.53.5-.5.92-1.52.14-3.56Z"></path><path class="aniv" d="M25.18,17.52c-2.7-1.01-5.62-1.3-8.47-.82l-1.79.3c-.27.05-.45.31-.4.59.05.26.3.44.56.4l1.79-.3c2.67-.44,5.42-.18,7.96.77.06.02.12.03.18.03.28,0,.5-.22.5-.5,0-.21-.13-.4-.33-.47Z"></path><path class="aniv" d="M26.95,9.78c-.12-.25-.42-.36-.67-.24l-10.5,5c-.25.12-.36.42-.24.67,0,0,0,0,0,0,.12.25.42.36.67.24,0,0,0,0,0,0l10.5-5c.25-.12.36-.42.24-.67Z"></path><path class="aniv" d="M12.14,3.39c-.05-.27-.32-.45-.59-.39-.27.05-.45.32-.39.59,0,0,0,.01,0,.02.63,2.83.37,5.78-.75,8.45l-.73,1.74c-.11.25.01.55.27.65.06.03.13.04.19.04.2,0,.38-.12.46-.31l.73-1.74c1.2-2.86,1.48-6.03.8-9.05Z"></path><path class="aniv" d="M27.5,17.99c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM27.5,19.99c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z"></path><path class="aniv" d="M15.5,4c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5ZM15.5,6c-.28,0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Z"></path><circle class="aniv" cx="11" cy="1" r="1"></circle><path class="aniv" d="M25,2.5c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M25,0c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M26.5,1.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M24,1.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M21.5,5.49h-2.51c-.28,0-.5.22-.5.5v2.51c0,.28.22.5.5.5h2.51c.28,0,.5-.22.5-.5v-2.51c0-.28-.22-.5-.5-.5ZM21,8h-1.51v-1.51h1.51v1.51Z"></path><path class="aniv" d="M17.86,9.66c-.18-.2-.49-.21-.69-.04l-5,4.5c-.21.18-.22.5-.04.71.18.21.5.22.71.04l5-4.5c.2-.19.21-.5.02-.71Z"></path><path class="aniv" d="M27,11.5c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M29.12,11.41l-.35-.35c-.2-.19-.52-.19-.71.01-.19.19-.19.5,0,.69l.35.35c.2.19.52.19.71-.01.19-.19.19-.5,0-.69Z"></path><path class="aniv" d="M29.5,9.5h-.5c-.28,0-.5.22-.5.5s.22.5.5.5h.5c.28,0,.5-.22.5-.5s-.22-.5-.5-.5Z"></path><path class="aniv" d="M29.11,7.88c-.19-.19-.5-.19-.69,0l-.35.35c-.2.2-.2.51,0,.71.09.09.22.15.35.15h0c.13,0,.26-.05.35-.15l.35-.35c.19-.2.19-.51-.01-.71Z"></path><path class="aniv" d="M27,7c-.28,0-.5.22-.5.5v.5c0,.28.22.5.5.5s.5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5Z"></path><path class="aniv" d="M25.94,8.23l-.35-.35c-.2-.19-.52-.19-.71.01-.19.19-.19.5,0,.69l.35.35c.2.19.52.19.71-.01.19-.19.19-.5,0-.69Z"></path><path class="aniv" d="M5.98,2.16c-.06-.18-.22-.31-.4-.34l-1.47-.21-.65-1.33c-.15-.25-.46-.33-.71-.18-.08.04-.14.11-.18.18l-.66,1.33-1.47.21c-.27.04-.46.29-.42.57.02.11.07.21.15.29l1.06,1.03-.25,1.46c-.05.27.13.53.41.58.11.02.22,0,.32-.05l1.31-.69,1.31.69c.24.13.55.03.68-.21.05-.1.07-.21.05-.32l-.25-1.46,1.06-1.03c.14-.13.18-.33.13-.51ZM3.9,3.18c-.12.11-.17.28-.14.44l.12.72-.65-.34c-.15-.08-.32-.08-.46,0l-.65.34.12-.72c.03-.16-.02-.33-.14-.44l-.53-.51.73-.11c.16-.02.3-.13.38-.27l.32-.66.32.66c.07.15.21.25.38.27l.72.11-.52.51Z"></path><path class="aniv" d="M28.31,25.05h0l-.21-.31c-1.16-1.73-2.97-2.9-5.02-3.25-.27-.04-.53.15-.57.42-.04.26.14.51.4.56,1.48.25,2.82,1,3.82,2.13-.83.15-1.56.65-2,1.37-.54.96-.19,2.18.77,2.72s2.18.19,2.72-.77c.21-.4.32-.84.32-1.28.53.77.57,1.78.11,2.6-.14.24-.06.54.17.68.24.14.54.06.69-.17,0,0,0-.02.01-.02.92-1.63.38-3.7-1.22-4.68ZM27.35,27.44c-.27.48-.88.66-1.36.39s-.66-.87-.39-1.36c0,0,0,0,0,0,.3-.48.79-.81,1.35-.88.09,0,.17.02.25.06.42.24.44,1.26.14,1.8Z"></path></g></svg> 10 aÃ±os PL-SEP</a></li>');
  
  


/* boton 10 aÃ±os */

/* MENU DT*/
/* se crea el submenu de vinculaciÃ³n */
const tab_menu = document.createElement("div");
  tab_menu.innerHTML = '<ul id="menu-dt-vinculacion" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://prepaenlinea.sep.gob.mx/vinculacion/sne/">Servicio Nacional de Empleo</a></li></ul>';
  tab_menu.setAttribute("class","tab-pane fade");
  tab_menu.setAttribute("id","v-pills-vinculaciones");
  tab_menu.setAttribute("role","tabpanel");
  tab_menu.setAttribute("aria-labelledby","v-pills-vinculaciones");
  tab_menu.setAttribute("tabindex","0");

const tab_padre = document.querySelector('.tab-content')
const Item = tab_padre.querySelector("#v-pills-contacto");
  tab_padre.insertBefore(tab_menu, Item);

/* se crea el botÃ³n de vonculaciÃ³n */
const newLink = document.createElement("button");
  newLink.innerHTML = 'VinculaciÃ³n <i class="fa-solid fa-sort-down" aria-hidden="true"></i>' ;
  newLink.setAttribute("id", "v-pills-vinculaciones-tab");
  newLink.setAttribute("class", "nav-link");
  newLink.setAttribute("data-bs-toggle", "pill");
  newLink.setAttribute("data-bs-target", "#v-pills-vinculaciones");
  newLink.setAttribute("role", "tab");
  newLink.setAttribute("type", "button");
  newLink.setAttribute("aria-controls", "v-pills-vinculaciones");
  newLink.setAttribute("tabindex", "-1"); 
  newLink.setAttribute("aria-selected", "false"); 

const elementoPadre = document.querySelector('#v-pills-tab')
const secondItem = elementoPadre.querySelector("#v-pills-contacto-tab");
  elementoPadre.insertBefore(newLink, secondItem);

/* toogle para vinculaciÃ³n */
  document.getElementById('v-pills-vinculaciones').addEventListener('click', function() {
    document.getElementById('v-pills-vinculaciones-tab').classList.toggle('active','show');
})

/* Menu movil */

const newLinkm = document.createElement("li");
  newLinkm.innerHTML = '<a class="nav-link" href="#"> VinculaciÃ³n <i class="fa-solid fa-sort-down" aria-hidden="true"></i> </a><ul class="submenu collapse"><div class="menu-dt-vinculacion-container"><ul id="menu-dt-vinculacion-1" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2631"><a href="https://prepaenlinea.sep.gob.mx/vinculacion/sne/">Servicio Nacional de Empleo</a></li></ul></div></ul>' ;
  newLinkm.setAttribute("class", "nav-item has-submenu");

const elementoPadrem = document.querySelector('#nav_accordion')
const secondItemm = elementoPadrem.querySelector(".nav-item:nth-child(7)");
  elementoPadrem.insertBefore(newLinkm, secondItemm);

/* Direccion footer */
let allChildren = document.getElementsByClassName("copyright");
(allChildren[0]).innerHTML = "Avenida RevoluciÃ³n 1425, colonia Campestre, alcaldÃ­a Ãlvaro ObregÃ³n, Ciudad de MÃ©xico, C.P. 01040";

//url youtube
var theLinks = document.querySelectorAll(
  '.sociales a[title="Youtube"], .mso a[title="Youtube"]'
);
theLinks.forEach(function (element, index) {
  element.href = "https://www.youtube.com/@PrepaenLinea-SEP";
});