let theShader;

function preload() {
  theShader = loadShader('basic.vert', 'basic.frag');
}


function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  fill(255);
  textSize(118);
  theShader.setUniform('u_resolution', [width*pixelDensity(),height*pixelDensity()]);
  theShader.setUniform('u_mouse', [mouseX,mouseY]);
  theShader.setUniform('u_time', frameCount/50);
  shader(theShader);
  rect(-200,-200,600,600);
}