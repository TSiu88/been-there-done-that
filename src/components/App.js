import React from 'react';
import './App.css';
import Header from "./Header";
import ScreenControl from './ScreenControl'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <ScreenControl />
      </Router>
    </React.Fragment>
  );
}

export default App;
