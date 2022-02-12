import React, { useContext } from 'react';
import {State} from './Context/Context'
import second from './'



const App = () => {

  const {books, setbooks} = useContext(State)

  console.log(books)
  return (
    <div>

    </div>
  )
}

export default App