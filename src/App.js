import React, { useContext } from 'react';
import {State} from './Context/Context'
import Home from './Components/Home.js'
import Navbar from './Components/Navbar';



const App = () => {

  const {books, setbooks} = useContext(State)

  console.log(books)
  return (
    <div className='main'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App