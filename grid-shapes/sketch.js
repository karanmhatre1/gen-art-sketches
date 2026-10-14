let grid = [];
let colors;
let gridDetails = 3;
let cols = 3;

function getGridVals() {
  
  let result = [];
  let vert = gridDetails;
  
  for(let i=0;i<gridDetails-1;i++) {
    let val = floor(random(1, vert/2));
    result[i] = val; 
    vert = vert - val;
  }
  
  result[gridDetails-1] = vert;
  
  return result;
}

function setup() {
  createCanvas(600, 600);
  
  frameRate(5);
  
  colors = [0, 25, 50, 75, 100, 125, 150, 175, 200];
  
  for(let i = 0;i<cols;i++) {
    grid.push(getGridVals());
  }
  
  // noLoop();
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  
  let vert = 0;
  
  // gridDetails = map(mouseX, 0, 100, 0, width, true);
  
  for(let i = 0 ; i < cols ; i++) {
    
    let w = width/cols;
    
    for(let j=0;j<gridDetails;j++) {
      let h = width/gridDetails;

      drawShape(i*w,vert,w,h*grid[i][j]);
      vert += h*grid[i][j];
    }
    vert = 0;
  }
}

function drawShape(x,y,w,h) {
  
  let val = floor(random(6));
  
  fill(255);
  rect(x,y,w,h);
  
  push();
  
  if(val == 0) {
    noStroke();
    // stroke(0);
    fill(random(colors));
    ellipse(x+w/2, y+h/2, w, h);  
  }
  
  if(val == 1) {
    noStroke();
    // stroke(0);
    fill(random(colors));
    rect(x,y,w,h);
  }
  
  if(val == 2) {
    // stroke(0);
    noStroke();
    fill(random(colors));
    quad(x+w/2, y, 
         x+w, y+h/4, 
         x+w/2, y+h/2, 
         x, y+h/4, 
        );
    
    fill(random(colors));
    quad(x+w/2, y+h/2, 
         x+w, y+h/4,
         x+w,y+h*0.75,
         x+w/2,y+h
        );
    
    fill(random(colors));
    quad(x,y+h*0.75,
         x+w/2,y+h,
         x+w/2, y+h/2, 
         x, y+h/4,
        );
  }
  
  if(val == 3) {
    noStroke();
    fill(random(colors));
    rect(x,y+h/4,w,h/2);
    
    // fill(random(colors));
    ellipse(x+w/2, y+h/4, w, h/2);
    
    fill(random(colors));
    ellipse(x+w/2+noise(x), y+h*0.75, w, h/2);
  }
  
  if(val == 4) {
    fill(random(colors));
    stroke(0);
    strokeWeight(5)
    line(x,y,x+w, y+h);
  }
  
  if(val == 5) {
    fill(random(colors));
    stroke(0);
    strokeWeight(5)
    line(x,y,x+w, y+h);
    line(x+w,y,x, y+h);
  }
    
  pop();
}

// function mousePressed() {
//   loop();
//   noLoop();
//   return false;
// }