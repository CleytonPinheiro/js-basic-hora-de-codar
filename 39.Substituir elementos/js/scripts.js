//Criar elemento
var el = document.createElement("h3");

el.classList = "testando-classe";

var text = document.createTextNode("Texto do paragráfo substituido.");

el.appendChild(text);

console.log(el);

//Selecionar elemento a ser substituido
var title = document.querySelector("#title");

console.log(title);

//Selecionar o pai do elemento
var pai = title.parentNode;

//Trocando o elemento
pai.replaceChild(el, title);
