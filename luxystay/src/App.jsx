// App.jsx
import React from 'react';
import Home from './Home';
import 'remixicon/fonts/remixicon.css';
import NavBar from './NavBar';


const App = () => {
  return (
    <div className="app" style={{ position: 'relative' }}>
      <NavBar/>
      <Home/>
    </div>
  );
};

export default App;
