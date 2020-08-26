function setup() {
	createCanvas(400,400);
}

let x = 0;
let y = 0;
let xspeed = 3;
let yspeed = -3;

function draw() {
	background(100,100,100);
	fill(20,30,100);
	rect(x, y, 100, 100);

	if(x + 100 > width || x < 0)  {
		xspeed *= -1;		
	}

	if(y - 300 > length || y < 0) {
		yspeed *= -1;
	}

	x += xspeed;
	y += yspeed;
}
