import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
   let firstImages=tvData.slice(0,5);
    return (
        <>
        <div className='proTitle'>
                <h2>Tv</h2>
        </div>
      <div className='proSection'>
          
          {
          firstImages.map((item) => {
              return(
                  <div className='imgBox'>
                      <img  className='proImg' src={item.image} alt="" />
                  </div>
  
              )
          })
      }
        
      </div>
      </>
    )
}

export default Tv
