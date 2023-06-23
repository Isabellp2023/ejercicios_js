//Ejercicio [11]
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función://

const numbers = [12, 21, 38, 5, 45, 37, 6];
 function average(param) {
  let total = 0;
   for (const numbers of param) {
    total += numbers;
    
 }
   console.log(total / param.length);
 }
    average(numbers);
