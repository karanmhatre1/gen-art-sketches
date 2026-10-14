let vid;
let myShader;

function preload() {
  myShader = loadShader('basic.vert', 'basic.frag');
}

let can;

function setup() {
  can = createCanvas(600, 600, WEBGL);
  frameRate(30);
  let constraints = {
    mandatory: {
        minWidth: 600,
        minHeight: 600
      },
    video: {
      optional: [{ maxFrameRate: 30 }]
    },
    audio: false
  };
  
  vid = createCapture(constraints, function(stream) {
    
  });
  
  vid.hide();
}

function draw() {
  background(255);
  let c = vid.get(0, 0, 600, 480);
  c.resize(600, 0);
  
  shader(myShader);
  myShader.setUniform('tex', c);
  myShader.setUniform('time', frameCount);
  
  let freq = 20.0;
  let amp = 0.02;

  myShader.setUniform('frequency', freq);
  myShader.setUniform('amplitude', amp);
  myShader.setUniform('mouse', [mouseX, mouseY]);
  myShader.setUniform('u_resolution', [600,600]);

  rect(10,10,10,10);
}

function mousePressed() {
  saveCanvas(can, 'photo', 'png')
}