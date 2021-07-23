
var offset = 200;

var gui = new dat.GUI();

var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var params = {
  xStart : 100,
  xStep : 10,
  yStart : 70,
  yStep : 50,
  sizeScale : 1,
  columnCount: 10,
  rowCount: 30,
  startSize: 0,
};

gui.add(params, 'xStart', 0, 500, 1);
gui.add(params, 'xStep', 0, 200, 1);
gui.add(params, 'yStart', 0, 500, 1);
gui.add(params, 'yStep', 0, 200, 1);
gui.add(params, 'sizeScale', -2, 2, 0.1);
gui.add(params, 'columnCount', 2, 30, 1);
gui.add(params, 'rowCount', 2, 100, 1);
gui.add(params, 'startSize', 0, 30, 0.1);

var count = 0;

view.onFrame = function(e) {
  
  project.clear();

  for(j=0;j<params.rowCount;j++) {
    for(i=0;i<params.columnCount;i++) {

      if(i%2 == 0) {
        var x = params.xStart+params.xStep*j;
        var y = params.yStart+i*params.yStep;
        var radius = params.startSize+j*params.sizeScale;

      }
      else {
        var x = canvasWidth-params.xStart-params.xStep*j;
        var y = params.yStart+i*params.yStep;
        var radius = params.startSize+j*params.sizeScale;
      }

      var myCircle = new Path.Circle([x,y],radius);
      myCircle.fillColor = '#000';
      myCircle.strokeWidth = 1;
      myCircle.strokeColor = '#fff';
    
    }
  }

} 