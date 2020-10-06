var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");

//take the full  window size.
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;

var mouseClicked = true, mouseReleased = false;

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);


function onMouseClick(e) {
    context.beginPath();
    context.arc(e.clientX, e.clientY, 15, 0, Math.PI * 2, false);
    context.lineWidth = 1;
    context.strokeStyle = context.fillStyle = getRandomColor();
    context.fill();
    context.stroke();
    context.closePath();
}

function clear() {
    context.fillStyle = "rgba(0,0,0,0.8)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function onMouseMove(e) {
    clear();
    onMouseClick();

    // x = e.clientX;
    // y = e.clientY;
}

//ball random color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

