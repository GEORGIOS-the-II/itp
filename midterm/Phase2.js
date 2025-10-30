function setup() {
  createCanvas(100,100);
  background(0);
}
function myShape(x, y){
  let c = color(255)
  fill(c);
  noStroke();
  ellipse(x, y, 110, 90, 50)
}
function draw(){

  myShape(-15, 50)
  myShape(50, -15)
  myShape(115, 50)
  myShape(50, 115)
}
