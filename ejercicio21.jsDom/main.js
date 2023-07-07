
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme //

const showme=document.querySelector(".showme");
console.log(showme);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado 

const myh1=document.querySelector("#pillado");
console.log(myh1);

// 1.3 Usa querySelector para mostrar por consola todos los p
const myParrafos=document.querySelectorAll("p");
console.log(myParrafos);

 //1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon

const elementosPokemon=document.querySelectorAll(".pokemon");
elementosPokemon.forEach((elemento) => {
console.log(elemento.textContent);
});

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".

const datafunction=document.querySelectorAll("testMe");
datafunction.forEach((elemento) => {
console.log(elemento.textContent);


} ); 

