//Criar elemento
var el = document.createElement("div");

//Adicionando classe a div
el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");

//Inserindo elemento filho
container.appendChild(el);

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

console.log(el3);

container.insertBefore(el2, el3);
