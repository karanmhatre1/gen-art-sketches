function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(60);
  // noLoop();
}

let i = 0;

function draw() {
  background(255, 100);
  
  // for(i=0;i<10;i++) {
    for(j=0;j<10;j++) {
      size = random(50);
      for(l=0;l<size;l++) {
        for(k=0;k<PI*2;k=k+0.1) {
          fill(map(l,0,size,0,255))
          circle(130+i*40+sin(k)*l,130+j*40+cos(k)*l,1);
        }
      }
    }
  // }
  
  if(i<9) {
    i++; 
  }
  else {
    i=0;
  }
}

// function keyPressed() {
  // redraw();
// }