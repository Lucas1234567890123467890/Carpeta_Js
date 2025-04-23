function esPalindromo(cadena) {
  var palindromo = cadena. toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\]/g, "").replace(/[^a-z0-9]/g, "");

  var invertida = palindromo.split('').reverse().join('');
    return palindromo === invertida;
}
var frase = "amigo no gima";
if (esPalindromo(frase)) {
     document.write(`la frase es palindromo`);
} else {
     document.write(`la frase NO es palindromo`);
}
