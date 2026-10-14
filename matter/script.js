// Matter (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/jERA7vp87
// The canvas mounts into #sketch-container on the page.

let count = 0;
let scale = 40;

function setup() {
  createCanvas(600, 600).parent('sketch-container');
  seed = random(1000);
  background(255);
  // noFill();
}

function draw() {
  r = scale*2-count;
  
  if(r>scale) {

    start = {
      x: width/2,
      y: height/2
    }

    beginShape();
    xoff = 0;

    for(i=0;i<PI*200;i++) {
      sin_a = sin(i/100);
      cos_a = cos(i/100)*1.2;
      noiseVal = map(noise(sin_a + 1, cos_a + 1, seed),0,1,-r*0.5,r*0.5);
      x = start.x+sin_a*(r+noiseVal);
      y = start.y+cos_a*(r+noiseVal);
      curveVertex(x,y);
      xoff+=0.01;
    }

    seed+=0.01;

    endShape(CLOSE); 
  }
  
  count++;
  
  if(r < scale-50) {
    scale = random(10,100);
    background(255);
    count = 0;
    seed = random(1000);
  }
  
}
