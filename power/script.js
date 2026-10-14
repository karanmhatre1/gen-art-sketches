// Power (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/4BhR9B8E9
// The canvas mounts into #sketch-container on the page.

let colorSet = [
    ['#002366','#0F52BA', '#FA8072','#FFDAB9'],
    ['#03256C','#2541B2','#1768AC','#E5D549'],
    ['#FBE6C2','#F0C929','#F48B29','#AC0D0D'],
    ['#FAAD80','#FF6767','#FF3D68','#A73489']
];
              
function setup() {
  createCanvas(600, 600).parent('sketch-container');
  noLoop();
}

function draw() {
  
  colors = random(colorSet);
  
  background(255);
  
  noStroke();
  // rectMode(CENTER);
  
  count = random(2,50);
  
  step = ceil(height/count);
  
  for(i=0;i<=count;i++) {
    fill(random(colors));
    rect(0,i*step,width, step);
  }
  
  translate(width, 250);
  rotate(HALF_PI);
  
  for(i=0;i<count;i++) {
    fill(random(colors));
    rect(0,i*step*random(0.1,0.8),width, step);
  }
}

function keyPressed() {
  redraw();
}
