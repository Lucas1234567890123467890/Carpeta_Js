var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = parseInt(prompt("Numero DNI"));

if(dni <=0 || dni > 99999999){
   document.write("Este numero no es valido")
}
else{
   let resto = dni % 23
   let letra = letras[resto]
    document.write(letra)
}
