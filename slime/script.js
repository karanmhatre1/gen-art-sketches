// Slime (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/7UDSH4Fli
// The canvas mounts into #sketch-container on the page.

let count = 0;
let scale = 40;

function setup() {
  createCanvas(600, 600).parent('sketch-container');
  seed = random(1000);
  background(255);
  fill(255);
}

function draw() {
  r = 100+mouseX*0.2;
  start = {
    x: width/2,
    y: -50
  }
  
  beginShape();
  
  xoff = 0;

  for(i=0;i<PI*200;i++) {
    sin_a = sin(i/100);
    cos_a = cos(i/100);
    noiseVal = map(noise(sin_a + 1, cos_a + 1, seed),0,1,-r*0.5,r*0.5);
    x = start.x+sin_a*(r+noiseVal);
    y = start.y+cos_a*(r+noiseVal)+count;
    vertex(x,y);
    xoff+=0.1;
  } 
  
  endShape(CLOSE); 
  
  seed+=0.01;
  count+=1;

  if(count > 940) {
    background(255);
    count = 0;
    seed = random(1000);
  }
}

function keyPressed() {
  redraw();
}
