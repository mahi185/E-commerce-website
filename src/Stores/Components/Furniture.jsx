import React from 'react'
import {furnitureData} from '../data/furniture'


const Furniture = () => {
  let firstImages=furnitureData.slice(0,5);
    return (
        <>
        <div className='proTitle'>
             <h2>Furniture
            </h2>
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

export default Furniture
