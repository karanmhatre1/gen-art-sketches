// Matter Grid (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/96x8QS7sg
// The canvas mounts into #sketch-container on the page.

let count = 0;
let scale = 40;

function setup() {
  createCanvas(600, 600).parent('sketch-container');
  seed = [random(1000),random(1000),random(1000),random(1000),random(1000),random(1000),random(1000),random(1000),random(1000)];
  background(255);

  drawRect();
  // noFill();
}

function drawRect() {
  noStroke();
  fill(255,255,0);
  rect(200,200,100,50);
  rect(430,400,50,150);  
}

function draw() {
  
  r = 50-count;
  
  noFill();
  stroke(0);
  
  if(r>20) {
     for(j=0;j<3;j++) {
      for(k=0;k<3;k++) {
        start = {
          x: 100+200*j,
          y: 100+200*k
        }

        beginShape();
        xoff = 0;

        for(i=0;i<PI*200;i++) {
          sin_a = sin(i/100);
          cos_a = cos(i/100)*1.2;
          noiseVal = map(noise(sin_a + 1, cos_a + 1, seed[j*3+k]),0,1,-r*0.5,r*0.5);
          x = start.x+sin_a*(r+noiseVal);
          y = start.y+cos_a*(r+noiseVal);
          curveVertex(x,y);
          xoff+=0.01;
        }

        seed[j*3+k]+=0.01;

        endShape(CLOSE);
      }
    }  
  }
  
  count++;
  
  if(r<-40) {
    count = 0;
    seed = [random(1000),random(1000),random(1000),random(1000),random(1000),random(1000),random(1000),random(1000),random(1000)];
    background(255);
    
    drawRect();
  }

}
