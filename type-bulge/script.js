
var OriginalPixels;
var ch = 0;

var walker = {
  x: 200,
  y: 100,
  dirX: 20,
  dirY: 20
};

function preload() {
  bogam = loadFont('https://res.cloudinary.com/dgksx9vlc/raw/upload/v1627901901/createwithcode/type%20bulge/bogam_yrnf4f.otf');
}

function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  
  pixelDensity(1.0);
  
  reset(0);
  reset(0);

  // noLoop();
}

function reset(c) {

  background(255);
  fill(0);
  noStroke();
  
  textAlign(CENTER, CENTER);

  textFont(bogam);
  textSize(width);
  text('B', (width/2)-150, (height/2));

  loadPixels();
  noLoop();
}

function draw() {

  reset(0);

  // centerPoint = {
  //   x: walker.x,
  //   y: walker.y
  // }

  centerPoint = {
    x: mouseX,
    y: mouseY
  }

  updateWalker();

  for(i=0;i<600;i+=1) {
    for(j=0;j<600;j+=1) {
      var distanceFromCenter = dist(centerPoint.x, centerPoint.y, i, j);
      
      if(distanceFromCenter < 200) {
        var distFactX = Math.floor(map(distanceFromCenter, 0, 200, centerPoint.x, i));
        var distFactY = Math.floor(map(distanceFromCenter, 0, 200, centerPoint.y, j));

        var index = 4 * ((j * width) + i);

        let off = ((distFactY) * width + distFactX-10) * 4;

        // let c = [
        //   pixels[off],
        //   pixels[off + 1],
        //   pixels[off + 2],
        //   pixels[off + 3]
        // ];

        let c = get(distFactX,distFactY);

        pixels[index] = c[0];
        pixels[index+1] = c[1];
        pixels[index+2] = c[2];
        pixels[index+3] = c[3];

      }
    }
  }

  smooth();
  updatePixels();

  // stroke(0);
  // strokeWeight(0.5);
  // noFill();
  // circle(walker.x,walker.y, 300);
}

function mousePressed() {
  redraw();
}

function updateWalker() {
  if(walker.x>500) {
    walker.dirX = -20;
  }
  
  if(walker.x<100) {
    walker.dirX = 20;
  }

  if(walker.y>500) {
    walker.dirY = -20;
  }
  
  if(walker.y<100) {
    walker.dirY = 20;
  }

  walker.x += walker.dirX;
  walker.y += walker.dirY;
}