function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  count = 10;
  step = width/10;
  
  for(i=1;i<count*11;i++) {
    for(j=1;j<count-1;j++) {
      // translate(sin(millis()*0.00002*i),0);
      circle(step/2+i*10+j*50,step/7+j*step*1.1+sin(frameCount*0.08*j+i)*20, step*0.4);
    } 
  }
}