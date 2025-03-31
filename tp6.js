function parOImpar(numero) {
    return numero % 2 === 0 ? "El número es par" : "El número es impar";
}
const num = parseInt(prompt("Introduce un número entero:"));
const resultado = parOImpar(num);
console.log(resultado);
