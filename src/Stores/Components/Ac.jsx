import React from 'react'
import { acData } from '../data/proData'

const Ac = () => {
    let firstImages = acData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
        <h2>Ac</h2>
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

export default Ac
