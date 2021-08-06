
function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  pixelDensity(2.0);
}

function draw() {
  background(0);

  count = 20;
  radius = 20;

  constrainMouseX = constrain(mouseX, count, width-count);
  constrainMouseY = constrain(mouseY, count, height-count);
  
  stepX = -50/count;
  stepY = -50/count;
  
  // noStroke();

for(k=0;k<8;k++) {
  for(j=0;j<8;j++) {
    for(i=1;i<=11+sin(-k/2+millis()*0.01)*10;i++) {
      x = 100+radius*3*j+i*stepX*0.5;
      y = 100+radius*3*k+i*stepY*0.5;
      // fill(k*60,0,100);
      fill(255);
      circle(x, y, radius);
    }
  }
}
}