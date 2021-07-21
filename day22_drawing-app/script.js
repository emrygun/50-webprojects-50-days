const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearBtn = document.getElementById('clear');

const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');

colorEl.value = `rgb(0, 0, 0)`;

let size = 20;

let color = 'black';

let x;
let y;

let isPressed = false;

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)
        
        x = x2;
        y = y2;
    }
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

colorEl.addEventListener('change', (e) => color = e.target.value);

increaseBtn.addEventListener('click', () =>  changeSize(true));
decreaseBtn.addEventListener('click', () =>  changeSize(false))
clearBtn.addEventListener('click', clearCanvas);

function changeSize(isIncrease) {
    if (isIncrease === true) {
        size++;
    }
    else if (isIncrease === false && size > 1) {
        size--;
    }

    sizeEl.innerText = size;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
