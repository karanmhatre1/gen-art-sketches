
var gridCount = 5;
var step = 10;

var offset = 55;

var word = "HELP".split('');

function preload() {
  bogam = loadFont('https://res.cloudinary.com/dgksx9vlc/raw/upload/v1627919662/createwithcode/type-hide-and-seek/geo_kkvb0e.otf');
}

limit = 100;

function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");

  step = width/gridCount;
  
  pixelDensity(1.0);
  
  reset(0);
  reset(0);

  textSize(step);

  // noLoop();
}

function reset(c) {

  background(255);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(bogam);
}

function draw() {

  background(255);
    
  for(i=0;i<gridCount;i+=1) {
    for(j=0;j<gridCount;j+=1) {
      fill(255,0,0);
      rect(step*i, step*j, step);
      fill(0);

      sec = millis()/1000;
      
      letter = word[i%word.length];

      x = step*i+2+abs(sin(i + j*2 + sec)*offset*3);

      y = j*step+offset;

      text(letter, x, y);
    }
  }
}
