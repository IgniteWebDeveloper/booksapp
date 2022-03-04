import React from 'react';
import Home from './Components/Home.js'
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App