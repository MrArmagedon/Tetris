let canvas;
let ctx;
let FPS = 50;

let ampleCanvas = 400
let altCanvas = 640

let ampleF = 40;
let altF = 40;

let ampleTaulell = 10;
let altTaulell = 16;

let peça

let objpeça = function(){

    this.x = 0;
    this.y = 0;

    console.log("Peça Creada")
}

let taulell = [

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

function inicializar() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = ampleCanvas;
    canvas.height = altCanvas;

    peça = new objpeça()

    inicializarTeclat()

    setInterval(function () {

        principal();

    }, 1000 / FPS)
}

function principal() {

    console.log("bucle")
    borrarPantalla()
}

function borrarPantalla() {

    canvas.width = ampleCanvas;
    canvas.height = altCanvas;
}

function inicializarTeclat() {

    document.addEventListener("keydown", function (tecla) {

        if (tecla.key == "w") {

            console.log("w");
        }

        if (tecla.key == "s") {

            console.log("s");
        }

        if (tecla.key == "a") {

            console.log("a");
        }

        if (tecla.key == "d") {

            console.log("d");
        }
    })

}