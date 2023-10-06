class Matrix {
    constructor(size) {
        this.size = size;
        this.matrix = this.createMatrix();
        this.renderMatrix();
        this.inputForm = document.getElementById('input-form');
        this.solveButton = document.getElementById('solve-button');
        this.solveButton.addEventListener('click', () => this.onSolveButtonClick());
    }

    createMatrix() {
        const matrix = [];
        for (let fila = 0; fila < this.size; fila++) {
            matrix[fila] = [];
            for (let columna = 0; columna < this.size; columna++) {
                matrix[fila][columna] = 0;
            }
        }
        return matrix;
    }

    renderMatrix() {
        const matrixContainer = document.getElementById('matrix-container');
        matrixContainer.innerHTML = '';
        const table = document.createElement('table');
        for (let fila = 0; fila < this.size; fila++) {
            const row = document.createElement('tr');
            for (let columna = 0; columna < this.size; columna++) {
                const cell = document.createElement('td');
                cell.textContent = this.matrix[fila][columna];
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        matrixContainer.appendChild(table);
    }

    async solve() {
        const valuesInput = document.getElementById('matrix-values').value;
        const values = valuesInput.split(',').map(val => parseFloat(val.trim()));

        if (values.length !== this.size * this.size) {
            alert('Ingrese la cantidad correcta de valores para la matriz.');
            return;
        }

        let index = 0;
        for (let fila = 0; fila < this.size; fila++) {
            for (let columna = 0; columna < this.size; columna++) {
                this.matrix[fila][columna] = values[index];
                index++;
            }
        }

        this.renderMatrix();

        const firstElement = this.matrix[0][0];
        const allEqual = this.matrix.every(row => row.every(element => element === firstElement));
        
        if (allEqual) {
            // Si todos los elementos son iguales, reemplazar la matriz con una matriz identidad
            for (let fila = 0; fila < this.size; fila++) {
                for (let columna = 0; columna < this.size; columna++) {
                    this.matrix[fila][columna] = (fila === columna) ? 1 : 0;
                }
                this.renderMatrix();
            }
        } else {
            // Resolver con el método de Gauss
            for (let fila = 0; fila < this.size; fila++) {
                let pivot = this.matrix[fila][fila];
                for (let columna = 0; columna < this.size; columna++) {
                    this.matrix[fila][columna] /= pivot;
                }
                for (let k = 0; k < this.size; k++) {
                    if (k !== fila) {
                        let factor = this.matrix[k][fila];
                        for (let columna = 0; columna < this.size; columna++) {
                            this.matrix[k][columna] -= factor * this.matrix[fila][columna];
                        }
                    }
                }
                this.renderMatrix();
            }
        }
    }

    onSolveButtonClick() {
        this.solve();
    }
}

document.getElementById('size-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const sizeInput = document.getElementById('matrix-size');
    const size = parseInt(sizeInput.value);
    if (!isNaN(size) && size > 0) {
        const matrix = new Matrix(size);
    } else {
        alert('Ingrese un tamaño válido para la matriz cuadrada.');
    }
});
