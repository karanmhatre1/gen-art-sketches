let img;
let theShader;
let text = "press delete to reset text";

function preload() {
  theShader = loadShader('basic.vert', 'basic.frag');
}

let rand = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = createGraphics(windowWidth,windowHeight);
  for(j=0;j<50;j++) {
    rand[j] = random(40);
  }
}

function draw() {
  img.background(0,0,255);
  img.fill(255);
  
  for(i=0;i<14;i++) {
    for(j=0;j<45;j++) {
      img.textSize(abs(sin(i+frameCount/100)*10));
      img.text(text,
               (80*i)+(5*j)-300+random(4) + rand[j],
               14*j+random(4));
    }
  }
  
  img.textSize(60);
  img.text(text, 120+random(4), 520+random(4));
  
  theShader.setUniform('u_resdsolution', [width*pixelDensity(),
                                        height*pixelDensity()]);
  theShader.setUniform('u_mouse', [mouseX,mouseY]);
  theShader.setUniform('time', 20+frameCount/10);
  theShader.setUniform('tex', img);
  // shader(theShader);
  // rect(-200,-300,600,600);
  image(img,-width/2,-height/2, width, height);
}

function keyPressed() {
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