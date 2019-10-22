// Giphy variables----------all info for creating the giphy url-----------
let giphySearch;
let giphyapi = 'https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=';
let giphyLimit = '&limit=25&offset=0&rating=G&lang=en';
let giphyLink;


// Weather variables---------------------
let city;
let weatherKey = '&APPID=5f7315f331181aa4ac6571d7f18b543a';
let weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=';

let weatherlink;
let weatherdata;

//global variable, because input should be use several times,
//if it is only use in one function, it could be local.
let input;


function setup(){

    createCanvas(400,400);

    console.log('It is working!');
    // gotData is a callback function
    

    input = createInput('manhattan');
    let button = createButton('search weather');

    input.position(200,300);
    button.position(400,300);

    //event is button pressed

    button.mousePressed(updateCity);

}

function updateCity(){
    background(255);
    console.log(input.value());
    //what the user input would be the city to call api
    city = input.value();


    weatherlink = weatherapi + city + weatherKey ;
    loadJSON(weatherlink, gotWeatherData);
    
}

function gotWeatherData(data){
    weatherdata = data.weather[0].description;
    text(weatherdata, 20, 80);
    text(city + ' is ' + weatherdata, 30, 20);


    giphysearch = weatherdata;
    console.log(giphysearch);

    giphyLink = giphyapi + giphySearch + giphyLimit;

    loadJSON(giphyLink, gotGiphyData);

}

function gotGiphyData(data){

    console.log(data.data[0].images.original.url);

   let img = createImg(data.data[0].images.original.url);
   img.position(500,0);


}
