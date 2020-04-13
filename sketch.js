let t = [];
let r = [155, 249, 243, 240];
let g = [28, 70, 21, 34];
let b = [237, 201, 120, 157];
let count = 0;
let tri = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(237, 255, 128);
	for (let tx of tri) {
		tx.spread();
		tx.move();
		tx.show();
	}
}

function mouseDragged() {
	let t = new Triangle(mouseX, mouseY, random(100, 0), random(70), random(70), random(70), r[count] - random(30), g[count] + random(30), b[count] - random(30))
	tri.push(t)
	count++
	if (count >= r.length) {
		count = 0
	};
}


class Triangle {
	constructor(x, y, d, w1, w2, w3, r, g, b) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.r = r;
		this.g = g;
		this.b = b;
		this.w1 = w1;
		this.w2 = w2;
		this.w3 = w3;
	}
	move() {
		this.x = this.x + map(mouseX, 0, width, -5, 5);
		this.y = this.y + map(mouseY, 0, height, -5, 5);
	}
	spread() {
		this.x = this.x + map(this.w1, 0, 800, 0, 30);
		this.y = this.y + map(this.w2, 0, 800, 0, 30);
	}


	show() {
		noStroke();
		fill(this.r, this.g, this.b, 135),
			triangle(
				this.x + map(mouseX, 0, 800, -this.d - this.w1, this.d + this.w1),
				this.y + map(mouseX, 0, 800, -this.d - this.w1, this.d + this.w1),
				this.x + this.d + map(mouseX, 0, 800, -this.d - this.w2, this.d + this.w2),
				this.y + this.d + map(mouseY, 0, 800, -this.d - this.w2, this.d + this.w2),
				this.x + map(mouseX, 0, 800, -this.d - this.w3, this.d + this.w3),
				this.y + this.d) + map(mouseY, 0, 800, -this.d - this.w3, this.d + this.w3);
	}
}