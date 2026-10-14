let theShader;
let myFont;

function preload() {
  myFont = loadFont('BenchNine-Bold.ttf');
  theShader = loadShader('basic.vert', 'basic.frag');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  fill(255);
  textFont(myFont);
  textSize(118);
  theShader.setUniform('u_resolution', [width*pixelDensity(),height*pixelDensity()]);
  theShader.setUniform('u_mouse', [mouseX,mouseY]);
  theShader.setUniform('u_time', frameCount/50);
  // text('KUDDELMUDDEL', -300, 0); 
  shader(theShader);
  rect(-200,-200,400,400);
}