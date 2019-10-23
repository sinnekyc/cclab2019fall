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

let img;

//global variable, because input should be use several times,
//if it is only use in one function, it could be local.
let input;


function setup(){

    createCanvas(windowWidth,windowHeight);
    background(255,200,30);


    console.log('It is working!');
    // gotData is a callback function
    

    input = createInput('manhattan');
    let button = createButton('search weather');

    input.position(width/2-100,100);
    button.position(width/2+50,100);

    //event is button pressed

    button.mousePressed(updateCity);

}

function updateCity(){
    background(255,200,30);
    console.log(input.value());
    //what the user input would be the city to call api
    city = input.value();


    weatherlink = weatherapi + city + weatherKey ;
    loadJSON(weatherlink, gotWeatherData);

    
}

function gotWeatherData(data){
    weatherdata = data.weather[0].description;

    
    textSize(30);
    text(city + ' is in ' + weatherdata, width/2-150, 60);
    


    giphysearch = weatherdata + ' weather';
    console.log(giphysearch);

    giphyLink = giphyapi + giphysearch + giphyLimit;

    loadJSON(giphyLink, gotGiphyData);

    img.remove();
    

}

function gotGiphyData(data){

    // console.log(data.data[0].images.original.url);


   img = createImg(data.data[1].images.original.url);

   img.position(width/2-250,150);


}
