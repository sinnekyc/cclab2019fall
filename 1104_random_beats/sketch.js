// let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}


//reference:https://www.youtube.com/watch?v=6TPVoB4uQCU&t=58s credit to the coding train
function draw() {
  
  background(0);
  
  rectMode(CENTER);
  
  noStroke();
 
  
  fill(random(0,255),random(0,255),random(0,255));
  translate(0,0,mouseX);
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 1.2);
  // rect(0,0,150,150);
  // box(100,50,50);
  torus(50, 10);
  pop();
  
  fill(random(0,255),random(0,255),frameCount,90);
  translate(mouseX - windowWidth/2,mouseY - windowHeight/2);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.01);
  torus(40, 8, 3, 12);
  
  fill(random(0,255),random(0,255),random(0,255),frameCount);
  translate(mouseY - windowHeight/2,mouseX - windowWidth/2);
  rotateX(frameCount * 0.7);
  rotateY(frameCount * 1);
  rotateZ(frameCount * 0.1);
  sphere(20, 2, 16);
  
  // angle += 0.07;
  
}