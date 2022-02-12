import React, { createContext, useState } from 'react'

export const State = createContext(null)


const Context = (props) => {
    const [books, setbooks] = useState(null)
    return (
        <State.Provider value={{ books, setbooks }}>
            {props.children}
        </State.Provider>
    )
}

export default Context