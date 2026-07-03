import React from 'react'
import {menData} from '../data/men'

const Men = () => {
   let firstImages=menData.slice(0,5);
    return (
        <>
        <div className='proTitle'>
            <h2>Men dressing</h2>
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

export default Men
