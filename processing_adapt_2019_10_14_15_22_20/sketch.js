let circleX;
let circleY;
let xSpeed=6.6;
let ySpeed=3.6;
let radius=100;



function setup() {
  createCanvas(500, 500);
  col = color(102,102,255);
  bgc = color(233,70,15,50)
  
  noStroke();
  circleX = 300;
  circleY = 300;
}

function draw() {
  background(bgc);
  
  //bouncing ball
  fill(col);
  ellipse(circleX,circleY,radius,radius);
  
  //ball motion
  circleX=circleX + xSpeed;
  circleY=circleY + ySpeed;
  
  //bounce back,not over the edge
  if(circleX > width-50 || circleX < 50){
    xSpeed = xSpeed * -1;
  }
  
  if(circleY > height-50 || circleY <50){
    ySpeed = ySpeed * -1;
  }
  
  //change color in certain area
  if(circleX<width/2 && circleY>height/2){
   col = color(255,3,4,80);
   bgc = color(80,45,210,50);
   radius = 120;
    
     } else {
   col = color(102,102,255);
   bgc = color(233,70,15,50)
   radius=100;
     }
  
}



 

