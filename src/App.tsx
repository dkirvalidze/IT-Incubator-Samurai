import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";

const App = function() {
  return (
    <div className="App">
     Hello, samurai! Let's go!
        <Header />
        <Technologies />
    </div>
  );
}

export default App;
