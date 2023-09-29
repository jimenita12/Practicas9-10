const matriz1 = [
    [10, 5],
    [8, 2]
];

const matriz2 = [
    [2, 4],
    [6, 8]
];

function sumaMatrices(){
    const resultadoSuma =[];

    for (let fila = 0; fila < 2; fila++){
        resultadoSuma.push([]);

        for (let columna = 0; columna < 2; columna++){
            resultadoSuma[fila].push(matriz1[fila][columna]+ matriz2[fila][columna]);
        }
    }
    return resultadoSuma;
}

function restaMatrices(){
    const resultadoResta =[];

    for (let fila = 0; fila < 2; fila++){
        resultadoResta.push([]);

        for (let columna = 0; columna < 2; columna++){
            resultadoResta[fila].push(matriz1[fila][columna] - matriz2[fila][columna]);
        }
    }
    return resultadoResta;
}

function productoMatrices(){
    const resultadoProducto =[];

    for (let fila = 0; fila < 2; fila++){
        resultadoProducto.push([]);

        for (let columna = 0; columna < 2; columna++){
            resultadoProducto[fila].push(matriz1[fila][columna] * matriz2[fila][columna]);
        }
    }
    return resultadoProducto;
}

function divisonMatrices(){
    const resultadoDivision =[];

    for (let fila = 0; fila < 2; fila++){
        resultadoDivision.push([]);

        for (let columna = 0; columna < 2; columna++){
            if(matriz2[fila][columna]!==0){
                const resultado = matriz1[fila][columna] / matriz2[fila][columna];

                const resultadoDivisionRedondeado = resultado.toFixed(2);
                resultadoDivision[fila].push(parseFloat(resultadoDivisionRedondeado));
            }else{
                console.log("No se puede dividir entre cero.");
                return null;
            }
        }
    }
    return resultadoDivision;
}

console.log("Matriz 1: ");
console.log(matriz1);

console.log("Matriz 2: ");
console.log(matriz2);
console.log('\t');

console.log("Suma de las matrices:");
console.log(sumaMatrices(matriz1, matriz2));
console.log('\t');

console.log("Resta de las matrices:");
console.log(restaMatrices(matriz1, matriz2));
console.log('\t');

console.log("Producto de las matrices:");
console.log(productoMatrices(matriz1, matriz2));
console.log('\t');

console.log("Division de las matrices:");
console.log(divisonMatrices(matriz1, matriz2));
console.log('\t');
