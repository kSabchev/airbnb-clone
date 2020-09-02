import React from 'react';
import './App.css';
import './Home.js';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="app">
      {/* <h1>lets build airbnb-clone</h1> */}
      <Header/>
        {/* Search */}
      <Home/>    

      <Footer />
      { /* Banner */}
      { /* Cards */}
      { /* Footer */}
    {/* SearchPage*/}
      {/*  ...*/}
    </div>
  );
}

export default App;
