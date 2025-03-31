function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    return textoLimpio === textoLimpio.split("").reverse().join("");
}

console.log(esPalindromo("Amigo, no gima"));