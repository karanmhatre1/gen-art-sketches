let gridSize = 50;
let isDraw = false;

let starter;

let hoverState = [];

function setup() {
  createCanvas(600, 600);
  starter = [random(width), random(height)];
  // noLoop();
  // loop();
  strokeWeight(3);
  background(0, 0, 0, 0);
}

function draw() {
  strokeWeight(3);
  for(let i=1;i<width/gridSize;i++) {
    for(let j=1;j<height/gridSize;j++) {
      point(i*gridSize,j*gridSize);    
    }
  }
}

function drawCurve(x1, y1, type) {
  x2 = x1+gridSize;
  y2 = y1+gridSize;
  noFill();
  beginShape();
  if(type == 1) {
    vertex(x1,y2);
    quadraticVertex(x1, y1, x2, y1);
  }
  
  if(type == 2) {
    vertex(x1,y1);
    quadraticVertex(x2, y1, x2, y2);
  }
  
  if(type == 3) {
    vertex(x2,y1);
    quadraticVertex(x2, y2, x1, y2); 
  }
  
  if(type == 4) {
    vertex(x2,y2);
    quadraticVertex(x1, y2, x1, y1);
  }
    
  
  endShape();
}

function drawHorizontalLine(x1,y1) {
  x2 = x1+gridSize;
  y2 = y1;
  line(x1,y1,x2,y2);
  fill(0);
  beginShape();
  
  vertex(x1,y1);
  
  curveHeight = gridSize*0.26;
  
  bezierVertex(x1+gridSize*0.16, y1, x1+gridSize*0.3, y1-curveHeight, 
               x1+gridSize/2, y1-curveHeight);
  
  bezierVertex(x1+gridSize*0.6, y1-curveHeight, x1+gridSize*0.83, y1, 
               x2, y2);
  
  bezierVertex(x1+gridSize*0.83, y1, x1+gridSize*0.6, y1+curveHeight, 
               x1+gridSize/2, y1+curveHeight);
  
  bezierVertex(x1+gridSize*0.3, y1+curveHeight, x1+gridSize*0.16, y1, 
               x1, y1);
  endShape();
}


function mouseClicked() {
  // isDraw = !isDraw;
  drawLine();
  // x1 = floor(mouseX/gridSize)*gridSize;
  // y1 = floor(mouseY/gridSize)*gridSize;
}

function mouseMoved() {
  if(isDraw)
    drawLine();

}

function drawLine() {
  x1 = floor(mouseX/gridSize)*gridSize;
  y1 = floor(mouseY/gridSize)*gridSize;
  
  if((mouseX%gridSize < gridSize*0.1 | 
    mouseX%gridSize > gridSize*0.9)) {
    
    if(mouseY%gridSize < gridSize*0.1 | mouseY%gridSize > gridSize*0.9) {
      return false;
    }
    
    if(mouseX%gridSize < gridSize*0.1) {
      y1 = floor(mouseY/gridSize)*gridSize;
      drawVerticalLine(x1,y1); 
      return false;
    }
    else {
      x1 = ceil(mouseX/gridSize)*gridSize;
      y1 = floor(mouseY/gridSize)*gridSize;
      drawVerticalLine(x1,y1); 
      return false;
    }
  }
  
  else {
    if(mouseY%gridSize < gridSize*0.1) {
      y1 = floor(mouseY/gridSize)*gridSize;
      drawHorizontalLine(x1,y1);
      return false;
    }

    if(mouseY%gridSize > gridSize*0.9) {
      y1 = ceil(mouseY/gridSize)*gridSize;
      drawHorizontalLine(x1,y1);
      return false;
    } 
  }
  
  if(mouseX%gridSize < gridSize*0.5 && mouseY%gridSize < gridSize*0.5) {
    drawCurve(x1, y1, 1);
    return false;
  }
  
  if(mouseX%gridSize > gridSize*0.5 && mouseY%gridSize < gridSize*0.5) {
    drawCurve(x1, y1, 2);
    return false;
  }
  
  if(mouseX%gridSize > gridSize*0.5 && mouseY%gridSize > gridSize*0.5) {
    drawCurve(x1, y1, 3);
    return false;
  }
  
  if(mouseX%gridSize < gridSize*0.5 && mouseY%gridSize > gridSize*0.5) {
    drawCurve(x1, y1, 4);
    return false;
  }
}


function drawVerticalLine(x1,y1) {
  x2 = x1;
  y2 = y1+gridSize;
  
  fill(0);
  strokeWeight(3);
  line(x1,y1,x2,y2);
  
  curveHeight = gridSize*0.26;
  
  beginShape();
  
  vertex(x1,y1);
  
  bezierVertex(x1, y1+gridSize*0.16, x1-curveHeight, y1+gridSize*0.3, 
               x1-curveHeight, y1+gridSize/2);
  
  bezierVertex(x1-curveHeight, y1+gridSize*0.6, x1, y1+gridSize*0.83, 
               x2, y2);
  
  bezierVertex(x1, y1+gridSize*0.83, x1+curveHeight, y1+gridSize*0.6, 
               x1+curveHeight, y1+gridSize/2);
  
  bezierVertex(x1+curveHeight, y1+gridSize*0.3, x1, y1+gridSize*0.16, 
               x1, y1);
  endShape();
}
