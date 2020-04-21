let r = [155, 249, 243, 240];
let g = [28, 70, 21, 34];
let b = [237, 201, 120, 157];
let count = 0;
let triangles = [];
let button1, button2, input, slider1, slider2, slider3, s1, s2, s3;
let val1 = 249;
let val2 = 70;
let val3 = 201;
let bg1 = 237;
let bg2 = 255;
let bg3 = 128;
let labels = [];
let buttons = [];
let sliders = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(237, 255, 128);
	s1 = select('#s1');
	s2 = select('#s2');
	s3 = select('#s3');
	labels = selectAll('label');
	button1 = select('#button1');
	button2 = select('#button2');
	buttons = selectAll('button');
	button1.position(30, 30);
	button2.position(100 + button1.width, 30);
	button1.mousePressed(addColor);
	// button2.mousePressed(changeBG);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style("padding", "10px");
		buttons[i].style("color", "rgb(237, 255, 128)");
		buttons[i].style("border", "none");
		buttons[i].style("font-size", "24px");
	}
	s1.style('font-size', '20px');
	s2.style('font-size', '20px');
	s3.style('font-size', '20px');

	// input = createInput("type here");
	// input.position(100 + button1.width, 30 + 10);
	// input.style("background-color", "transparent");
	// input.style("border", "none");
	// input.style("border-bottom", "dashed #F946C9");
	// input.style("font-size", "24px");
	// input.style("color", "rgb(240, 34, 157)");
	slider1 = select('#slider1');
	slider2 = select('#slider2');
	slider3 = select('#slider3');
	slider1.value(val1);
	slider2.value(val2);
	slider3.value(val3);
	slider1.position(30, 120);
	slider2.position(30, 150);
	slider3.position(30, 180);
	s1.position(170, 110);
	s2.position(170, 140);
	s3.position(170, 170);
	sliders = selectAll('.slider');




}

function draw() {
	resizeCanvas(windowWidth, windowHeight);
	background(bg1, bg2, bg3);


	for (let tx of triangles) {
		tx.spread();
		tx.move();
		tx.show();
	}
	val1 = slider1.value();
	val2 = slider2.value();
	val3 = slider3.value();
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style("background-color", "rgb(" + (val1-10)  + "," + (val2-10) + "," + (val3-10) + ")");
		buttons[i].style("color", "rgb(" + bg1 + "," + bg2 + "," + bg3 + ")");
	}
	for (let i = 0; i < labels.length; i++) {
		labels[i].style('color', "rgb(" + (val1-10)  + "," + (val2-10) + "," + (val3-10)  + ")");
	}
		button2.mousePressed(changeBG);
	noStroke();
	fill(r[3], g[3], b[3]);
	ellipse(50, 210, 30, 30);
	fill(r[1], g[1], b[1]);
	ellipse(50, 250, 30, 30);
	fill(r[2], g[2], b[2]);
	ellipse(95, 210, 30, 30);
	fill(r[0], g[0], b[0]);
	ellipse(95, 250, 30, 30);
}

function mouseDragged() {
	let triangle = new Triangle(mouseX, mouseY, random(300, 0), random(70), random(70), random(70), r[count] - random(30), g[count] + random(30), b[count] - random(30));
	triangles.push(triangle);
	count = count + 1
	if (count >= r.length) {
		count = 0;
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
		fill(this.r, this.g, this.b, 155),
			triangle(
				this.x + map(mouseX, 0, 800, -this.d - this.w1, this.d + this.w1),
				this.y + map(mouseX, 0, 800, -this.d - this.w1, this.d + this.w1),
				this.x + this.d + map(mouseX, 0, 800, -this.d - this.w2, this.d + this.w2),
				this.y + this.d + map(mouseY, 0, 800, -this.d - this.w2, this.d + this.w2),
				this.x + map(mouseX, 0, 800, -this.d - this.w3, this.d + this.w3),
				this.y + this.d) + map(mouseY, 0, 800, -this.d - this.w3, this.d + this.w3);
	}


}

function addColor() {
	r.push(val1);
	g.push(val2);
	b.push(val3);
	r.splice(0, 1);
	g.splice(0, 1);
	b.splice(0, 1);

	for (let i = triangles.length - 1; i > 0; i--) {
		triangles.splice(i, 1);
	}
}

function changeBG() {
	bg1 = slider1.value();
	bg2 = slider2.value();
	bg3 = slider3.value();
	background(bg1, bg2, bg3);
}