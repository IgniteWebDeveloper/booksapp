import React, { Fragment, useContext } from 'react';
import { State } from '../Context/Context';
import axios from 'axios'


const Home = () => {

  const { books, setbooks, index, setindex } = useContext(State)

  const loadmoreBooks = () => {
    setindex(index+1)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&&ball+inauthor:keyes&key=AIzaSyC7YWu0a2xqKnZsRss5ouT8MIsZDQW2-8Y&startIndex=${index}`)
      .then((response) => {
        setbooks(...books, books.push(...response.data.items))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(books, index)
  return (
    <div className='home'>
      <div className="container">
        {books ?
          <Fragment>
            {books.map(book =>
              <div className="card" key={book.id}>
                <div className="cardImg">
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="BOOK IMAGE" />
                </div>
                <div className="pages">
                  <i className="ri-pages-line"></i>
                  <h5>{book.volumeInfo.pageCount}</h5>
                </div>
                <div className="details">
                  <div className="heading">
                    <h3>{book.volumeInfo.title}</h3>
                  </div>
                  <div className="preview">
                    <button className='previewBtn'>Book Preview</button>
                  </div>
                </div>
              </div>
            )}</Fragment>
          :
          ''
        }
      </div>
      <div className="loadmoreContainer">
        <button className='loadMore' onClick={loadmoreBooks}>Load More <i class="ri-refresh-line"></i></button>
      </div>
    </div>
  )
}

export default Home