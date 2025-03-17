/*Determinar cual de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
elementos numéricos*/

var valores = [true, 5, false, "hola", "adios",2];
if(5 > 2){
   console.log(true); 
} else if(2 > 5) {
    console.log(false);
} else if(5 < 2) {
    console.log(false);
} else if(2 < 5) {
    console.log(true);
}else if(2 == 2) {
    console.log(true);
} else if(5 == 5) {
    console.log(true);
} else if(5 == 2) {
    console.log(false);
} else if(2 == 5) {
    console.log(false);
} else if("hola" > "adios"){
    console.log(false);
}else if("hola" < "adios"){
    console.log(true);
}else if("adios" > "hola"){
    console.log(true);
}else if("adios" < "hola"){
    console.log(false);
}