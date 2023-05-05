import React from 'react';
import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { PaperAirplaneIcon, CameraIcon, DocumentIcon } from '@heroicons/react/24/solid'
import Badge from './components/Badge'
import Button from './components/Button'
import Card from './components/Card'
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { useState, useEffect } from 'react';
import { getAllMovies, createMovie, deleteMovie } from './api';

import movies from './movies.json';
import { CardInterface } from './types';


function App() { 
  
  const [movies, setMovies] = useState<CardInterface[]>([]);

  useEffect(() => {
    getAllMovies()
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);
  
  return (
   
    <div className="App">
      <Navbar />

      <section className="card-container">
      {movies.map(movie  => (
        
        <Card key={movie.id}
        movieName={movie.movieName}
        image={movie.image}
        body={movie.body}
        id={44}
        btn={{
          category: movie.btn.category,
          rating: movie.btn.rating,
          director: movie.btn.director,
          type: 'primary',
          filled: true,
        }}  />
          
        
          )
        )
      }
        
      </section>
    </div>
  )
}


export default App;
