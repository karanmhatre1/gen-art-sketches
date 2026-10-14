// Dance Glitch (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/YhkVK4xxQ
// The canvas mounts into #sketch-container on the page.

let count = 0;
let scale = 40;

function setup() {
  createCanvas(600, 600).parent('sketch-container');
  seed = random(1000);
  background(0);
  fill(255);
}

function draw() {
  
  background(0);
  r = 200;
  
  // translate(random(10,40), random(10,40));
  // rotate(20);
  fill(random(0,255),random(0,255),random(0,255));
  // fill(255);
  
  start = {
    x: width/2,
    y: height/2
  }
  
  beginShape();
  
  xoff = 0;

  for(i=0;i<PI*200;i=i+0.1) {
    sin_a = sin(i);
    cos_a = cos(i);
    noiseVal = map(noise(sin_a + 1, cos_a + 1, seed),0,1,-r*0.8,r*0.8);
    x = start.x+sin_a*(r+noiseVal);
    y = start.y+cos_a*(r+noiseVal);
    vertex(x,y);
    xoff+=0.1;
  } 
  
  endShape(CLOSE); 
  
  seed+=0.01;
  count+=1;

}

function keyPressed() {
  redraw();
}
