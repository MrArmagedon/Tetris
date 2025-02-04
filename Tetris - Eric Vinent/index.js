let canvas;
let ctx;
let FPS = 50;

let ampleCanvas = 400
let altCanvas = 640

let ampleF = 40;
let altF = 40;

let ampleTaulell = 10;
let altTaulell = 20;

let peça

let score = 0;

let objpeça = function () {

    this.x = 5;
    this.y = 0;

    this.tipo = 3;
    this.angle = 1;

    console.log("Peça creada");

    this.choque = function (angleNou, yNova, xNova) {

        let resultat = false;

        for (let py = 0; py < 4; py++) {

            for (let px = 0; px < 4; px++) {

                if (grafics[this.tipo][angleNou][py][px] != 0) {

                    if (taulell[yNova + py][xNova + px] != 0) {

                        resultat = true;
                    }
                }
            }
        }

        return resultat

    }

    this.nova = function () {

        this.tipo = Math.floor(Math.random() * 7)
        this.x = 4
        this.y = 0

    }

    this.dibuixa = function () {
        for (let py = 0; py < 4; py++) {

            for (let px = 0; px < 4; px++) {

                let pos = grafics[this.tipo][this.angle][py][px]

                if (pos != 0) {

                    if (pos == 1) {

                        ctx.fillStyle = vermell
                    }

                    if (pos == 2) {

                        ctx.fillStyle = taronja
                    }

                    if (pos == 3) {

                        ctx.fillStyle = groc
                    }

                    if (pos == 4) {

                        ctx.fillStyle = verd
                    }

                    if (pos == 5) {

                        ctx.fillStyle = blau
                    }

                    if (pos == 6) {

                        ctx.fillStyle = blau_mari
                    }

                    if (pos == 7) {

                        ctx.fillStyle = lila
                    }

                    ctx.fillRect((this.x + px - 1) * ampleF, (this.y + py - 4) * altF, ampleF, altF)
                }
            }
        }
    }

    this.gameOver = function () {

        let gameOver = false
        for (px = 1; px <= ampleTaulell; px++) {

            if (taulell[2][px] > 0) {

                gameOver = true
            }
        }

        return gameOver;
    }

    this.fila = function () {

        let filaFeta;

        for (py = 4; py < altTaulell; py++) {

            filaFeta = true;
            for (px = 1; px <= ampleTaulell; px++) {

                if (taulell[py][px] == 0) {

                    filaFeta = false
                }
            }

            if (filaFeta == true) {

                score++

                for (px = 1; px <= ampleTaulell; px++) {

                    taulell[py][px] = 0;
                }
            }
        }
    }

    this.retras = 20
    this.fotograma = 0

    this.caure = function () {

        if (this.fotograma < this.retras) {

            this.fotograma++

        } else {

            if (this.choque(this.angle, this.y + 1, this.x) == false) {

                this.y++
                this.fotograma = 0;

            } else {

                this.fixarPeça();
                if (this.gameOver()) {

                    recarrega();
                }
                this.nova();



            }
        }
    }

    this.fixarPeça = function () {

        for (let py = 0; py < 4; py++) {

            for (let px = 0; px < 4; px++) {

                if (grafics[this.tipo][this.angle][py][px] > 0) {

                    taulell[this.y + py][this.x + px] = grafics[this.tipo][this.angle][py][px]
                    
                }
            }
        }
    }

    this.rotar = function () {

        let angleNou = this.angle;

        if (angleNou < 3) {

            angleNou++

        } else {

            angleNou = 0
        }

        if (this.choque(angleNou, this.y, this.x) == false) {

            this.angle = angleNou;
        }

        var snd = new Audio("./Sonidos mp3/escopeta.mp3");
        snd.play();

        console.log("ROTAR");
    }

    this.abajo = function () {

        if (this.choque(this.angle, this.y + 1, this.x) == false) {

            this.y++

        }

        var snd = new Audio("./Sonidos mp3/camion.mp3");
        snd.play();

        console.log("ABAJO");
    }

    this.derecha = function () {

        if (this.choque(this.angle, this.y, this.x + 1) == false) {

            this.x++

        }

        var snd = new Audio("./Sonidos mp3/9-mm-gunshot.mp3");
        snd.play();

        console.log("DERECHA");
    }

    this.izquierda = function () {

        if (this.choque(this.angle, this.y, this.x - 1) == false) {

            this.x--

        }

        var snd = new Audio("./Sonidos mp3/pistola.mp3");
        snd.play();

        console.log("IZQUIERDA");
    }

    this.nova();
}

function recarrega() {

    document.location.reload()
}

let vermell = "#FF0000"
let taronja = "#FF9100"
let groc = "#FFF700"
let verd = "#1AFF00"
let blau = "#00E6FF"
let blau_mari = "#006FFF"
let lila = "#9A00FF"
let negre = "#000000"

let grafics =

    [
        [
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ]

        ],
        [
            [
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [2, 2, 2, 2],
                [0, 0, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [2, 2, 2, 2],
                [0, 0, 0, 0],
                [0, 0, 0, 0]

            ]

        ],
        [
            [
                [0, 0, 0, 0],
                [0, 0, 3, 3],
                [0, 3, 3, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 3, 0, 0],
                [0, 3, 3, 0],
                [0, 0, 3, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 3, 3],
                [0, 3, 3, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 3, 0, 0],
                [0, 3, 3, 0],
                [0, 0, 3, 0]

            ]

        ],
        [
            [
                [0, 0, 0, 0],
                [4, 4, 0, 0],
                [0, 4, 4, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 4, 0],
                [0, 4, 4, 0],
                [0, 4, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [4, 4, 0, 0],
                [0, 4, 4, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 4, 0],
                [0, 4, 4, 0],
                [0, 4, 0, 0]

            ]

        ],
        [
            [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 5, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 5, 5, 5],
                [0, 5, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 5, 5, 0],
                [0, 0, 5, 0],
                [0, 0, 5, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 5, 0],
                [5, 5, 5, 0],
                [0, 0, 0, 0]

            ]

        ],
        [
            [
                [0, 0, 6, 0],
                [0, 0, 6, 0],
                [0, 6, 6, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 6, 0, 0],
                [0, 6, 6, 6],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 6, 6, 0],
                [0, 6, 0, 0],
                [0, 6, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [6, 6, 6, 0],
                [0, 0, 6, 0],
                [0, 0, 0, 0]

            ]

        ],
        [
            [
                [0, 0, 0, 0],
                [7, 7, 7, 0],
                [0, 7, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 7, 0],
                [0, 7, 7, 0],
                [0, 0, 7, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 7, 0, 0],
                [7, 7, 7, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 7, 0, 0],
                [0, 7, 7, 0],
                [0, 7, 0, 0],
                [0, 0, 0, 0]

            ]

        ]
    ]

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
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

function dibuixaTaulell() {

    for (let py = 0; py <= altTaulell; py++) {

        for (let px = 0; px <= ampleTaulell; px++) {

            ctx.fillStyle = '#FFFFFF';

            if (taulell[py][px] != 0) {

                ctx.fillStyle = negre;
            }

            ctx.fillRect((px - 1) * ampleF, (py - 4) * altF, ampleF, altF)
        }
    }
}

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
    dibuixaTaulell()
    peça.dibuixa()
    peça.caure()
    ctx.fillText("Score", 20, 20);
}

function borrarPantalla() {

    canvas.width = ampleCanvas;
    canvas.height = altCanvas;
}

function inicializarTeclat() {

    document.addEventListener("keydown", function (tecla) {

        if (tecla.key == "w") {

            peça.rotar();
        }

        if (tecla.key == "s") {

            peça.abajo();
        }

        if (tecla.key == "d") {

            peça.derecha();
        }

        if (tecla.key == "a") {

            peça.izquierda();
        }
    }
    )
}