class Ball {
    constructor(x, y, xDelta, yDelta, diameter) {
        this.x = x;
        this.y = y;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
        this.diameter = diameter;
    }
}

let balls = [];

let diffIndex = 0;
let c = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
];

let colorDeltas = [-1, -1, -1];

let step = 0;
let xSpeed = 0;
let ySpeed = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    balls = [
        new Ball(1, 1, 1, 2, 100)
    ];
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        xSpeed += 1;
    } else if (keyCode === RIGHT_ARROW) {
        xSpeed -= 1;
    } else if (keyCode === UP_ARROW) {
        ySpeed += 1;
    } else if (keyCode === DOWN_ARROW) {
        ySpeed -= 1;
    } else if (keyCode === ENTER) {
        ySpeed = 0;
        xSpeed = 0;
        createCanvas(windowWidth, windowHeight);
        background(0, 0, 0);

        while (balls.length > 4) {
            balls.pop();
        }
    } else if (keyCode === 189) {
        balls.pop();
        createCanvas(windowWidth, windowHeight);
        background(0, 0, 0);
    }
}

function draw() {
    noStroke();

    if (mouseIsPressed) {
        balls.push(new Ball(mouseX, mouseY, 1, 2, 100))
    }


	for(i = 0; i < 2; i++) {
		step++;

		if (step % 4 == 0) {
			c[diffIndex] += colorDeltas[diffIndex];
		}

		for (let ball of balls) {
			if (ball.x <= 0 || ball.x > windowWidth) {
				ball.xDelta *= -1;
			}
			if (ball.y <= 0 || ball.y > windowHeight) {
				ball.yDelta *= -1;
			}

			ball.x += ball.xDelta;
			ball.y += ball.yDelta;

			ellipse(
				ball.x,
				ball.y,
				ball.diameter + (sin(step / 100) * xSpeed),
				ball.diameter + (sin(step / 100) * ySpeed)
			);

			fill(c[0], c[1], c[2]);
		}

		if (c[diffIndex] <= 0) {
			colorDeltas[diffIndex] = 1;
			c[diffIndex] = 1;
			diffIndex = Math.floor(Math.random() * 3);
		} else if (c[diffIndex] >= 255) {
			colorDeltas[diffIndex] = -1;
			c[diffIndex] = 254;
			diffIndex = Math.floor(Math.random() * 3);
		}
	}
}
