var myCanvas;
var container;
var font;

function preload() {
  font = loadFont('https://res.cloudinary.com/dgksx9vlc/raw/upload/v1628062340/createwithcode/guten-morgen-type-pull/Montserrat-Black_he6djh.otf')
}

function setup() {
  container = document.getElementById('canvasContainer');

  myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");  

  pixelDensity(2.0);

  noLoop();
}



function draw() {
  
  background(255,0,0);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(100);

  fill(0);
  text('GUTEN', 300, 200);
  text('MORGEN', 300, 400);  
}

startPoint = {
  x: null,
  y: null
};

function mouseClicked() {

  if(startPoint.x == null) {
    startPoint.x = mouseX;
    startPoint.y = mouseY;
  }
  else {
    startPoint.x = null;
    startPoint.y = null;
  }
}

function mouseMoved() {
  if(startPoint.x != null) {
    copy(startPoint.x, startPoint.y, 100, 100, mouseX, mouseY, 100, 100);
  }
  
  if(mouseX > 0 && mouseX < 600 && mouseY > 0 && mouseY < 600) {
    rectSelector.style.top = container.offsetTop + mouseY + "px";
    rectSelector.style.left = container.offsetLeft + mouseX + "px";
  }
}