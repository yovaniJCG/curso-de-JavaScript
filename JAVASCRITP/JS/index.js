//import {hamburguerMenu} from "./anburguesa.js";

function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      //esto se lo agrego para que le agregue la clase al boton y aparesca la x y asi poder cerrar el menu
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    //esto es para cuando tenemos activo el menu y le damos clik a un enlace esto nos lleve al enlace y se cierre el menu
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}

/*********************Reloj y Alarma************************* */

//const d = document;
function digitalClock(clock, btnPlay, btnStop) {
  let horaTempo;
  const d = document;

  d.addEventListener("click", (e) => {

    if (e.target.matches(btnPlay)) {
      horaTempo = setInterval(() => {
        let relojHora = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${relojHora}</h3>`;
        console.log(e);
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(horaTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }

  });

}

//alarma
function alarma(sonido, btnPlay, btnStop) {
  const d = document;
  let alarmaTemp;
  const $alarmas = d.createElement("audio");
  $alarmas.src = sonido;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmaTemp = setTimeout(() => {
        $alarmas.play();
      }, 2000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmaTemp);
      $alarmas.pause();
      //si queremos que regrese de nuevo a cero
      $alarmas.currentTime = 0;

      d.querySelector(btnPlay).disabled = false;
    }
  });

}
/********************************************** */


//EVENTOS DEL TECLADO.
function shortcus(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("HAs lanzado una alerta con el teclado");
  }


  if (e.key === "b" && e.altKey) {
    confirm("HAs lanzado una confirmacion con el teclado");
  }


  if (e.key === "c" && e.altKey) {
    prompt("HAs lanzado una avizo con el teclado");
  }
}

/*************CUENTA <REGRESIVA></REGRESIVA>*********** */
function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();//la fecha limite que tiene que llegar.

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),//la fecha de hoy mismo.
      limitTime = (countdownDate - now) / 1000,//resto la fecha limite - la fecha de hoy
      days = Math.floor(limitTime / (60 * 60 * 24)),
      hours = ("0" + Math.floor((limitTime / (60 * 60)) % 24)).slice(-2),
      minutes = ("0" + Math.floor((limitTime / 60) % 60)).slice(-2),
      seconds = ("0" + Math.floor(limitTime % 60)).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

    // console.log(countdownDate, now, limitTime);
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = finalMessage;
    }
  }, 1000);
}

/*********BOTON SCROLL*********** */
const w = window;
function scrollTopBtn(btn) {
  const $scrollBtn = document.querySelector(btn);

  w.addEventListener("scroll", e =>{
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;//con este e detenta la altura que tiene la barra de desplazamiento vertical
 if (scrollTop > 600) {
   $scrollBtn.classList.remove("hidden");
 }else{
$scrollBtn.classList.add("hidden");
 }
console.log(w.pageYOffset, document.documentElement.scrollTop);
  });
  document.addEventListener("click", e =>{
 if (e.target.matches(btn)) {//esto es para que me lleve a inicio de nuevo
   w.scrollTo({
     behavior: "smooth",
     top: 0
   })
 }
  });
}

/****************************TEMA OSCURO***************************** */
function darkTheme(btn, classDark) {
  const $themeBtm = document.querySelector(btn),
  $selectores = document.querySelectorAll("[data-dark]");

  console.log($selectores);

  let luna = "🌙",
  sol ="☀️";

  document.addEventListener("click", e=>{
    
    if (e.target.matches(btn)) {
      console.log($themeBtm.textContent);
      if($themeBtm.textContent=== luna){
        $selectores.forEach(el => el.classList.add(classDark))
        $themeBtm.textContent = sol;
      }else{
            $selectores.forEach(el => el.classList.remove(classDark))
        $themeBtm.textContent = luna;
      }
    }
  })
}
//aqui llamo todas las funciones
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")

  alarma("alarmas/alar.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Sep 29 2021 23:18:00",
    "Feliz cumnpleaños Medio Siglo 😔"
  );

  scrollTopBtn(".scroll-top-btn");
  
  darkTheme(".dark-theme-btn", "dark-mode");
});

d.addEventListener("keydown", (e) => {
  shortcus(e);
});


