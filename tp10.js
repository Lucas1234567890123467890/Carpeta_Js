const resultados = Array(13).fill(0);

for (let i = 0; i < 36000; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;
    resultados[suma]++;
}

console.log(resultados.slice(2));