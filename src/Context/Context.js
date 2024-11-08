import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const State = createContext(null)


const Context = (props) => {
    const [books, setbooks] = useState(null)
    const [index, setindex] = useState(1)

    useEffect(() => {
        if (!books) {
            getBooks()
        }

    }, [books])

    console.log(books)

    const getBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&&ball+inauthor:keyes&key=AIzaSyC7YWu0a2xqKnZsRss5ouT8MIsZDQW2-8Y&startIndex=${index}`)
            .then((response) => {
                setbooks(response.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <State.Provider value={{ books, setbooks, index, setindex }}>
            {props.children}
        </State.Provider>
    )
}

export default Context