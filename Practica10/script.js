function crearMatrizCuadrada(numero){
    const matriz = [];

    for (let fila = 0; fila < numero; fila++){
        matriz.push([]);

        for(let columna = 0; columna < numero; columna++){
            if (fila === columna){
                matriz[fila].push(1);
            }else{
                matriz[fila].push(0);
            }
        }
    }
    return matriz;
}

function crearTablaHTML(matriz) {
    const tabla = document.createElement('table');

    for (let fila = 0; fila < matriz.length; fila++) {
        const filaTabla = document.createElement('tr');

        for (let columna = 0; columna < matriz[fila].length; columna++) {
            const celda = document.createElement('td');
            celda.textContent = matriz[fila][columna];
            filaTabla.appendChild(celda);
        }

        tabla.appendChild(filaTabla);
    }

    return tabla;
}

document.getElementById('generarMatriz').addEventListener('click', function() {
    const tamanoMatriz = parseInt(document.getElementById('tamanioMatriz').value);

    if (!isNaN(tamanoMatriz) && tamanoMatriz > 0) {
        const matriz = crearMatrizCuadrada(tamanoMatriz);
        const tablaHTML = crearTablaHTML(matriz);

        const tablaContainer = document.getElementById('tabla-container');
        tablaContainer.innerHTML = ''; 
        tablaContainer.appendChild(tablaHTML);
    } else {
        alert("Por favor, ingrese un tamaño válido para el cuadro.");
    }
});

