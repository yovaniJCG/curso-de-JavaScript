 /*const  $WhatisDOM = document.getElementById("que-es");
 
 let text =`<p>Hola estoy insertando tetxo de javaScript.</p>`;


$WhatisDOM.innerHTML=text;*/

/*const $cards = document.querySelector(".cards");

console.log($cards.children);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstElementChild);//primer elemento hijo
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.clousest());*/

/*const $figure=document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptiontext = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals alt='Animals' ");

$figure.classList.add("card")

$figcaption.appendChild($figcaptiontext)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure);

const estaciones =["Primevera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones
.forEach(el => {
const $li = document.createElement("li");
$li.textContent=el;
$ul.appendChild($li);
});

/************************************ */

/*
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
  {
  title:'Tecnologia',
  img:"https://placeimg.com/200/200/tech"
},
 {
  title:'Miercoles',
  img:"https://placeimg.com/200/200/tech"
},
 {
  title:'Natureo',
  img:"https://placeimg.com/200/200/tech"
},
{
 title:'Natureo',
  img:"https://placeimg.com/200/200/arch"
},

];

cardContent.forEach(el=>{
  $template.querySelector('img').setAttribute("src", el.img);

  $template.querySelector('figcaption').textContent = el.title;

  let $clone = document.importNode($template, true);

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/

