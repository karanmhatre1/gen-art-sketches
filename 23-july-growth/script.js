
var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var strokeWidth = 1;
var offset = 5;
var layerCount = 2;

var circle = new Path.Circle([300,300], 200);
// circle.fillColor='#000';

var lineSize = 1;
// var colors = ["#05111F","#0186CF", "#FF751A", "#FED618"];

var colors = ["#222","#333","#444","#666"];
// var colors = ["#000","#ddd"];
// var colors = ['white', 'red','blue'];

for(j=0;j<layerCount;j++) {

  for(i=0;i<=Math.PI*100;i++) {

    x = 300-Math.sin(i/100)*200;
    y = 300-Math.cos(i/100)*200;

    if(i%offset == 0) {
      for(k=0;k<(300-x)*2;k++) {
        if(k%5==0) {
          if(Math.random() > 0.6) {
            var circle = new Path.Circle([x+k,y], (x)*0.06*Math.random());
            circle.fillColor='#000';
          }
        }
      }
    }
  }  
}

// view.rotate(-30);

view.onMouseMove = function(e) {
  // view.rotate(((600-e.point.x)/600));
  // console.log(e.point.x/600);
}

view.onFrame = function(e) {

} 

// project.clear();