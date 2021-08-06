
var gridCount = 20;
var step = 0;

let rows = 2;

var playing = false;

let mySound, amplitude, fft, spectrum;

var R = 100000;
var G = 100000;
var B = 100000;

let cutoff = 150;

function preload() {
  soundFormats('mp3', 'ogg');
  // mySound = loadSound('song.mp3');
  // mySound = loadSound('Humanfobia - Another Wave Spiral Universe.mp3');
  // mySound = loadSound('Illocanblo - Trametes versicolor.mp3');
  mySound = loadSound('https://res.cloudinary.com/dgksx9vlc/video/upload/v1628253536/createwithcode/center-split/Illocanblo_-_Trametes_versicolor_vb6wz7.mp3');
  // mySound = loadSound('Origami Repetika - Quare Frolic');
}

function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);

  myCanvas.parent("canvasContainer");
  pixelDensity(2.0);
  background(255);

  step = width/gridCount;

  amplitude = new p5.Amplitude();
  amplitude.setInput(mySound);

  myCanvas.mousePressed(playNotes);

  fft = new p5.FFT();
  
}

function draw() {
  
  background(0);
  spectrum = fft.analyze();
  waveform = fft.waveform();
  ampVal = amplitude.getLevel();
  
  // rows = map(ampVal, 0, 0.3, 2, 50);
  rows = 5;

  // cutoff = max(map(mouseY, 0, height, 50, 200), 50);
  cutoff = 150;

  noStroke();
  // stroke(255);
  // noFill();

  gridCount = map(ampVal, 0, 0.3, 2, 10);

  var counter = 0;

  step = width/32;
  stepY = height/64;

  for(i=0;i<32;i++) {
    for(j=0;j<32;j++) {

      specVal = map(spectrum[counter], 0, 300, 0, 255);

      // rect(counter, 200, 1, -1*abs(waveform[counter]*100));

      if(specVal > cutoff) {

        fill(255);
        rect(j*step, (height/2)-i*stepY, step, stepY);
        rect(j*step, (height/2)+i*stepY, step, stepY);
        // if(counter == 71)
          // blast();
      }

      // fill(0);
      // text(counter, (i*step)+20, (j*stepY)+20);
      
      counter++;
    }
  }

  if(!playing) {
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text('click to play', width/2, height/2);
  }

}

function playNotes() {
  
  if(!playing) {
    mySound.play();
    playing = !playing;
  }
  
}