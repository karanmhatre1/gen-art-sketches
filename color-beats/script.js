
var colors = ['#FB9300', '#F54748', '#F5E6CA', '#343F56'];
var start = false;
var spasm = false;

var beats = [];
var raster = new Raster('https://res.cloudinary.com/dgksx9vlc/image/upload/v1626003468/head_wwozvr.png');

// Move the raster to the center of the view
raster.position = view.center;
raster.scale(0.6);

for(var i=0; i< getRandomInt(10,30); i++) {
  var getSynth = generateRandomLoop();
  beats[i] = {
    status: false,
    color: getSynth.color,
    freq: getSynth.freq,
    loop: getSynth.beat,
    btn : null
  };
}

console.log(beats);

for(var i =0 ; i<beats.length; i++) {

  var whatShape = getRandomInt(0,2);
  
  if(whatShape == 0)
    var btn = new Path.Circle([getRandomInt(50, view.size.width-50), getRandomInt(50, view.size.width-50)], beats[i].freq*5);
  else if(whatShape == 1) {
    var btn = new Path.Rectangle([getRandomInt(50, view.size.width-50), getRandomInt(50, view.size.width-50)], [beats[i].freq*5, 10]);
    btn.rotate(45);
  }
  else 
    var btn = new Path.RegularPolygon([getRandomInt(50, view.size.width-50), getRandomInt(50, view.size.width-50)], 6, beats[i].freq*5);
  
  beats[i].btn = btn;

  btn.fillColor = beats[i].color;

  btn.onClick = function(e) {
    beatSwtich(e)
  }
}

function beatSwtich(e) {

  var selectedBeat = null;

  if(start == false) {
    start = true;
    Tone.start();
    Tone.Transport.start(0);
  }

  for(var i =0 ; i<beats.length; i++) {
    if(beats[i].btn.position == e.target.position) {
      selectedBeat = beats[i];
    }
  }

  if(selectedBeat != null) {
    if(selectedBeat.status == false) {
      selectedBeat.loop.start();
      selectedBeat.status = true;
    }
    else {
      e.target.fillColor = selectedBeat.color;
      selectedBeat.btn.fillColor = selectedBeat.color;
      selectedBeat.loop.stop();
      selectedBeat.status = false;
    }
  }

  var counter = 0;

  for(var i =0 ; i<beats.length; i++) {
    if(beats[i].status == true) {
      counter++;
    }
  }

  if(counter > 1) {
    spasm = true;
  }
  else {
    spasm = false;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  return colors[getRandomInt(0,colors.length-1)];
}

function generateRandomLoop() {

  var scales = ["A","B","C","D","E","F","G"];
  var noOfBeats = getRandomInt(1,6);
  var scale = scales[getRandomInt(0, scales.length-1)];
  var notes = [];

  var freq = getRandomInt(1,16);

  var synths = [
    {
      tone: new Tone.MonoSynth().toDestination(),
      color: '#F30908'
    },
    {
      tone: new Tone.FMSynth().toDestination(),
      color: '#E5E509'
    },
    {
      tone: new Tone.MembraneSynth().toDestination(),
      color: '#0780FF'
    }
  ];

  var synth = synths[getRandomInt(0,synths.length-1)];
  
  for(var i=0; i<noOfBeats; i++) {
    notes.push(scale+getRandomInt(1,3));
  }

  var beat = new Tone.Sequence(function(time, note) {
    synth.tone.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    freq+"n"
  );

  return {beat:beat, color: synth.color, freq: freq};
}

view.onFrame = function(e) {
  if(spasm) {
    var ran = Math.abs(Math.sin(e.time*10))*50;
    document.body.style.backgroundColor = "hsl("+ ran +", 100%, 50%)";
    raster.position.y += Math.sin(e.time)*0.3;
  }
  else {
    document.body.style.backgroundColor = "#fff";
  }

  for(var i =0 ; i<beats.length; i++) {
    if(beats[i].status == true) {
      beats[i].btn.fillColor = '#000';
    }
  }
}

function cleanCanvas() {    

  for(var i=0;i<beats.length-1;i++) {
    beats[i].loop.stop();
  }

  project.activeLayer.removeChildren();
}