var numero = parseInt(prompt("ingreso un numero para su factorial"));
var factorial = 1;

if (numero < 0){
    document.write("No se puede calcular eso");
} 
else if (numero > 0) {
    for (var i =1; i <= numero; i++) {
      factorial *= i;
    }
  document.writeln(`el factorial de (${numero}) da en total (${factorial}) `);
}
