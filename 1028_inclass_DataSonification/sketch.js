var synth; 
var freq;
var index =2;

function setup() {
  
  synth = new Tone.Synth().toMaster();
  createCanvas(400, 400);
  // console.log(table.rows[4].arr[1]);
  
  loadTable('https://pkgstore.datahub.io/core/sea-level-rise/csiro_alt_gmsl_mo_2015_csv/data/dc258c2039d8b640f74efd3d23e1c920/csiro_alt_gmsl_mo_2015_csv.csv', 'csv',gotData);
}

function gotData(data){
  // console.log(data.rows[index].arr[1]);
  freq = data;
}

function draw() {
  background(220);
}

function mousePressed(){

  let f = freq.rows[index].arr[1];
  console.log(f);
  synth.triggerAttackRelease(f*500,'8n');
  index+=1;
}