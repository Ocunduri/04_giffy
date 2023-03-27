import React from 'react';
import './App.css';
import ListOfGifts from './compnents/ListOfGifts';

import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="App">

      <section className="App-content">

        <h1>App</h1>
        <nav>
          <Link to='/gif/panda'>Gifs de pandas</Link>
          <Link to='/gif/ecuador'>Gifs de ecuador</Link>
          <Link to='/gif/argentina'>Gifs de argentina</Link>
        </nav>

        <Route component={ListOfGifts} path='/gif/:keyword' />

      </section>
    </div>
  );
}

export default App;
