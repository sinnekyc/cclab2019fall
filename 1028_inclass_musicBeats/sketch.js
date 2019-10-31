let synth,cymbal, melody;
let counter=0;

function setup() {
  createCanvas(400, 400);
  
  synth = new Tone.MembraneSynth().toMaster();
  cymbal = new Tone.MetalSynth({
frequency : 200 ,
envelope : {
attack : 0.01 ,
decay : 0.4 ,
release : 0.4
} ,
harmonicity : 5.1 ,
modulationIndex : 32 ,
resonance : 4000 ,
octaves : 1.5
}).toMaster();
  
  // melody = new Tone.PolySynth(4,Tone.Synth).toMaster();
    
  melody = new Tone.AMSynth().toMaster();
  
  var loop = new Tone.Loop(playSynth,"4n");
  
  
  

  
  loop.start(0);
  
  // Tone.Transport.bpm.value=120;
  Tone.Transport.start();

}

function playSynth(){
  if(counter%2==0){
  	synth.triggerAttackRelease("F1", "8n");
}
  
    if(counter%4 == 0){
  	cymbal.triggerAttackRelease("C1", "32n");
}
  // symbal.triggerAttackRelease("C1", "8n", time);
  
    if(counter%8 == 0){
    melody.triggerAttackRelease('G3','2n');
}
      if(counter%8 == 0){
    melody.triggerAttackRelease('G3','2n');
}
  
  
  
  counter = (counter+1)%16;
  console.log(counter)
}



