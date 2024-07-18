let canvas = document.getElementById("canvas"),
    thecontext = canvas.getContext("2d");

let circleX = 200, circleY = 340;
let radius = 10;

const mazeTop = 50;
const mazeBottom = 450;
const mazeLeft = 50;
const mazeRight = 450;
let time = document.getElementsByClassName("time")[0];
function countdown() {
    time.innerHTML -= 1;
    if (time.innerHTML === "0") {
        clearInterval(counter);
        resetGame()
        alert("Time Out Try Again.")
    }
}

let counter = setInterval(countdown, 1000);
function drawMaze() {
    thecontext.clearRect(0, 0, canvas.width, canvas.height);

    thecontext.beginPath();
    thecontext.moveTo(50, 50);
    thecontext.lineTo(450, 50);
    thecontext.lineTo(450, 450);
    thecontext.lineTo(300, 450);
    thecontext.moveTo(200, 450);
    thecontext.lineTo(50, 450);
    thecontext.lineTo(50, 50);

    thecontext.moveTo(50, 150);
    thecontext.lineTo(150, 150);
    thecontext.moveTo(200, 150);
    thecontext.lineTo(300, 150);
    thecontext.lineTo(300, 100);
    thecontext.lineTo(400, 100);

    thecontext.moveTo(400, 100);
    thecontext.lineTo(400, 200);
    thecontext.moveTo(400, 250);
    thecontext.lineTo(400, 350);

    thecontext.moveTo(400, 350);
    thecontext.lineTo(300, 350);
    thecontext.moveTo(250, 350);
    thecontext.lineTo(100, 350);

    thecontext.moveTo(100, 350);
    thecontext.lineTo(100, 300);
    thecontext.lineTo(150, 300);
    thecontext.moveTo(150, 350);
    thecontext.lineTo(150, 400);
    thecontext.lineTo(250, 400);
    thecontext.lineTo(250, 250);
    thecontext.moveTo(250, 200);
    thecontext.lineTo(250, 150);

    thecontext.strokeStyle = 'black';
    thecontext.lineWidth = 2;
    thecontext.stroke();
}

function drawCircle() {
    thecontext.beginPath();
    thecontext.arc(circleX, circleY, radius, 0, 2 * Math.PI);
    thecontext.fillStyle = "red";
    thecontext.fill();
}

function canMove(placex, placey) {
    if (placex < mazeLeft || placey < mazeTop || placex > mazeRight || placey > mazeBottom) {
        return false;
    }
    if ((placex >= 50 && placex <= 150 && placey == 150) ||
        (placex >= 200 && placex <= 300 && placey == 150) ||
        (placex == 300 && placey >= 100 && placey <= 150) ||
        (placex >= 300 && placex <= 400 && placey == 100) ||
        (placex == 400 && placey >= 100 && placey <= 200) ||
        (placex == 400 && placey >= 250 && placey <= 350) ||
        (placex >= 300 && placex <= 400 && placey == 350) ||
        (placex >= 100 && placex <= 250 && placey == 350) ||
        (placex == 100 && placey >= 300 && placey <= 350) ||
        (placex == 150 && placey >= 350 && placey <= 400) ||
        (placex >= 150 && placex <= 250 && placey == 400) ||
        (placex == 250 && placey >= 250 && placey <= 400) ||
        (placex == 250 && placey >= 150 && placey <= 200)) {
        return false;
    }
    return true;
}

function moveCircle(dx, dy) {
    let placex = circleX + dx;
    let placey = circleY + dy;
    if (canMove(placex, placey)) {
        circleX = placex;
        circleY = placey;
    }

    drawMaze();
    drawCircle();

    if (circleY >= mazeBottom - radius) {
        alert("You Win");
        resetGame();
    }
}
function resetGame() {
    time.innerHTML = 7; 
    clearInterval(counter);
    counter = setInterval(countdown, 1000);
    circleX = 200;
    circleY = 340;
    drawMaze();
    drawCircle();
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            moveCircle(0, -5);
            break;
        case "ArrowDown":
            moveCircle(0, 5);
            break;
        case "ArrowLeft":
            moveCircle(-5, 0);
            break;
        case "ArrowRight":
            moveCircle(5, 0);
            break;
    }
});


drawMaze();
drawCircle();
