let img;
let myFont;
let myShader;

function preload() {
  myFont = loadFont('Hind-Medium.ttf');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  img = createGraphics(600,600, WEBGL);
  img.noStroke();
}

function draw() {
  
  ambientLight(100, 100, 100);
  pointLight(255, 255, 255, -300, -300, 300);
  pointLight(255, 255, 255, 300, -300, 300);
  // pointLight(255, 255, 0, 300, -300, 300);
  // pointLight(0, 255, 0, 300, 0, 300);
  
  background(255);
  img.background(0);
  img.fill(255);
  img.textSize(150);
  img.noStroke();
  img.textFont(myFont);
  img.text("मोह", -250,-100);
  img.text("मोह", -250, 40);
  img.text("मोह", -250, 200);
  img.text("माया", 0, -100);
  img.text("माया", 0, 40);
  img.text("माया", 0, 200);
  
  ambientMaterial(250);
  texture(img);
  
  // rotateX(-0.8);
  
    push();
    translate(-150,-150);
    rotateZ(-0.5);
    rotateY(9-frameCount*0.005);
    sphere(100, 50, 50);
    pop();
  
    push();
    translate(150,-150);
    rotateZ(-0.5);
    rotateY(6-frameCount*0.005);
    sphere(100, 50, 50);
    pop();
  
    push();
    translate(-150,150);
    rotateZ(-0.5);
    rotateY(6-frameCount*0.005);
    sphere(100, 50, 50);
    pop();
    
    push();
    translate(150,150);
    rotateZ(-0.5);
    rotateY(9-frameCount*0.005);
    sphere(100, 50, 50);
    pop();
}