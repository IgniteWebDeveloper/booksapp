import React, { createContext, useEffect, useState } from 'react'

export const State = createContext(null)


const Context = (props) => {
    const [books, setbooks] = useState(null)
    useEffect(() => {
        fetchBooks()
    }, [books])
    
    const fetchBooks = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=ball:keyes&key=AIzaSyC7YWu0a2xqKnZsRss5ouT8MIsZDQW2-8Y')
          .then(d => d.json())
          .then(res => {
            console.log(res)
          })
      }
    return (
        <State.Provider value={{ books, setbooks }}>
            {props.children}
        </State.Provider>
    )
}

export default Context