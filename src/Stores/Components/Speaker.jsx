import React from 'react'
import { speakerData } from '../data/speaker';

const Speaker = () => {
    let firstImages = speakerData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
         <h2>Speakers</h2>
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

export default Speaker
