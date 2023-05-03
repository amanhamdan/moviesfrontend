import React from 'react';
import logo from './logo.svg';
import './App.css';
import valerian from './poster1.jpg';
import lucy from './lucy.jpg';
import matrix from './mat2.jpg';
import pride from './pride.jpg';
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

import movies from './movies.json';

function App() { 
  
  return (
   
    <div className="App">
      <Navbar />

      <section className="card-container">
      {movies.map((obj, inx) => (
        
        <Card key={inx}
          movieName={obj.movieName}
          image={obj.image}
          body={obj.body}

          btn={{
            category:obj.category,
            rating: obj.rating,
            director: obj.director,
            type: 'primary',
            filled: true,
            
          }} />
          
        
          )
        )
      }
        
      </section>
    </div>
  )
}


export default App;
