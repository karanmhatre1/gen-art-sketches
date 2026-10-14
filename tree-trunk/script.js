// Tree Trunk (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/_HKwwT7q9
// The canvas mounts into #sketch-container on the page.

let count = 0;
let scale = 40;

function setup() {
  createCanvas(600, 600).parent('sketch-container');
  seed = random(1000);
  background(255);
  // frameRate(60);
  // noFill();
  fill(255);
  // noLoop();
}

function draw() {
  
  if(frameCount%20==0) {
    background(255);
    r = 100
    start = {
      x: width/2,
      y: 400
    }

    for(j=0;j<70;j++) {
      beginShape();
      xoff = 0;

      for(i=0;i<PI*200;i++) {
        sin_a = sin(i/100);
        cos_a = cos(i/100)*0.5;
        noiseVal = map(noise(sin_a + 1, cos_a + 1, seed),0,1,-r*0.8,r*0.8);
        x = start.x+sin_a*(r+noiseVal);
        y = start.y+cos_a*(r+noiseVal)-j*2;
        vertex(x,y);
        xoff+=0.1;
      } 
      endShape(CLOSE); 
      seed+=0.01;
    }


    count++; 
  }
}

function keyPressed() {
  redraw();
}
