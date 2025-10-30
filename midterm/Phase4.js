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
 for (y = -15; y < 500; y += 80)
 for (x = 0; x < 500; x += 65)
   drawObject(x,y, 0.5)
  }