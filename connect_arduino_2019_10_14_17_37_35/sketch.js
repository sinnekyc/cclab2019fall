var serial; // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem1411';  // fill in your serial port name here
var circleR = 50;
 
function setup() {
  createCanvas(320,240);
 serial = new p5.SerialPort(); // make a new instance of the serialport library
 serial.on('list', printList); // set a callback function for the serialport list event
 serial.on('connected', serverConnected); // callback for connecting to the server
 serial.on('open', portOpen);        // callback for the port opening
 serial.on('data', serialEvent);     // callback for when new data arrives
 serial.on('error', serialError);    // callback for errors
 serial.on('close', portClose);      // callback for the port closing
 
 serial.list(); // list the serial ports
 serial.open(portName);              // open a serial port
}

function draw(){
  background("#004488");
  fill("#FFFF00");
  noStroke();
  ellipse(mouseX,mouseY,circleR,circleR);
  
  fill(random(0,255),random(mouseX,255),random(255),);
  noStroke();
  ellipse(mouseY,mouseX,circleR,circleR);
  

}
 
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
function serialEvent() {
  var data = serial.read();
  console.log(data);
  circleR=data;
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}


 