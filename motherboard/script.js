// Motherboard (p5.js)
// Original: https://editor.p5js.org/one-generated-pixel/sketches/ii5VeC120
// The canvas mounts into #sketch-container on the page.

let colorSet = [
    ['#002366','#0F52BA', '#FA8072','#FFDAB9'],
    ['#FAAD80','#FF6767','#FF3D68','#A73489']
];

let count = 0;

function setup() {
  createCanvas(600, 600).parent('sketch-container');
  // noLoop();
  // frameRate(10);
  noStroke();
}

function draw() {
  
  if(frameCount%20==0) {
   count=random(10,50);

    step = width/count;

    colors = random(colorSet);

    background(random(colors));

    ellipseMode(CORNER);

    for(i=0;i<count;i++) {
      for(j=0;j<count;j++) {
        fill(random(colors))
        rect(i*step,j*step,random(0,step)); 
        fill(random(colors));
        // rotate(PI);
        circle(i*step,j*step,random(0,step)); 
      }
    } 
  }
  
  // saveCanvas('myCanvas', 'png');
}

function keyPressed() {
  redraw();
}
