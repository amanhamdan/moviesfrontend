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
import people from './people.json';

function App() { 
  const lucyUrl1 ='https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_.jpg';
  const valerianUrl2 ='https://m.media-amazon.com/images/M/MV5BMTkxMDAxNDUyNV5BMl5BanBnXkFtZTgwOTc3MzcxMjI@._V1_FMjpg_UX1000_.jpg';
  const matrixUrl3 ='https://resizing.flixster.com/u2t5GClorY2TS1WDOXdY-SuFzfM=/300x300/v2/https://flxt.tmsimg.com/assets/p22804_v_h9_ag.jpg';
  const prideUrl4 ='https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg';

  return (
   
    <div className="App">
      <Navbar />

      {people.map((obj, inx) => (
        <div key={inx}>
          <p>Name: {obj.name}</p>
          <p>Company: {obj.company}</p>
          <p>===</p>
        </div>
      ))}

      <section className="card-container">
        <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Matrix'
          image={matrixUrl3}

          btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <DocumentIcon />
          }} />
          <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Valerian'
          image={valerianUrl2}

          btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <DocumentIcon />
          }} />
          <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Pride & Prejudice'
          image={prideUrl4}

          btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <DocumentIcon />
          }} />
        <Card
          body='Irure culpa quis in mollit ure culpa quis in molliure culpa quis in molli nulla et velit velit ullamco ipsum aliquip eu amet.'
          title='LUCY'
          image={lucyUrl1}


         // subtitle='Get your photo now'
          btn={{
            text: "Button",
            href: '#',
            type: 'secondary',
            filled: true,
            icon: <CameraIcon />
          }} />
          <Card
          body='Irure culpa quis in mollit ure culpa quis in molliure culpa quis in molli nulla et velit velit ullamco ipsum aliquip eu amet.'
          title='LUCY'
          image={lucy}


         // subtitle='Get your photo now'
          btn={{
            text: "Button",
            href: '#',
            type: 'secondary',
            filled: true,
            icon: <CameraIcon />
          }} />
          <Card
          body='Irure culpa quis in mollit ure culpa quis in molliure culpa quis in molli nulla et velit velit ullamco ipsum aliquip eu amet.'
          title='LUCY'
          image={lucy}


         // subtitle='Get your photo now'
          btn={{
            text: "Button",
            href: '#',
            type: 'secondary',
            filled: true,
            icon: <CameraIcon />
          }} />
        
      </section>
    </div>
  )
}


export default App;
