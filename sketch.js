
let angle;
let rotSpeed;

let colorPalette = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let sizes = [];
let speeds = [];

class Square {
  display(size, color, speed) {
    noFill();
    stroke(color);
    strokeWeight(4);

    push();
    rotate(angle * speed);
    rect(0, 0, size, size);
    pop();
  }
}



let square = new Square();


function setup() {


  createCanvas(windowWidth, windowHeight);


  angleMode(DEGREES);
  rectMode(CENTER);

  angle = 90;
  rotSpeed = 1;

  for (let i = 0; i < 7; i++) {
    sizes[i] = 100 + i * 70;

    speeds[i] = 1 + i * 0.2;
  }


}

function draw() {

  background(0, 4);

  translate(width / 2, height / 2);

  for (let i = 0; i < 6; i++) {

    stroke(colorPalette[i]);
    square.display(sizes[i], colorPalette[i], speeds[i]);
  }


  
  angle += rotSpeed;

}
