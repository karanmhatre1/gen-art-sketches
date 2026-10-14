/*
  Video Sequencer (p5.js, instance mode so it can live inside the page)
  Click on the sketch to sample a part of the video. Left to right represents
  different parts of the video and top to bottom represents how much of that
  part is sampled.
  Original: https://editor.p5js.org/one-generated-pixel/sketches/g1OOVyBtl
*/
new p5((p) => {
  const MAX_SIZE = 600;
  const VIDEO_URL = 'https://res.cloudinary.com/dgksx9vlc/video/upload/v1628776782/createwithcode/video_beats/The_Pink_Panther_in_-A_Fly_in_the_Pink_lmhbyf.mp4';
  const container = document.getElementById('sketch-container');

  let vid;
  let playing = false;
  let xPos = 20;
  let yPos = 20;

  const canvasSize = () => Math.min(container.clientWidth, MAX_SIZE);

  p.setup = () => {
    p.createCanvas(canvasSize(), canvasSize());
    vid = p.createVideo(VIDEO_URL, () => {
      playing = true;
      vid.volume(0.4);
    });
    vid.hide();
    p.background(0);
  };

  p.draw = () => {
    if (p.frameCount % xPos === 0) vid.time(yPos);
    if (playing) p.image(vid, 0, 0, p.width, p.height);
  };

  p.mousePressed = () => {
    // p5 reports presses anywhere on the page; only react to clicks on the canvas
    const inside = p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height;
    if (!inside) return;
    vid.loop();
    xPos = p.floor(p.map(p.mouseY, 0, p.height, 2, 50));
    yPos = p.floor(p.map(p.mouseX, 0, p.width, 2, 300));
  };

  p.windowResized = () => p.resizeCanvas(canvasSize(), canvasSize());
}, document.getElementById('sketch-container'));
