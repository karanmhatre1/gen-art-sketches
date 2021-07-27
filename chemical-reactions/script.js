var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var offset = 15;
var layerCount = 1;

var colors = ["#222","#333","#444","#666"];

function draw() {
  for(i=0;i<=Math.PI*100;i++) {

    x = 300-Math.sin(i/100)*200;
    y = 300-Math.cos(i/100)*200;
  
    if(i%offset == 0) {
      for(k=0;k<(300-x)*2;k++) {
        if(k%5==0) {
          if(Math.random() > 0.4) {
            var circle = new Path.Circle([x+k,y], Math.random()*10);
            circle.fillColor='#000';
          }
        }
      }
    }
  }
}

draw();

tool.onKeyUp = function(e) {
  // view.rotate(((600-e.point.x)/600));
  // console.log(e.point.x/600);
  if(e.character="r") {
    project.clear();
    draw();
  }
}

 
view.onFrame = function(e) {

  
} 