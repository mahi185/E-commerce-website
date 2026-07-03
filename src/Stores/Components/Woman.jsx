import React from 'react'
import {womanData} from '../data/woman'


const Woman = () => {
   let firstImages=womanData.slice(0,5);
    return (
      <>
      <div className='proTitle'>
        <h2>Woman dressing</h2>
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

export default Woman
