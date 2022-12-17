//length
var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.length);

//push
arr.push(8);
arr.push("Adicionando string no array");

console.log(arr);

//pop - Remove o último elemento
arr.pop();

console.log(arr);

//unshift
arr.unshift(0);

console.log(arr);

arr.unshift("primeiro");

console.log(arr);

//shift
arr.shift();

console.log(arr);

//Acessar o último elemento
console.log(arr[arr.length - 1]);

//isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));
