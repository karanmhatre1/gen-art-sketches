var img;

function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight, WEBGL);
  myCanvas.parent("canvasContainer");
  pixelDensity(2.0);
}

function draw() {
  background(0);

  // orbitControl();

  noStroke();
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(100, 100, 100, -dirX, -dirY, -1);
  ambientLight(200);

  camera(0, -300, 300, 0, 0, 50, 0, 1, 0);
  // orbitalControl();

  // lights();

  // ambientMaterial(255, 0, 255);

  // texture(img);
  // textureMode(NORMAL);
  // textureWrap(MIRROR);

  rotateY(frameCount*0.02);
  translate(sin(frameCount)*20,0,0);

  for(j=1;j<25;j++) {
    for(i=1;i<25;i++) {
      push();
      ambientMaterial(map(i,1,25,0,255), 0, 100);
      translate(-150+i*12, sin(i+j+frameCount*0.09)*50, j*12-160);
      box(60*sin(i*2+j*4+frameCount*0.02));
      pop();
    }
  }

}