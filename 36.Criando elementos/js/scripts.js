//Inserir o elemento no body
var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("Texto conteúdo do paragrago");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

//INSERIR ELEMENTO NO CONTAINER
var container = document.getElementById("container");

console.log(container);

var elem = document.createElement("span");

elem.appendChild(document.createTextNode("Texto do span"));

console.log(elem);

container.appendChild(elem);
