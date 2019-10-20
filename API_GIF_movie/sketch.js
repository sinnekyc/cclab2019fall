//when city change, gif change


function setup(){
  
  createCanvas(300,100);
  let movies = ['godfather','harry potter','leon','inception','the lord of rings','the matrix','fight club','the pianist']
  
  let movie = random(movies);
  let moviePic = movie; 
  
  textSize(30);
  text(movie,20,50);
  
  
  loadJSON('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='+ movie +'&api-key=o3WpALcNzjGu4IwB8CKDrzeb7kA5hNYv', gotMovie);

  loadJSON('https://api.giphy.com/v1/gifs/search?api_key=Q0UVNFwLPynR0Hr9ysCaDOjcrGLd9Qo1&q='+ moviePic + '&limit=25&offset=0&rating=G&lang=en', gotGif);

 
}


//parameter doesn't has to be data
function gotMovie(data){
  // console.log(data);
  console.log(data.results[0].link.url)
  
  // how to text out the data?
  
}


function gotGif(pic){
    // console.log(pic);
    // console.log(pic.data[0].images.original.url);

    createImg(pic.data[0].images.original.url);


}
