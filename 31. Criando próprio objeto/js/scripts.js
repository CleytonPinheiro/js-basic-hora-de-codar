let pessoa = {
  nome: "Matheus",
  idade: 26,
  falar: function () {
    console.log("Olá. tudo bem?");
  },
  soma: function (a, b) {
    return a + b;
  },
};

console.log(pessoa.idade);

pessoa.falar();

var soma = pessoa.soma(2, 6);

console.log(soma);
