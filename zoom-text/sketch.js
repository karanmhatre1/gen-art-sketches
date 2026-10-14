let img;
let theShader;
let text = "press delete to reset text";

function preload() {
  theShader = loadShader('basic.vert', 'basic.frag');
}

let animation = 0;

let rand = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  img = createGraphics(600,600);
  for(j=0;j<50;j++) {
    rand[j] = random(40);
  }
}

function draw() {
  img.background(255,230,0);
  img.fill(0);
  img.rectMode(CENTER);
  img.textAlign(CENTER);

  img.textSize(40);
  img.text(text, 300, 300, 2600, 40);
  
  for(i=1;i<animation;i++) {
    img.textSize(40-i*4);
    img.text(text, 300, 300+i*40, 2600, 40);
  }
  
  for(i=1;i<animation;i++) {
    img.textSize(40-i*4);
    img.text(text, 300, 300-i*40, 2600, 40);
  }
  
  if(animation<30)
    animation+=0.2;
  
  theShader.setUniform('u_resolution', [width*pixelDensity(),
                                        height*pixelDensity()]);
  theShader.setUniform('u_mouse', [mouseX,mouseY]);
  theShader.setUniform('time', 20+frameCount/10);
  theShader.setUniform('tex', img);
  shader(theShader);
  rect(-300,-300,600,600);
  // image(img,-width/2,-height/2, width, height);
}

function keyPressed() {
  animation = 0;
  
  if(keyCode == ENTER) {
    text+="\n";
    return false;
  }
  
  if(keyCode == SHIFT) {
    return false;
  }
  if(keyCode == BACKSPACE | keyCode == DELETE) {
    text = "";
    return false;
  }

  text+=key;

}