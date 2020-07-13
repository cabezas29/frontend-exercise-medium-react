import React from 'react';
/* import './App.css'; */
import Header from './components/Header'
import Inicio from './components/Inicio'
import Final from './components/Final'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Inicio />
        <Final />
      </main>
    </div>
  );
}

export default App;
