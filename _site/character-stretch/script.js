
var params = {
  gap: 50,
  height: 50,
  stick: 0.5,
  shadow: 0
};

var controls = new dat.GUI();

controls.add(params, 'gap', 50, 500).listen();
controls.add(params, 'height', 50, 500).listen();
controls.add(params, 'stick', 0.1, 1, 0.1).listen();
controls.add(params, 'shadow', 0, 300, 1).listen();

tool.onKeyDown = function(e) {

  switch(e.character) {
    case '1':
      if(params.gap >= 40) {
        params.gap = params.gap-20;
      }
      else {
        params.gap = 30;
      }
      break;

    case '2':
        if(params.gap <= 490) {
          params.gap = params.gap+20;
        }
        else {
          params.gap = 500;
        }
        break;

    case '3':
      if(params.height >= 40) {
        params.height = params.height-20;
      }
      else {
        params.height = 30;
      }
      break;

    case '4':
      if(params.height <= 490) {
        params.height = params.height+20;
      }
      else {
        params.height = 500;
      }
      break;

    case '5':
      if(params.stick >= 0.2) {
        params.stick = params.stick-0.1;
      }
      else {
        params.stick = 0.1;
      }
      break;

    case '6':
        if(params.stick <= 0.9) {
          params.stick = params.stick+0.1;
        }
        else {
          params.stick = 1;
        }
        break;
    
    case '7':
      if(params.shadow >= 0) {
        params.shadow = params.shadow-10;
      }
      else {
        params.shadow = 0;
      }
      break;

    case '8':
      if(params.shadow <= 290) {
        params.shadow = params.shadow+10;
      }
      else {
        params.shadow = 300;
      }
      break;
  }
  
  console.log(e);
}

view.onFrame = function(event) {
  cleanCanvas();

  var time = event.time;

  var path = new Path([300-(params.gap/2), 300+(params.height/2)]);
  path.lineTo([300-(params.gap/2), 300-(params.height/2)]);
  path.strokeJoin = 'round';
  path.curveTo([300, 200-(params.height/2)], [300+(params.gap/2),300-(params.height/2)], Math.sin(time*0.6));
  path.lineTo([300+(params.gap/2),300+(params.height/2)]);

  path.strokeColor = '#000';
  path.strokeWidth = 10;
  
  
  // (300+(params.height/2) + 300-(params.height/2))

  var center = (300-(params.height/2)) + (params.stick*(params.height*0.9));

  var line = new Path([300-(params.gap/2), center]);
  line.lineTo([300+(params.gap/2),center]);

  line.strokeColor = '#000';
  line.strokeWidth = 10;

  for(i = 0 ; i < params.shadow ; i++) {
    var sPath = path.clone();
    sPath.fillColor = null;
    sPath.strokeColor = '#000';
    sPath.strokeWidth = 2;
    sPath.position.y += i*5;
    sPath.rotate(i*3);
    var sLine = line.clone();
    sLine.position.y += i*5;
    sLine.strokeColor = '#000';
    sLine.strokeWidth = 2;
    // sLine.rotate(i*3);
  }
  
};

function cleanCanvas() {    
  project.activeLayer.removeChildren();
}