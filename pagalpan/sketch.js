let img;
let myFont;
let myShader;

function preload() {
  myShader = loadShader('basic.vert', 'basic.frag');
  myFont = loadFont('Hind-Medium.ttf');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  img = createGraphics(600,600, WEBGL);
  img.noStroke();
}

function draw() {
  img.background(0);
  img.fill(255);
  // for(i=1;i<19;i++) {
  //   img.rect(-300+i*30,-270, 20, 540);
  // }

  img.textSize(130);
  img.noStroke();
  img.textFont(myFont);
  img.text("पागलपन", -220, -100);
  img.text("पागलपन", -220, 0);
  img.text("पागलपन", -220, 100);
  img.text("पागलपन", -220, 200);
  
  // image(img, 0, 0);
  shader(myShader);
  myShader.setUniform('tex', img);
  myShader.setUniform('time', frameCount);

  let freq = 20.0;
  let amp = 0.02;

  myShader.setUniform('frequency', freq);
  myShader.setUniform('amplitude', amp);
  myShader.setUniform('u_resolution', [600,600]);

  rect(10,10,10,10);
}