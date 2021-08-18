const $divsEventos = document.querySelectorAll(".eventos-flujo div");

const $linkEventos = document.querySelectorAll(".evetos-flujo div a");

console.log($divsEventos);

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

  e.stopPropagation();
}

$divsEventos.forEach(div =>{
  //Fase de burbuja

div.addEventListener("click", flujoEventos);

//Fase de captura
//div.addEventListener("click", flujoEventos, true);

// div.addEventListener("click", flujoEventos, {
//   capture: false,
//   once:true,//solo se ejecuta una ves.
// });
});

/*$linkEventos.addEventListener("click", (e) =>{
alert("Hola soy desarollador de sistemas inteligentes");

e.preventDefault();
});*/

window.addEventListener("resize", (e) =>{
  console.log("******Evento Resize********");
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

console.log(e);
});