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

function App() {
  return (
    //<head></head>

    <div className="App">
        <Navbar />
      <section className="card-container">
        <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Matrix'
          image={matrix}

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
          image={valerian}

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
          image={pride}

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
