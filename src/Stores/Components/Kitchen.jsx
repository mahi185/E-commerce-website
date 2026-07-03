import React from 'react'
import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
   let firstImages=kitchenData.slice(0,5);
    return (
        <>
        <div className='proTitle'>
            <h2>Kitchen</h2>
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

export default Kitchen
