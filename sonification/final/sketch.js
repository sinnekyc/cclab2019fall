// reference: https://www.youtube.com/watch?v=2O3nm0Nvbi4&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=11 Thank you Dainel Shiffman.

var song;
var button;
var fft;


function setup() {
  createCanvas(256, 256);
  colorMode(HSB,100);
  angleMode(RADIANS);
  song = loadSound("Data.mp3", loaded);
  fft = new p5.FFT(0.6, 128);
}

function loaded(){
  button = createButton("PLAY");
  button.mousePressed(togglePlaying);
}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play();
    button.html("PAUSE")
  } else {
    song.pause();
    button.html("PLAY");
  }
}


function draw(){
  background(0); 
  var spectrum  = fft.analyze();

  noStroke();

  translate(width/2, height/2);
  


  for(var i = 0; i < spectrum.length;i++){
    var angle = map(i,0,spectrum.length,0,360);
    var amp = spectrum[i];
    
    var r = map(amp, 0, 256, 20, 100);
    var x = r * cos(angle);
    var y = r * sin(angle);

    stroke(i,255,255);
    line(0,0,x,y);
    
  }



 
}