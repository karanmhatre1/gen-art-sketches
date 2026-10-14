let playing = false; // playing flag
let amOsc1, amOsc2, amOsc3, noiseSynth;
let ampEnv;

let grains = [];

let bg;

let storyTime = 0;

let filter, lfo;

// visuals related variables
let boxSize, show = 0, glitch1 = 0, glitch2 = 0, rotation=0;;

function setup() {

  // basic setup
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  for(i=0;i<100;i++) {
    grains[i] = [random(width), random(height), random(0.5,1)];
  }
  
  filter = new Tone.Filter(1000, "lowpass").toDestination();
  
  reverb = new Tone.JCReverb(0.2).connect(filter);
  
  reverb2 = new Tone.JCReverb(0.98).toDestination();
  
  const phaser = new Tone.Phaser({
	frequency: 15,
	octaves: 5,
	baseFrequency: 1000
  }).toDestination();
  
  noiseSynth = new Tone.FMSynth().connect(phaser);
  
  ampEnv = new Tone.AmplitudeEnvelope({
		attack: 10,
		decay: 10,
		sustain: 0.3,
		release: 100
	}).connect(reverb);
  
  lfo = new Tone.LFO("0.5Hz", 200, 1000).connect(filter.frequency);
  
  amOsc1 = new Tone.DuoSynth().connect(ampEnv);
  amOsc2 = new Tone.FMSynth().connect(ampEnv);
  amOsc3 = new Tone.FMSynth().connect(reverb2)
  
}

function draw() {
  background(0);

  amOsc1.volume.value = -20;
  amOsc2.volume.value = 0;
  amOsc3.volume.value = -20;
  
  rectMode(CENTER);
  
  fill('#00ff00');
  noStroke();
  
  if(playing) {
    for(i=0;i<50;i++) {
      circle(grains[i][0], grains[i][1], grains[i][2]);
      grains[i][2]= random(0.5,3);
    } 
  }
  
  noFill();
  stroke('#00ff00');

  if(glitch2 > 0) {
    glitch2--;
    posY = map(glitch2, 20,0,0,height);
    
    for(i=0;i<random(20);i++) {
      let randPosY = random(height);
       line(0,posY+randPosY, width, posY+randPosY); 
    }
  }
  else if(random(0,1) > 0.999) {
    glitch2 = 20;
    
    if(playing) {
      noiseSynth.triggerAttackRelease("E3", "8n");
    }
  }
  
  strokeWeight(6);
  translate(width / 2, height / 2);
  if(glitch1>0) {
    glitch1--;
    if(storyTime == 0) {
       rotation++; 
       rotate(rotation/100);
       rect(0,0,200,200);
    }
    
    if(storyTime == 1) {
       translate(random(-4,4),random(-4,4));
       rect(0,0,200,200);
    }
    
    if(storyTime == 2) {
      translate(random(-4,4),random(-4,4));
       rotation--; 
       rotate(rotation/100);
       rect(0,0,200,200);
    }
    
    if(storyTime == 3) {
       translate(random(-4,4),random(-4,4));
       circle(0,0,400);
    }
    
    if(storyTime == 4) {
      translate(random(-4,4),random(-4,4));
      rotation++; 
      rotate(rotation/50);
      translate(-200, -200);
      circle(0,0,200);
      translate(400, 0);
      circle(0,0,200);
      translate(0, 400);
      circle(0,0,200);
      translate(-400, 0);
      circle(0,0,200);
    }
    
    if(storyTime == 5) {
      translate(random(-4,4),random(-4,4));
      rotation++; 
      rotate(rotation/20);
      translate(-100, -100);
      rect(0,0,200);
      translate(200, 0);
      rect(0,0,200);
      translate(0, 200);
      rect(0,0,200);
      translate(-200, 0);
      rect(0,0,200);
    }
  }
}

function keyTyped() {
  console.log("here");
  glitch1 = 100;
  storyTime = key;
  // storyTime = 5;
  playGlitch(storyTime);
}


function mousePressed() {
  if(!playing) {
    Tone.start();
    playing = true;
    ampEnv.triggerAttack("12t");
    amOsc1.triggerAttack("C3", "8n");
    amOsc2.triggerAttack("C2","+4");
  }
  else {
    glitch1 = 100;
    storyTime = floor(random(0,6));
    // storyTime = 5;
    playGlitch(storyTime);
  }
  return false;
}

function playGlitch(storyTime) {
  
  if(storyTime == 0) {
    amOsc3.triggerAttackRelease("E2","2n"); 
    amOsc1.triggerRelease("0");
    amOsc1.triggerAttack("C1", "8n");
    // amOsc1.frequency.value = 100;
  }
  
  if(storyTime == 1) {
    amOsc3.triggerAttackRelease("E4","2n");
    // amOsc1.frequency.value = 440;
    amOsc2.triggerRelease("0");
    amOsc2.triggerAttack("C3", "8n");
  }
  
  if(storyTime == 2) {
    amOsc3.triggerAttackRelease("C3","2n");
    // amOsc2.frequency.value = 200;
    amOsc2.triggerRelease("0");
    amOsc2.triggerAttack("B3", "8n");
  }
  
  if(storyTime == 3) {
    amOsc3.triggerAttackRelease("C4","2n");
    // amOsc2.frequency.value = 0;
    amOsc1.triggerRelease("0");
    amOsc1.triggerAttack("C2", "8n");
  }
  
  if(storyTime == 4) {
    amOsc3.triggerAttackRelease("A3","2n");
    // amOsc2.frequency.value = 140;
    amOsc2.triggerRelease("0");
    amOsc2.triggerAttack("D3", "8n");
  }
  
  if(storyTime == 5) {
    amOsc3.triggerAttackRelease("E4","2n");
    // amOsc2.frequency.value = 140;
    amOsc2.triggerRelease("0");
    amOsc2.triggerAttack("C4", "16n");
  }
}