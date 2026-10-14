/*
  title: Pixel Wave
  author: Karan Mhatre
  website: genart.karanmhatre.com
*/

function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {
  background(0, 10);

  count = 20;
  radius = 10;
  
  stepX = -50/count;
  stepY = -50/count;
  
  noStroke();

for(k=0;k<9;k++) {
  for(j=0;j<9;j++) {
    for(i=1;i<=3+sin(-k/4+millis()*0.003)*3;i++) {
      x = 200+radius*3*j+i*4*stepX;
      y = 200+radius*3*k+i*4*stepY;
      fill(k*60,0,100);
      // fill(255);
      rect(x, y, radius);
    }
  }
}
}