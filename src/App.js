import React from 'react';
import './App.css';
import Detail from './pages/Detail'

import { Link, Route } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {

  return (
    <div className="App">

      <section className="App-content">

        <Link to='/' className='App-header'>
          Giffy
        </Link>

        <Route component={Home} path='/'/>

        <Route component={SearchResults} path='/search/:keyword' />

        <Route component={Detail} path='/gif/:id'/>

      </section>
    </div>
  );
}

export default App;
