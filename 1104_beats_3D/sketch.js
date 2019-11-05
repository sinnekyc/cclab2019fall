let synth;
let loop;
let melody;
let cymbal;
let counter=0;
let pingpong;
let drum;
let phaser;
let synth2;
let fft;
let spectrum;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  melody = new Tone.Synth().toMaster();
  synth = new Tone.Instrument().toMaster();
  cymbal = new Tone.NoiseSynth().toMaster();
  pingPong = new Tone.PingPongDelay("16n", 0.2).toMaster();
  drum = new Tone.MembraneSynth().connect(pingPong);

  phaser = new Tone.Phaser({
	"frequency" : 15,
	"octaves" : 5,
	"baseFrequency" : 1000
}).toMaster();
  synth2 = new Tone.FMSynth().connect(phaser);

  
  loop = new Tone.Loop(playSound,'4n');
  loop.start();
  Tone.Transport.start();
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

}


//reference:https://www.youtube.com/watch?v=6TPVoB4uQCU&t=58s credit to the coding train
function draw() {
  
  background(0);
  
  rectMode(CENTER);
  
  noStroke();
 
  
  fill(random(0,255),random(0,255),random(0,255));
  translate(0,0,mouseX);
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.03);
  rotateZ(frameCount * 1.2);
  // rect(0,0,150,150);
  // box(100,50,50);
  torus(50, 10);
  pop();
  
  fill(random(0,255),random(0,255),frameCount);
  translate(mouseX - windowWidth/2,mouseY - windowHeight/2);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.01);
  torus(40, 8, 3, 12);
  
  fill(random(0,255),random(0,255),random(0,255));
  translate(mouseY - windowHeight/2,mouseX - windowWidth/2);
  rotateX(frameCount * 0.7);
  rotateY(frameCount * 1);
  rotateZ(frameCount * 0.1);
  sphere(20, 2, 16);
  
  
  spectrum = fft.analyze();
  drawSpectrum(spectrum);
  
  
}


function drawSpectrum(spectrum){
  
  
  
  beginShape();
   for (i = 0; i < spectrum.length; i++) {
    fill(255,0,255);
    vertex(i, map(spectrum[i], 0, 255, width, 0));
  }
  endShape();

}


function playSound(){
   if(counter%2 === 0){
   cymbal.triggerAttackRelease('16n');
   }
  
  if(counter===4){
    
    synth.triggerAttackRelease("C3", "2n");
  }
  
  if(counter===5){
    melody.triggerAttackRelease('D5','16n');
  }
  
  if(counter===6){
    melody.triggerAttackRelease('G1','4n');
  }
  
  //%8 when it comes to 8 it will return to 0
  counter = (counter+1)%12;
  synth.triggerAttackRelease("C4",'8n');
  drum.triggerAttackRelease("E#3", "8n");
  
  console.log(counter);
  console.log(frameCount);
}

