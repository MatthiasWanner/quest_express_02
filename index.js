// Express is already installed
const express = require("express");
const app = express();
// Array of movies
const movies = require("./movies");
// In codesandbox we need to use the default port which is 8080
const port = 3000;

app.get("/", (request, response) => {
  console.log(request);
  response.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (request, response) => {
  response.status(200).json(movies);
});

app.get("/api/movies/:id", (request, response) => {
  const foundMovie = movies.find(movie => movie.id === parseInt(request.params.id));
  foundMovie !== undefined ?
  response.status(200).json(foundMovie):
  response.status(404).json( 'Not found' );
  });

  app.get("/api/search", (request, response) => {
    maxDuration = request.query.maxDuration
    const searchMovie = movies.filter(movie => parseInt(maxDuration) >= movie.duration);
    searchMovie.length > 0 ?
    response.status(200).json(searchMovie):
    response.status(404).json( 'No movies found for this duration' );
    });

app.get("/api/users", (request, response) => {
  response.status(401).json( 'unauthorized' );
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

