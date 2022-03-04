import React from 'react';
import imgae from '../content.png'
import { Button } from '@mui/material'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="card">
          <img src={imgae} alt="" />
          <div className="pages">
            <i class="ri-pages-line"></i>
            <h5>8799</h5>
          </div>
          <div className="heading">
            <h3>hello world hey buddy</h3>
          </div>
          <button className='preview'>Preview</button>
        </div>
      </div>
    </div>
  )
}

export default Home