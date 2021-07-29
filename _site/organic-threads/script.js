
var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var strokeWidth = 1;
var offset = 5;
var layerCount = 2;

var lineSize = 1;
// var colors = ["#05111F","#0186CF", "#FF751A", "#FED618"];

// var colors = ["#0CECDD","#FFF338", "#FF67E7", "#C400FF"];

// var colors = ["#0F044C","#141E61", "#787A91", "#EEEEEE"];

// var colors = ["#54436B","#50CB93", "#71EFA3", "#ACFFAD"];

view.onMouseMove = function(e) {
  
}

x = [];
y = [];
// project.clear();

var radiusScale = 5+Math.random()*10;
var startPointX = getRandomInt(canvasWidth/100, canvasWidth);
var startPointY = getRandomInt(canvasHeight/100, canvasHeight);
var count = 50+Math.random()*150;
var lineCount = 5+Math.random()*25;


bend = 5;
bendOffset = 2.5;

for(i=0;i<lineCount;i++) {
  x[i] = startPointX;
  y[i] = startPointY;
}

var TimeCounter = 0;

view.onFrame = function(e) {

  if(TimeCounter<count) {
    for(i=0;i<lineCount;i++) {
      var circle = new Path.Circle([x[i],y[i]], Math.random()*radiusScale);
      // circle.fillColor = colors[getRandomInt(0,colors.length)];
      // circle.fillColor = new Color((TimeCounter)/count, 0.5, 0.5);
      circle.fillColor = '#000';
      circle.opacity = 0.6;
      // circle.shadowColor = '#000';
      // circle.shadowBlur = 10;

      x[i]=x[i]+Math.sin(i)+(bendOffset-Math.random()*bend);
      y[i]=y[i]+Math.cos(i)+(bendOffset-Math.random()*bend);
    }
  }

  TimeCounter++;

  if(TimeCounter>count+50) {
    project.clear();
    
    var randColor = Math.random();
    
    // if(randColor > 0.8) {
    //   colors = ["#05111F","#0186CF", "#FF751A", "#FED618"];
    // }
    // else if(randColor > 0.6) {
    //   colors = ["#0CECDD","#FFF338", "#FF67E7", "#C400FF"];
    // }
    // else if(randColor > 0.4) {
    //   colors = ["#0F044C","#141E61", "#787A91", "#EEEEEE"];
    // }
    // else {
    //   colors = ["#54436B","#50CB93", "#71EFA3", "#ACFFAD"];
    // }    

    TimeCounter = 0;

    radiusScale = 5+Math.random()*10;
    startPointX = getRandomInt(canvasWidth/100, canvasWidth);
    startPointY = getRandomInt(canvasHeight/100, canvasHeight);
    count = 50+Math.random()*150;
    lineCount = 5+Math.random()*25;

    bend = 5;
    bendOffset = 2.5;

    for(i=0;i<lineCount;i++) {
      x[i] = startPointX;
      y[i] = startPointY;
    }
  }
    
} 

tool.onKeyDown = function(event) {
  if (event.character == 'p') {
      downloadImage();
      return false;
  }
}


function downloadImage() {

  console.log("here");
  var image = project.exportSVG({asString:true});
  // var image = document.getElementById('myCanvas').toDataURL();
  var aDownloadLink = document.createElement('a');

  aDownloadLink.download = 'poster-karanmhatre-dot-com-'+Date.now()+'.svg';

  aDownloadLink.href = "data:image/svg+xml;utf8," + encodeURIComponent(image);

  aDownloadLink.click();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// project.clear();