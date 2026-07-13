import React from 'react'
import { watchData } from '../data/watch';

const Watch = () => {
  let firstImages=watchData.slice(0,5);
      return (
        <>
        <div className='proTitle'>
              <h2>Watches</h2>
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

export default Watch
