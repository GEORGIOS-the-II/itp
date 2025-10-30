function setup(){
  createCanvas(500, 500);
  background(0);
  noStroke();
}
function drawObject(x, y, s){
  push()
  translate(x, y);
  scale(s);
  fill(255);
  ellipse(-15, 50, 110, 90, 50);
  ellipse(50, -15, 110, 90, 50);
  ellipse(115, 50, 110, 90, 50);
  ellipse(50, 115, 110, 90, 50);
  pop()
}
function draw(){
  drawObject(10, 10);
  drawObject(230, 120, 1.5);
}