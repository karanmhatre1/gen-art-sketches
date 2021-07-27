/* palette

66F1BC
8370F0
D898E5
EEFF66

05111F
0186CF
FF751A
FED618

*/

var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var strokeWidth = 2;
var offset = 1;
var layerCount = 20;

var circle = new Path.Circle([300,300], 200);
// circle.fillColor='#000';

var lineSize = 1;

// var colors = ["#05111F","#0186CF", "#FF751A", "#FED618"];

var colors = ["#222","#333","#444","#fff"];
// var colors = ["#000","#ddd"];
var colors = ['white','red','blue'];

// view.rotate(-30);

tool.onKeyDown = function(e) {

  if(e.character=='1') {
    view.scale(1.4);
  }

  if(e.character=='2') {
    view.scale(0.7);
  }

  if(e.character=='3') {
    colors = ["#222","#333","#444","#fff"];
  }

  if(e.character=='4') {
    colors = ['red','blue'];
  }

  if(e.character=='5') {
    view.rotate(30);
  }
}

view.onFrame = function(e) {

  if(e.count%2==0) {

    project.clear();

    for(j=1;j<=layerCount;j++) {

      for(i=0;i<=Math.PI*100;i++) {
    
        x = 300-Math.sin(i/100)*200;
        y = 300-Math.cos(i/100)*200
        // shape.lineTo(x, y);
      
        if(i%offset==0) {
    
          var newX = (x+lineSize*Math.random())-(j*Math.random()*50);
          newX = newX<x?x:newX;
    
          var line = new Path([x, y],[newX, y]);
          line.strokeColor=colors[j%4];
          line.strokeWidth = strokeWidth;
        }
        lineSize=(300-x)*2;
      }  
    }
  }

} 

