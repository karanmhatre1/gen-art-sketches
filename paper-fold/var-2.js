function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight, WEBGL);
  myCanvas.parent("canvasContainer");
  pixelDensity(2.0);
}

function draw() {
  background(0);

  // rotateZ(frameCount*0.02);

  // noStroke();
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  // directionalLight(250, 250, 250, -dirX, -dirY, -1);
  ambientLight(255);

  for(j=1;j<25;j++) {
    for(i=1;i<25;i++) {
      push();
      rotateX(-1.5);
      translate(i*60-740, 1200+sin(i/2+j/4+frameCount*0.2)*50, -j*72+800);
      box(sin(i+frameCount*0.2)*30, sin(i+j+frameCount*0.2)*160, sin(i/2+j+frameCount*0.02)*30);
      pop();
    }
  }

}