
function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  pixelDensity(2.0);

  background(0);
  
  // noFill();
  rectMode(CENTER);
  translate (width/2, height/2);
  // strokeWeight(2);
  // noStroke();
  // noLoop();
}

function reset() {

}

function draw() {

  background(0);
  translate (width/2, height/2);

  for(i=0;i<160;i++) {
    rotate(mouseX*0.00006);
    // fill(map(i, 0, 160, 100, 0));
    fill(255);
    rect(0, 0, (160-i)*2.4);
  }
}

function keyPressed() {
  if(key==='g') {
    reset();
  }
}