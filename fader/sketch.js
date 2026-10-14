/*

  title: Fader #01
  author: Karan Mhatre
  website: genart.karanmhatre.com
*/


function setup() {
  createCanvas(600,600); 
  
  pixelDensity(1.0);
  background(0,0,0);

  fill(0);
  
  step = 100;
  // noLoop();
}

function draw() {
  background(25, 0, 50, 10);

  from = color(50, 0, 100);
  to = color(255, 50, 0);

  for(i=0;i<=10;i++) {
    for(j=0;j<=10;j++) {
      x = step*i;
      y = j*step+20*j*sin(frameCount*0.02);
      
      noStroke();
      // rad = step*2*sin((frameCount+x)*0.02)*cos(x+frameCount*0.01);
      // rad = step*sin(frameCount*0.01);
      rad = step;
      // rotate(frameCount*0.01);
      c1 = lerpColor(from, to, map(rad, 0, step, 0, 1));
      fill(c1);
      
      circle(x,y,rad);
    }
  }  
}