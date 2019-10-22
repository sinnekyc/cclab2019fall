//giphy
let search = 'superm';

let api = 'https://api.giphy.com/v1/gifs/search?api_key=Q0UVNFwLPynR0Hr9ysCaDOjcrGLd9Qo1&q='+ search +'&limit=25&offset=0&rating=G&lang=en';


let weatherKey='df8d933040e07004dba9ae6f0db4b860';
let weatherapi='api.openweathermap.org/data/2.5/forecast?id=524901&APPID=';


function setup() {
  createCanvas(400, 400);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=guangzhou&appid=df8d933040e07004dba9ae6f0db4b860', gotData);
}

//parameter doesn't has to be data
function gotData(data){
  console.log(data);
}

