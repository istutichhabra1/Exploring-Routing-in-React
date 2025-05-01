
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { MovieContext } from '../context/MovieContext';
import { useContext } from 'react';

function MovieList() {
  const { movies, deleteMovie } = useContext(MovieContext);

  return (
    <Box p={5}>
      <h2>Movies List</h2>
      {movies.map((movie) => (
        <Box key={movie.id} mb={4} p={3} border="1px" borderRadius="lg">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <Link to={`/movies/edit/${movie.id}`}>
            <Button colorScheme="teal" mr={2}>Edit</Button>
          </Link>
          <Button colorScheme="red" onClick={() => deleteMovie(movie.id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
}

export default MovieList;
