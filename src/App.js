import React from 'react';
import ReactDOM from 'react-dom'
/* import './App.css'; */
import Header from './components/Header'
import Inicio from './components/Inicio'
import Final from './components/Final'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Inicio />
        <Final />
      </main>
      <Footer />
    </div>
  );
}

export default App;
