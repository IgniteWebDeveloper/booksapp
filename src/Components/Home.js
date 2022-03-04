import React, { Fragment, useContext } from 'react';
import imgae from '../content.png'
import { State } from '../Context/Context'
import Loader from './preview.gif';


const Home = () => {

  const { books, setbooks } = useContext(State)

  console.log(books)
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
      <button className='loadMore'>Load More <i class="ri-refresh-line"></i></button>
      </div>
    </div>
  )
}

export default Home