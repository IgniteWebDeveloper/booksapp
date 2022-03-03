import React from 'react';
import imgae from '../content.png'
import { Typography } from '@mui/material'


const Home = () => {
  return (
    <div className='home'>
      <Typography>
        <div className="container">
          <div className="card">
            <img src={imgae} alt="" />
            <div className="heading">
              <h3>hello world hey buddy</h3>
            </div>
          </div>
        </div>
      </Typography>
    </div>
  )
}

export default Home