
var gridCount = 20;
var step = 0;

var playing = false;

let mySound, amplitude, fft, spectrum;

let cutoff = 150;

function preload() {
  soundFormats('mp3', 'ogg');
  // mySound = loadSound('song.mp3');
  mySound = loadSound('https://res.cloudinary.com/dgksx9vlc/video/upload/v1627491584/createwithcode/binary-beats/Humanfobia_-_Another_Wave_Spiral_Universe_enbqqh.mp3');
}

function setup() {

  var canvasContainer = document.getElementById("canvasContainer");
  
  var myCanvas = createCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight);
  myCanvas.parent("canvasContainer");

  myCanvas.mousePressed(playNotes);
  
  pixelDensity(2.0);
  background(255);

  step = width/gridCount;

  amplitude = new p5.Amplitude();
  amplitude.setInput(mySound);

  fft = new p5.FFT();
  
}

function draw() {

  background(0);

  spectrum = fft.analyze();
  ampVal = amplitude.getLevel();

  cutoff = max(map(mouseY, 0, height, 100, 200), 50);

  // cutoff = 175;
  // console.log(cutoff);

  noStroke();
  fill(255);

  for(i=0;i<=gridCount;i++) {
    for(j=0;j<2;j++) {
      specVal = map(spectrum[i*(j+1)], 0, 300, 0, 255);
      
      // fill(specVal);
      if(specVal > cutoff){
        fill(255);
      }
      else {
        fill(0);
      }
        
      rect(i*step, j*(height/2), step, height/2);
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