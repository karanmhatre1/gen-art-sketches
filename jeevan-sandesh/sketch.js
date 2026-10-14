let img;
let myFont;
let myShader;

function preload() {
  myFont = loadFont('Hind-Medium.ttf');
}

function setup() {
  createCanvas(600, 600);
  img = createGraphics(600,600);
  img.noStroke();
}

function draw() {
  background(0);
  fill(255);
  textSize(240);
  textFont(myFont);
  
//   for(i=0;i<10;i++) {
//     fill(i%2==0?0:255);
//     rect(i*30,0,30,height);
//   }
  
  for(i=0;i<50;i++) {
    // fill(i%2==0?0:255);
    fill(i*10,i*5,i*15);
    text("जीवन",i*5-150, 250+sin(i*0.2+frameCount*0.1)*25);
  }
  
  for(i=0;i<50;i++) {
    fill(i%2==0?0:255);
    text("संदेश",300-i*5, 550+sin(i*0.2+frameCount*0.1)*25);
  }
  // text("संदेश",50, 500);
  
}