//jump ball
var animation;
var centerX = 125;
var centerY = 125;
var radius = 20;
var borderX = 500;
var borderY = 250;
var ballDx = 2;
var ballDy = 2;
var theta = 0;
var thetaInc = 0.08;

function drawBall() {
    var content = document.getElementById("ball");
    var me = content.getContext("2d");
    me.clearRect(0, 0, content.width, content.height);

    centerX = centerX + ballDx;
    centerY = centerY + ballDy;
    me.beginPath();
    me.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    me.stroke();
    me.fillStyle = "blue";
    me.fill();
    theta = theta + thetaInc;
    me.moveTo(centerX - radius * Math.cos(theta),
        centerY - radius * Math.sin(theta));

    me.lineTo(centerX + radius * Math.cos(theta),
        centerY + radius * Math.sin(theta));

    me.lineWidth = "2";
    me.lineCap = "round";
    me.storkeStyle = "blue";
    me.stroke;

    if (centerY > borderY - radius || centerY - radius < 0) {
        ballDy = -1 * ballDy;
    }
    if (centerY > borderX - radius || centerY < radius) {
        ballDx = -1 * ballDx;
    }

}

function animate() {
    clearInterval(animation);
    setInterval(drawBall, 25);
}
