let r = [155, 249, 243, 240];
let g = [28, 70, 21, 34];
let b = [237, 201, 120, 157];
let count = 0;
let triangles = [];
let button1, button2, input, slider1, slider2, slider3;
let val1 = 249;
let val2 = 70;
let val3 = 201;
let bg1 = 237;
let bg2 = 255;
let bg3 = 128;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(237, 255, 128);
	button1 = createButton('add color');
	button2 = createButton('change background')
	button1.position(30, 30);
	button2.position(100 + button1.width, 30)
	button1.mousePressed(addColor);
	button2.mousePressed(changeBG);
	button1.style("padding", "10px");
	button1.style("color", "rgb(" + bg1 + ", " + bg2+ ", " + bg3+ ")");
	button1.style("border", "none");
	button1.style("font-size", "24px");
	button2.style("padding", "10px");
	button2.style("color", "rgb(237, 255, 128)");
	button2.style("border", "none");
	button2.style("font-size", "24px");
	// input = createInput("type here");
	// input.position(100 + button1.width, 30 + 10);
	// input.style("background-color", "transparent");
	// input.style("border", "none");
	// input.style("border-bottom", "dashed #F946C9");
	// input.style("font-size", "24px");
	// input.style("color", "rgb(240, 34, 157)");
	slider1 = createSlider(1, 255, val1, 1);
	slider1.position(30, 100);
	slider2 = createSlider(1, 255, val2, 1);
	slider2.position(30, 130);
	slider3 = createSlider(0, 255, val3, 1);
	slider3.position(30, 160);



}

function draw() {
	background(bg1, bg2, bg3, 50)
	for (let tx of triangles) {
		tx.spread();
		tx.move();
		tx.show();
	}
	val1 = slider1.value();
	val2 = slider2.value();
	val3 = slider3.value();

	button1.style("background-color", "rgb(" + val1 + "," + val2 + "," + val3 + ")");
	button2.style("background-color", "rgb(" + val1 + "," + val2 + "," + val3 + ")");

}

function mouseDragged() {
	let triangle = new Triangle(mouseX, mouseY, random(300, 0), random(70), random(70), random(70), r[count] - random(30), g[count] + random(30), b[count] - random(30))
	triangles.push(triangle);
	count = count + 1
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
	b.splice(0, 1)

	for (let i = triangles.length - 1; i > 0; i--) {
		triangles.splice(i, 1);
	}
}

function changeBG() {
	bg1=slider1.value();
	bg2=slider2.value();
	bg3=slider3.value();
	background(bg1, bg2, bg3);
}