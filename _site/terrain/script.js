
var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var strokeWidth = 1;
var offset = 5;
var layerCount = 2;

// var circle = new Path.Circle([300,300], 2);
// circle.fillColor='#000';

var lineSize = 1;
var colors = ["#05111F","#0186CF", "#FF751A", "#FED618"];


view.onMouseMove = function(e) {
  // var circle = new Path.Circle(e.point, 2);
  // circle.fillColor='#000';
  // view.rotate(((600-e.point.x)/600));
  // console.log(e.point.x/600);
}

project.clear();

  var x = 400;
  var y = -40;
  var count = 0;
  
  var circle = new Path([x,y]);
  // circle.strokeColor = '#000';
  // circle.strokeWidth = 0.5;
  circle.fillColor='#000';
  // circle.opacity = 0.4;

function reset() {

  project.clear();
  x = 400;
  y = -40;
  count = 0;

  circle = new Path([x,y]);
  circle.fillColor='#000';

}

view.onFrame = function(e) {
  
  if(count < 200) {
    circle.lineTo([x,y]);
    x= x -5 + Math.random()*10;
    y= y + Math.random()*10;
  }

  if(count > 200 && count < 500) {
    circle.lineTo([x,y]);
    x= x + 5 - Math.random()*20;
    y= y - Math.random()*10;
  }

  if(count>200){
    // circle.lineTo([300,100]);
  }

  count++;
}

tool.onKeyDown = function(event) {
  if (event.character == 'r') {
    reset();
    return false;
  }
  if (event.character == 'p') {
    downloadImage();
    return false;
  }
}


function downloadImage() {
  var image = document.getElementById('myCanvas').toDataURL();
  var aDownloadLink = document.createElement('a');

  aDownloadLink.download = 'poster-karanmhatre-dot-com-'+Date.now()+'.png';

  aDownloadLink.href = image;

  aDownloadLink.click();
}

// project.clear();