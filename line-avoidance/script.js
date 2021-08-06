
var font;
let mySound;

var amplitude;
var linesArr = [];
let level;

var value = 0;

function preload() {
  font = loadFont('https://res.cloudinary.com/dgksx9vlc/raw/upload/v1628228990/createwithcode/guten-morgen-type-pull/Montserrat-Regular_kj3et7.otf');
  // soundFormats('mp3', 'ogg');
  // mySound = loadSound('https://res.cloudinary.com/dgksx9vlc/video/upload/v1628235820/createwithcode/Ophir_Ilzetzki_-_Seed_2007_qd39tq.mp3');
}

function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  
  // amplitude = new p5.Amplitude();
  // amplitude.setInput(mySound);

  textAlign(CENTER, CENTER);

  pixelDensity(2.0);
  background(0);

  reset(true);

  fill(255);
  textFont(font, 500);
}

function reset(b=false) {
  background(0);

  rectStartX = (width/2)-200;
  rectStartY = (height/2)-200;

  strokeWeight(3);
  fill(0);
  stroke(255);
  rect(rectStartX, rectStartY, 400, 400);
  

  for(i=0;i<100;i++) {

    strokeWeight(min((i+1),3));

    x1 = rectStartX;
    if(i>0)
      y1 = random(linesArr[i-1][0][1],rectStartY+400);
    else 
      y1 = random(rectStartY,rectStartY+200);
    x2 = rectStartX+400;

    if(i>0)
      y2 = random(linesArr[i-1][1][1], rectStartY+400);
    else 
      y2 = random(rectStartY, rectStartY+200);

    while(isIntersecting([[x1, y1], [x2, y2]], i)) {
    
      x1 = rectStartX;
      if(i>0)
        y1 = random(linesArr[i-1][0][1],rectStartY+400);
      else 
        y1 = random(rectStartY,rectStartY+200);

      x2 = rectStartX+400;

      if(i>0)
        y2 = random(linesArr[i-1][1][1], rectStartY+400);
      else 
        y2 = random(rectStartY, rectStartY+200);
    }

    linesArr[i] = [
      [x1, y1], [x2, y2]
    ];

    line(x1,y1, x2, y2);
  }

  // textFont(font, 500);
  // text(floor(random(0,10)), (width/3)-300, (height/2)-50);
  // text(floor(random(0,10)), (width*2/3)+300, (height/2)-50);

}

function draw() {

  // level = amplitude.getLevel();

  // if(level > 0.1) {
    // reset();
    // value = 1;
  // }
  // else {
    // value = 0;
  // }
}

function isIntersecting(points, count) { 

  for(j=0;j<count;j++) {
    var point = intersect_point(points[0], points[1], linesArr[j][0], linesArr[j][1]);

    if(point[0] > 100 && point[0] < 500) {
      if(point[1] > 100 && point[1] < 500) {
        return true;
      }
    }
  }

  return false;

}

function intersect_point(point1, point2, point3, point4) {
  const ua = ((point4[0] - point3[0]) * (point1[1] - point3[1]) - 
            (point4[1] - point3[1]) * (point1[0] - point3[0])) /
           ((point4[1] - point3[1]) * (point2[0] - point1[0]) - 
            (point4[0] - point3[0]) * (point2[1] - point1[1]));
 
 const ub = ((point2[0] - point1[0]) * (point1[1] - point3[1]) - 
            (point2[1] - point1[1]) * (point1[0] - point3[0])) /
           ((point4[1] - point3[1]) * (point2[0] - point1[0]) - 
            (point4[0] - point3[0]) * (point2[1] - point1[1]));
 
 const x = point1[0] + ua * (point2[0] - point1[0]);
 const y = point1[1] + ua * (point2[1] - point1[1]);
 
 return [x, y]
}

function keyPressed() {
  if(key === 'g') {
    reset();
  }
}