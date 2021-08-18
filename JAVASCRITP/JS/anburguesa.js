export  function hamburguerMenu(panelBtn, panel, menuLink){
const  d = document;
d.addEventListener("click", (e) =>{
if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
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