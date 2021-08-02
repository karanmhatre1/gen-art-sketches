
var windowsCount = 1;
var step = 10;

var i = 0;
var j = 0;

var playing = false;

let mySound, amplitude, fft, spectrum;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('https://res.cloudinary.com/dgksx9vlc/video/upload/v1627670517/createwithcode/beats-02/Csum_-_Turbo_hctfgs.mp3');
}

function setup() {
  var myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvasContainer");
  pixelDensity(2.0);
  background(0);
  step = width/windowsCount;

  amplitude = new p5.Amplitude();
  amplitude.setInput(mySound);

  fft = new p5.FFT();
  
}

var counter = 0;

function draw() {
  
  background(0);
  spectrum = fft.analyze();
  windowsCount = max(Math.ceil(map(spectrum[30], 170, 200, 1, 20)), 2);
  // windowsCount = 4;
  step = width/windowsCount;

  if(spectrum[30]> 150) {
    fill(255);
  }
  else {
    stroke(255);
    strokeWeight(2);
    noFill();
  }

  for(let i=1;i<windowsCount;i++) {
    for(let j=1;j<windowsCount;j++) {
      var windowWidth = step;
      var windowStart = { x: i*step, y: j*step };
      circle(windowStart.x, windowStart.y, step*amplitude.getLevel()*3);
    }
  }

  counter++;
}

function mousePressed() {
  
  if(windowsCount < 20) {
    windowsCount++;
  }
  else {
    windowsCount=2;
  }

  step = width/windowsCount;
  
  if(!playing) {
    mySound.play();
    playing = !playing;
  }
  
}