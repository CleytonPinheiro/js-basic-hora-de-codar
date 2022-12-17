let x = 5; //var x=5;

const y = 10;

console.log(y);

x = 12;

console.log(x);

if (true) {
  let x = 20;

  console.log(x); // Não mistura com escopo global

  const y = 50;

  console.log(y); // Não mistura com escopo global
}

if (20 > 10) {
  const y = 100;

  console.log("const if 3 =  " + y); //Não mistura com outro escopo local
}
