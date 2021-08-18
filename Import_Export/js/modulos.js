import   saludar, {PI, usuario, Saludar} from "./constantes.js";
//import {aritmetica} from "./aritmetica.js"; //sin alias
import {aritmetica as calculos} from "./aritmetica.js"; //con alias

console.log("Archivo modulos.js");

console.log(PI, usuario);
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));

saludar();

let saludo = new Saludar();
saludo;

