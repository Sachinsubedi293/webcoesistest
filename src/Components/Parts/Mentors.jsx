import React from 'react'
import ImageSlider from './Slider';
import { Mentoritems } from '../../Constants/indexs';

const Mentors = () => {
  return (
    <div className='w-11/12  gap-4  ml-auto mr-auto'>
      <h1 className='text-center text-4xl font-bold py-10'>Mentors</h1>
         <ImageSlider data={Mentoritems}/>
    </div>
  )
}

export default Mentors;