
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import { useContext } from 'react';
import { Box, Button, Input, Textarea } from '@chakra-ui/react';

function EditMovie() {
  const { id } = useParams();
  const { movies, editMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);
  
  const [title, setTitle] = useState(movie?.title || '');
  const [description, setDescription] = useState(movie?.description || '');
  const [releaseYear, setReleaseYear] = useState(movie?.releaseYear || '');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie(id, { title, description, releaseYear });
    navigate('/movies');
  };

  return (
    <Box p={5}>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb={3}
        />
        <Textarea
          placeholder="Movie Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={3}
        />
        <Input
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          mb={3}
        />
        <Button type="submit" colorScheme="teal">Save Changes</Button>
      </form>
    </Box>
  );
}

export default EditMovie;
