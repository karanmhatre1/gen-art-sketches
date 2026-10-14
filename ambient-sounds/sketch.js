let playing = false; // playing flag
const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
                 'P','Q','R','S','T','U','V','W','X','Y','Z'];

let colorsArr = ["#ff0000","#ffa500","#ffff00","#00ff00","#0000ff",
                 "#4b0082","#ff00ff"]; // rainbox colors

// synth related variables

let synth,
    distort, Bnote=1, loop, synthC, noiseSynth, autoFilter,
    metalSynth, phaser;

// visuals related variables
let boxSize, show = 0, rainbow = 0, glitch = 0;


function setup() {
  
  // basic setup
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  boxSize = width/20;
  textSize(boxSize);
  textFont("Krona One");
  noStroke();
  
  // synth setup
  let vol = new Tone.Volume(-10).toDestination();
  let vol2 = new Tone.Volume(-20).toDestination();
  
  let verb = new Tone.Reverb(45).connect(vol);
  
  let verb2 = new Tone.Reverb(30).connect(vol2);
  
  // synth for mouse move
  synthA = new Tone.MonoSynth().connect(verb2);
  
  // synth for white noise
  noiseSynth = new Tone.Noise("brown").connect(vol2);
  noiseSynth.volume.value = -20;
  
  // synth for glitch noise
  metalSynth = new Tone.MetalSynth().connect(verb);
  
  // synth for mouse click
  phaser = new Tone.Phaser({
  frequency: 110,
  octaves: 5,
  baseFrequency: 1000}).connect(verb);

  synthC = new Tone.FMSynth().connect(phaser);

}

function draw() {
  background(255);
  
  if(random(100) > 99) {
    playGlitch();
  }
  
  if(random(100)>99) {
    synthA.triggerAttackRelease("D4", "16n"); 
  }
  
  // grid
  
  for(i=0;i<20;i++) {
    for(j=0;j<20;j++) {
      
      // for each box calculate distance from center
      let distC = dist(i*boxSize,j*boxSize,width/2,height/2);
      
      // based on mouse movement decide the distance for the rects to be made       black
      let distMouseToC = dist(mouseX,mouseY,width/2,height/2);
      
      let show = map(distMouseToC,width/2,0, 0, width/2, true);
      
      
      // if distance from center is less than the show distance then make           black
      
      if(distC <= show) {
        
        // if rainbox is activated then color the rect in rainbox colors
        if(distC<=show*rainbow/20) {
          fill(random(colorsArr));
          rect(i*boxSize,j*boxSize,boxSize);
          fill(255);
          text(round(random(0,9)),i*boxSize ,j*boxSize + boxSize*0.85); 
        }
        else {
          
          fill(0); 
            rect(i*boxSize,j*boxSize,boxSize);
            fill(255);
            text("O",i*boxSize ,j*boxSize + boxSize*0.85);  
        }
        
      }
      
      // If not in distance then make basic
      
      else {
        
        if(glitch>0) {
            fill(0); 
            rect(i*boxSize,j*boxSize,boxSize);
            fill(255);
            text(random(letters),i*boxSize ,j*boxSize + boxSize*0.85);  
          }
        else {
            fill(255);
            rect(i*boxSize,j*boxSize,boxSize);
            fill(0);
            text("/",i*boxSize ,j*boxSize + boxSize*0.85);  
        }
      }
    }
  }
  
  // reduce rainbow count if active
  if(rainbow > 0)
    rainbow--;
  
  if(glitch > 0)
    glitch--;
}

// On mouse press start/change beat, start rainbow, play synthC
function mousePressed() {
  let distMouseToC = dist(mouseX,mouseY,width/2,height/2);
  
  if(!playing) {
    Tone.start();
    playing = true;
    noiseSynth.start();
  
  }
  else {
    synthC.triggerAttackRelease("E"+round(map(distMouseToC, 0, width/2, 3,8)), "8n");
  }
  
  rainbow = 20;
  
  return false;
}

// On Mouse Move play synthA on a note based on the mouse distance from center

function mouseMoved() {
  
  let distC = dist(mouseX,mouseY,width/2,height/2);
  
  note = round(map(abs(mouseX-width),0,width/2,1,3));

  if(playing) {
     synthA.triggerAttackRelease("D"+note, "16n"); 
  }
  
  return false;
}

function playGlitch() {
  if(playing) 
    metalSynth.triggerAttackRelease("E1", "32n"); 
  
  glitch = 5;
}