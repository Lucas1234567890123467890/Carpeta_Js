function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena contiene una mezcla de mayúsculas y minúsculas.";
    }
}

console.log(analizarCadena("PALABRA"));
console.log(analizarCadena("palabra"));
console.log(analizarCadena("Palabra"));
