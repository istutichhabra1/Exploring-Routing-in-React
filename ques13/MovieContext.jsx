
import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const querySnapshot = await getDocs(collection(db, 'movies'));
      const moviesList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMovies(moviesList);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  const addMovie = async (movie) => {
    const docRef = await addDoc(collection(db, 'movies'), movie);
    setMovies(prev => [...prev, { ...movie, id: docRef.id }]);
  };

  const deleteMovie = async (id) => {
    await deleteDoc(doc(db, 'movies', id));
    setMovies(prev => prev.filter(movie => movie.id !== id));
  };

  const editMovie = async (id, updatedMovie) => {
    await updateDoc(doc(db, 'movies', id), updatedMovie);
    setMovies(prev => prev.map(movie => movie.id === id ? { ...movie, ...updatedMovie } : movie));
  };

  return (
    <MovieContext.Provider value={{ movies, loading, addMovie, deleteMovie, editMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
