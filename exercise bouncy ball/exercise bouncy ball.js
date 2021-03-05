function paint() {
	canvas = document.getElementById('mycanvas');
	ctx = canvas.getContext('2d');
	var p = { x: 25, y: 25 };
	var speed = 3; 
	var dropAngle = 10; 
	radius = 20;
	ball = { x: p.x, y: p.y };
	moveX = Math.cos(Math.PI / 180 * dropAngle) * speed;
	moveY = Math.sin(Math.PI / 180 * dropAngle) * speed;
	ctx.fillStyle = 'red';
}

function draw() {
    if (ball.x + moveX > canvas.width / 5 && ball.x + moveX < canvas.width * 2 / 5)
		ctx.fillStyle = 'yellow';
	else if (ball.x + moveX > canvas.width * 2 / 5 &&  ball.x + moveX < canvas.width * 3 / 5)
		ctx.fillStyle = 'green';
	else if (ball.x + moveX > canvas.width * 3 / 5 && ball.x + moveX < canvas.width * 4 / 5)
		ctx.fillStyle = 'purple';
	else if (ball.x + moveX > canvas.width * 4 / 5)
		ctx.fillStyle = 'orange';
	else
		ctx.fillStyle = 'red';
	if (ball.x + moveX > canvas.width || ball.x + moveX < radius) {
		moveX = -moveX;
	}
    if (ball.y + moveY > canvas.height || ball.y + moveY < radius) {
		moveY = -moveY;
	}
	ctx.clearRect(0, 0, 610, 580);
	ctx.beginPath();
    ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
	ball.x += moveX;
    ball.y += moveY;
	ctx.fill();
}
        
setInterval(draw, 10);