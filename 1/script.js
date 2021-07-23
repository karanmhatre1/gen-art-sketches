
var rowCount = 80;

var offset = 100;

var canvasWidth = view.size.width; 
var canvasHeight = view.size.height;

var step = (canvasWidth-offset)/rowCount;

var size = step*0.2;

var angle = 0;

function movePoints(p) {
  var options = {
    fill: true,
    stroke: false,
    tolerance: 30
  };

  // var options2 = {
  //   fill: false,
  //   stroke: true,
  //   tolerance: 30
  // };

  var hitResult = project.hitTestAll(p,options);
  // var hitResult2 = project.hitTestAll(e.point,options2);

  if(hitResult.length>0) {
    for(var i=0;i<hitResult.length;i++) {
      hitResult[i].item.position.x += Math.random()*2*(hitResult[i].item.position.x-p.x);
      hitResult[i].item.position.y += Math.random()*2*(hitResult[i].item.position.x-p.x);
    }
  }
}

view.onMouseMove = function(e) {
  movePoints(e.point);
}

for(var i=1; i<rowCount; i++) {
  for(var j=1; j<rowCount; j++) {
    var random = Math.random();
    var rect = new Path.Circle([offset/2+(i*step), offset/2+(j*step)], size*random);
    rect.fillColor="#fff";

    // var path = new Path([offset/2+(i*step), offset/2+(j*step)]);
    // path.lineTo([path.position.x+2, path.position.y+2]);
    // path.strokeWidth = 1;
    // path.strokeColor = '#fff';
  }
}

var mover = new Path.Circle([100,290], 5);

// mover.strokeColor= '#fff';
// mover.fillColor = '#000';
var moveOffset = 30;

var mover2 = new Path.Circle([300,200], 5);
// mover2.strokeColor= '#fff';

view.onFrame = function(e) {

  if(e.count%1==0) {
    mover.position.x+=Math.sin(e.count*0.1)*20;
    mover.position.y+=Math.cos(e.count*0.1)*20;
    movePoints(mover.position);

    // mover2.position.x+=(moveOffset/2-Math.random()*moveOffset);
    // mover2.position.y+=(moveOffset/2-Math.random()*moveOffset);
    // movePoints(mover2.position);
  }
  // project.clear();
} 