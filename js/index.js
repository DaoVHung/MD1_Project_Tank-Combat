let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext("2d")
let scoreR = ""
let scoreB = ""
let ketThuc1 = ""
let ketThuc2 = ""
let gameBoard = new GameBoard(canvas);
gameBoard.render();

function onKeyDown(event) {
    gameBoard.action(event.which);
}


function tinhDiemXanh() {
    if (localStorage.countX) {
        localStorage.countX = Number(localStorage.countX) + 1
    } else {
        localStorage.countX = 1
    }
    console.log("Diem Xanh la==", localStorage.countX)
}

function tinhDiemDo() {
    if (localStorage.countD) {
        localStorage.countD = Number(localStorage.countD) + 1
    } else {
        localStorage.countD = 1
    }
    console.log("Diem Do la==", localStorage.countD)
}

function clearScore() {
    Number(localStorage.clear())
    self.reLoad()
}


function reLoad() {
    location.reload()
}



