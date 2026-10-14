let playing=false;

//oscillators
let fmOsc, fmOsc2;

let autoFilter;

let loop1Show = false,
    loop2Show = false,
    loop3Show = false,
    loop4Show = false,
    loopMinorShow = false;

let loopMinorCounter = 0,
    loop4Counter = 0,
    loop3Counter = 0;

let lfo;

let amOsc, amOsc2;
let noiseSynth;

let num = 5;

let notes = ["E2","E3","E4","E3"];
let notesCounter = 0;

let storyTimer;

let loopMinorBeat, loop1, loop2, loop3;

function setLoops() {
  
  loopMinorBeat = new Tone.Loop((time) => {
      amOsc.triggerAttackRelease("C2", "16n", time);
      loopMinorShow = true;
      loopMinorCounter++;
  }, "2n");
  
  loop1 = new Tone.Loop((time) => {
      amOsc.triggerAttackRelease(notes[notesCounter], "16n", time);
      notesCounter = notesCounter<3?notesCounter+1:0; 
      loop1Show = true;
  }, "16n");
  
  loop2 = new Tone.Loop((time) => {
    for(i=0;i<floor(random(0,2));i++) {
        amOsc2.triggerAttackRelease("E"+floor(random(3,6)), "32n", time);
        loop2Show = true;
    }
  }, "8n");
  
  loop3 = new Tone.Loop((time) => {
    noiseSynth.triggerAttackRelease("C2", "32n", time);
    loop3Show = true;
    loop3Counter++;
  }, "4n");
  
  loop4 = new Tone.Loop((time) => {
    noiseSynth.triggerAttackRelease("C2", "64n", time);
    loop4Show = true;
    loop4Counter++;
  }, "32n");
  
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  
  storyTimer = floor(random(0,7));
  // storyTimer = 5;
  
  //Effects
  let freeverb = new Tone.JCReverb(0.95).toDestination();
  autoFilter = new Tone.AutoFilter("4n").connect(freeverb);
  let pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
  
  // Oscillators
  fmOsc = new Tone.FMOscillator().connect(autoFilter);
  fmOsc.frequency.value = 300;
  fmOsc.volume.value = -50;

  fmOsc2 = new Tone.FMOscillator().connect(autoFilter);  
  fmOsc2.frequency.value = 400;
  fmOsc2.volume.value = -50;
  
  // synths for notes
  amOsc = new Tone.FMSynth({
    oscillator: { type: "square" },
    envelope: {  attack: 0.5  }
  }).connect(freeverb);
  amOsc.volume.value = -20;
  
  const autoWah = new Tone.Distortion(0.8).toDestination();

  noiseSynth = new Tone.Synth().connect(autoWah);
  noiseSynth.volume.value = -10;
  
  amOsc2 = new Tone.FMSynth({ 
    oscillator: { type: "sine" },
    envelope: { attack: 0.2  }
  }).connect(pingPong);
  amOsc2.volume.value = 5;
  
  background(0);
}

function draw() {
  background(0);
  textSize(100);
  fill(255);
  noStroke();
  
  rectMode(CENTER);
  
  if(!playing)
    return false;
  
  if(fmOsc.state == "started") {
    rect((width/2)-150,height/2,10,abs(fmOsc.volume.value)*5);
    rect((width/2)+50,height/2,10,map(fmOsc.frequency.value,100,500,10,300)); 
  }
  
  if(fmOsc2.state == "started") {
    rect((width/2)-50,height/2,10,abs(fmOsc2.volume.value)*5);
    rect((width/2)+150,height/2,10,map(fmOsc2.frequency.value,100,500,10,300));
  }

  if(loopMinorBeat.state=="started") {
    push();
    noFill();
    stroke(255);
    for(i=0;i<10;i++) {
      circle(width/2,height/2,(i*40)+(loopMinorCounter*50));
    }    
    pop();
    
    if(loopMinorCounter > 16)
      loopMinorCounter = 0;
    
    loopMinorShow = false;
  }
 
  if(loop2Show) {
    let num = floor(random(0,4));
    
    switch (num) {
      case 0: circle((width/2)-100,(height/2)-100,40);
        break;
      case 1: circle((width/2)+100,(height/2)-100,40);
        break;  
      case 2: circle((width/2)-100,(height/2)+100,40);
        break;
      case 3: circle((width/2)+100,(height/2)+100,40);
    }
  
    loop2Show = false;
  }
  
  if(loop3.state=="started") {
    push();
    translate(width/2,height/2);
    noFill();
    stroke(255);
    for(i=0;i<PI*2;i+=0.3) {
      rotate(i+loop3Counter/100);
      rect(0,0,i*50);
    }    
    pop();
    loop3Show = false;
  }
  
  if(loop4Show) {
    circle(width/2,height/2, (10-loop4Counter)*50);
    loop4Show = false;
    loop4Counter = loop4Counter>10?0:loop4Counter;
  }
  
  if(playing) {
    if(random()>0.99) {
      mousePressed();
    } 
  }
}


function mousePressed() {
  if(!playing) {
    Tone.start();
    playing = true;    
    setLoops();
    autoFilter.start();
    Tone.Transport.start();
  }
  
  if(storyTimer == 0) {
    fmOsc.frequency.rampTo(400, 4);
    fmOsc.volume.rampTo(-40, 10);
    fmOsc.start();
  }
  if(storyTimer == 1) {
    fmOsc2.volume.rampTo(-40, 5);
    fmOsc2.start();
  }
  
  if(storyTimer == 2) {
    fmOsc2.volume.rampTo(-70, 5);
    fmOsc.volume.rampTo(-70, 10);
    loop2.start(0);
    loop3.stop();
  }
    
  if(storyTimer == 3) {
    loop3.start(0);
    fmOsc.volume.rampTo(-40, 10);
    loopMinorBeat.stop();
  }
  
  if(storyTimer == 4) {
    loop2.stop();
    fmOsc.frequency.rampTo(200, 4);
    fmOsc2.volume.rampTo(-70, 5);
    fmOsc2.stop();
  }
  
  if(storyTimer == 5) {
   loop4.start();
   setTimeout(() => {
      loop4.stop();
    }, 500);
  }
  
  if(storyTimer == 6) {
    loopMinorBeat.start(0);
  }

  storyTimer = floor(random(0,7));

  return false;
}