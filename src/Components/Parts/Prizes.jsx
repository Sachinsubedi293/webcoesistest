import React from 'react'
import { Prizeitems } from '../../Constants/indexs';
const Prizes = () => {
  return (
    <div className='prizes w-full'>
      <h1 className='text-center text-4xl font-bold py-10'>Prizes</h1>
      <div className="w-11/12 grid grid-cols-12 gap-4 place-content-center ml-auto mr-auto">
        {Prizeitems.map(res => (
          <div className="lg:col-span-4 md:col-span-4  ss:col-span-6 col-span-12  p-4" key={res.id}>
            <div className="card">
              <div className="rectangle">
                <div className="cardtop">
                </div>
                <div className="circle" dangerouslySetInnerHTML={{ __html: res.icon }}>

                </div>
                <h2 className='blue'>{res.title}</h2>
                <h6 className='text-yellow-500 prizetext '>{res.prize}</h6>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Prizes;