var lineCount = 7;
var offset = 200;

var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var step = (canvasHeight-offset)/lineCount;
var size = step;

view.onMouseMove = function(e) {

}

view.onFrame = function(e) {

  if(e.count<90) {

    for(i=1;i<lineCount;i++) {
      if(i%2 == 0) {
        var myCircle = new Path.Circle([offset+e.count*7,offset+i*step],100-e.count);
        // myCircle.fillColor = '#000';
        myCircle.strokeWidth = 2;
        myCircle.strokeColor = '#fff';
      }
      else {
        var myCircle = new Path.Circle([canvasWidth-offset-e.count*7,offset+i*step], 100-e.count);
        // myCircle.fillColor = '#000';
        myCircle.strokeWidth = 2;
        myCircle.strokeColor = '#fff';
      }
    }

  }

} 

// project.clear();