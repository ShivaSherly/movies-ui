// Here we are creating a function Definition
async function searchMovie(movieName) {
  // creating request body to call the search movies API
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZkZGU3NjQzYTE1MjE5ZjM4MTM1MmFjNjkxOTY3MSIsInN1YiI6IjY0N2IyOGM1MTc0OTczMDBkZTY2NDQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4J3SgOZ1oMno8dDrYQcekHZDK8EN1f7ztOhuMyYzVhE'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1', options);
    const data = await response.json();
    return await data// Display the response data in the browser console
  } catch (error) {
    console.log('Error:', error);
  }
}
