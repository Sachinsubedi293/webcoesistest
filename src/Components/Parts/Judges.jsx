import React from 'react'
import ImageSlider from './Slider'
import { Judgeitems } from '../../Constants/indexs'

const Judges = () => {
  return (
    <div className='w-11/12  gap-4  ml-auto mr-auto'>
        <h2 className='text-center text-4xl font-bold py-10'>Judges</h2>
        <ImageSlider data={Judgeitems} />
    </div>
  )
}

export default Judges