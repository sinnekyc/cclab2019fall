//when city change, gif change


function setup(){
  

  let cities = ['Guangzhou','Sydney','Seoul','Dubai','Bangkok','Tokyo','Seattle','Austin','Boston','Shanghai','Osaka']
  
  let city = random(cities);
  let cityPic = city;
  
  text(city, 30, 30);


   
   // for(let i=0;i<city.length;i++){
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=df8d933040e07004dba9ae6f0db4b860', gotWeather);

    loadJSON('https://api.giphy.com/v1/gifs/search?api_key=Q0UVNFwLPynR0Hr9ysCaDOjcrGLd9Qo1&q='+ cityPic + '&limit=25&offset=0&rating=G&lang=en', gotGif);
  //  };
 
}


//parameter doesn't has to be data
function gotWeather(data){
  // console.log(data);
  console.log(data.name);
  console.log(data.weather[0].description);
  // how to use the data for the text?
  // text(gotWeather(data.weather[0].description),10,30);
}


function gotGif(pic){
    // console.log(pic);

    console.log(pic.data[0].images.original.url);
    createImg(pic.data[0].images.original.url);


}
