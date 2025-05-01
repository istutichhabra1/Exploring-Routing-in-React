
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieContextProvider } from './context/MovieContext';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <MovieContextProvider>
      <Router>
        <Routes>
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/edit/:id" element={<EditMovie />} />
        </Routes>
      </Router>
    </MovieContextProvider>
  );
}

export default App;
