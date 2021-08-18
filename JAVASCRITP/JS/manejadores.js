function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre="Desconosid@") {
  alert(`Hola, ${nombre}`)
}

/************************************* */

const $eventoSemantico = document.getElementById("evento-semantico");

const $eventoMultiple = document.getElementById("evento-multiple");

const $eventoRemover = document.getElementById("evento-remover");

/*************************************** */

$eventoSemantico.onclick = holaMundo;

//con funcion anonima
$eventoSemantico.onclick = function (e) {
  alert("Hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click",holaMundo);

//con arrow funtion

$eventoMultiple.addEventListener("click",(e)=>{
  alert("Hola Mundo Con manejador de elementos multiples en arrow funtion.");

  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

//esto nos ayuda para poder pasar elementos en eventos.
$eventoMultiple.addEventListener("click", () =>{
  saludar('Yovani');
});

/*************Remover Eventos************* */

const removerDobleClick = (e) =>{
alert(`Removiendo el evento ${e.type}`);
console.log(e);
$eventoRemover.removeEventListener("dblclick", removerDobleClick);
$eventoRemover.disabled=true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);