var dificultad;

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