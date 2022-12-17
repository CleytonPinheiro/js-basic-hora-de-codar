//toLowerCase e toUpperCAse

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

//trim
var nome = "      Matheus";

console.log(nome.trim());

//split
console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

//lasIndexOf

var fraseDois = "Eu quero a última palavra teste dessa frase teste";

console.log(fraseDois.lastIndexOf("teste"));
