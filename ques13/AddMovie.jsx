
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Box, Button, Input, Textarea } from '@chakra-ui/react';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && releaseYear) {
      addMovie({ title, description, releaseYear });
      navigate('/movies');
    }
  };

  return (
    <Box p={5}>
      <h2>Add a Movie</h2>
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
        <Button type="submit" colorScheme="teal">Add Movie</Button>
      </form>
    </Box>
  );
}

export default AddMovie;
