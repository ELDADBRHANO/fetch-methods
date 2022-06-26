async function returnMoviesName() {
  try {
   return await fetch("https:/moviesmern.herokuapp.com/movies/all")
    .then(res => res.json())
  } 
  catch (error) {
    console.log(error);
  }
  finally{}
}


function printMovies() {
  div_id.innerHTML= `<img style="width:50vw;" src=".imges/loading.gif"/>`
  returnMoviesName()
  .then(res=>res.data.forEach(item => {
    div_id2.innerHTML += `<ul><li>${item.movieName}</li><img style='width:20vw;height:20vh;' src='${item.image}'</ul>` 
  }))
  .catch((error)=>{console.log(error);})
  .finally(
    ()=>{
  div_id.innerHTML= '';
    })
  
}



function showMovies() {
  printMovies()
}








  async function addToJacobSite() {
    const obj ={
      movie:{
        image:"https://www.edb.co.il/photos/170612021_poster01.poster.jpg",
        linkToMovie:"https://www.theblackphonemovie.com/",
        movieName:"blackPhone",
        rating:"5",
        synopsis:"good movie 2 m views over one weekend",
      }
    }
    try {
      await fetch("https:/moviesmern.herokuapp.com/movies/saveMovie",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
        }
    })
  } 
  catch (error) {
    console.log(error);
  }
  finally{}
}

function addMyMovie() {
  addToJacobSite()
}




async function getMovieUser() {
  const movieOfUser={
    movie:{
      image: input_img.value,
      linkToMovie: input_link.value,
      movieName:input_movieName.value,
      rating:input_rating.value,
      synopsis:input_synopsis.value
    }
  }
  try {
   await fetch("https:/moviesmern.herokuapp.com/movies/saveMovie",
   {
    method:"POST",
    body:JSON.stringify(movieOfUser),
    headers:{
      'Content-Type':'application/json'
    }
   }) 
  }
   catch (error) {
    console.log(error);
  }
  finally{}
}

function executeFuncAbove() {
  getMovieUser()
}








const API_WEB="https:/moviesmern.herokuapp.com/movies/"
async function getMovieByName() {
  try {
   return await fetch(`${API_WEB}movie/searchByName/${serch.value}`)
    .then(res=> res.json())
  } 
  catch (error) {
    
  }
  finally{div_id.innerHTML=""}
}


function showMovies() {
  showPlz.innerHTML="";
  getMovieByName()
  .then((result)=>{
    result.data.forEach(movie=>
      showPlz.innerHTML+=`<li>${movie.movieName}</li>`)
  })
}
