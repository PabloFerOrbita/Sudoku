var dificultad;
var sudoku;

function preguntar_dificultad() {
    $('#cuerpo').empty();
    $('#cuerpo').append('<div id="dificultad" class="w-25 h-25 d-flex flex-column border border-2 border-black bg-secondary-subtle justify-content-center align-items-center"></div>');
    $('#dificultad').append('<h1 class="text-danger-emphasis">SUDOKU</h1>')
    $('#dificultad').append('<h6 class="mb-5 text-danger-emphasis">Fácil = 19 huecos, Medio = 28 huecos, Difícil = 37 huecos, Muy difícil = 46 huecos</h6>')
    $('#dificultad').append('<div id="opciones" class="d-flex flex-column justify-content-center align-items-center w-75"></div>')
    $('#opciones').append('<button id="46" class="btn btn-primary mb-2 w-25">Muy Difícil</button>');
    $('#opciones').append('<button id="37" class="btn btn-primary mb-2 w-25">Difícil</button>');
    $('#opciones').append('<button id="28" class="btn btn-primary mb-2 w-25">Medio</button>');
    $('#opciones').append('<button id="19" class="btn btn-primary mb-2 w-25">Fácil</button>')
    $('button').on('click', (e) => {
        dificultad = parseInt(e.target.id);
        
    });
}

function generarSudoku() {
    tablero = [];
    for (var i = 0; i < 3; i++) {
        var filaSudoku = [];
        for (var j = 0; j < 3; j++) {
            var matriz = [];
            var numerosPosibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (var k = 0; k < 3; k++) {
                var fila = [];
                for (var l = 0; l < 3; l++) {
                    var numero = numerosPosibles[(Math.floor(Math.random() * numerosPosibles.length))];;
                    if (numeroEnFila(filaSudoku, numero, k) || numero_en_columna(tablero, numero, j, l)) {
                        numeroValido = validar(numerosPosibles, filaSudoku, k, tablero, j, l)
                        if (numeroValido == 0) {
                            return false;
                        }
                        numero = numeroValido;
                    }
                    numerosPosibles = numerosPosibles.filter(element => element != numero);
                    fila.push(numero);
                }

                matriz.push(fila);

            }

            filaSudoku.push(matriz);
        }
        tablero.push(filaSudoku);

    }
    return tablero;


}
function numeroEnFila(fila, numero, indice) {
    if (fila.length == 0) {
        return false;
    }
    for (var i = 0; i < fila.length; i++) {
        if (fila[i][indice].includes(numero)) {
            return true;

        }
    }
    return false;

}


function validar(numerosPosibles, fila, index, columnas, indexMatriz, indexColumna) {
    var valido = 0;
    numerosPosibles.forEach(element => {
        if (!numeroEnFila(fila, element, index) && !numero_en_columna(columnas, element, indexMatriz, indexColumna)) {
            valido = element;
            return;
        }
    })
    return valido;

}

function numero_en_columna(columnas, numero, indexMatriz, indexColumna) {
    if (columnas.length == 0) {
        return false;
    }

    for (var i = 0; i <= 2; i++) {
        if (columnas[0][indexMatriz][i][indexColumna] == numero) {
            return true;

        }
    }

    if (columnas.length < 2) {
        return false;
    }
    for (var i = 0; i <= 2; i++) {
        if (columnas[1][indexMatriz][i][indexColumna] == numero) {
            return true;

        }
    }

}

function quitarNumeros() {
    var ceros = 0;
    while (ceros <= dificultad) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    for (var l = 0; l < 3; l++) {
                        var random = Math.floor(Math.random() * 101);
                        if (random > 70 && typeof sudoku[i][j][k][l] != 'string') {
                            sudoku[i][j][k][l] = sudoku[i][j][k][l].toString();
                            ceros++;
                            if (ceros == dificultad) {
                                return;
                            }
                        }

                    }
                }
            }
        }
    }
}