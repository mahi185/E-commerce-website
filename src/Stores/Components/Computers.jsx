import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
    let firstImages=computerData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
        <h2>computers</h2>
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

export default Computers
