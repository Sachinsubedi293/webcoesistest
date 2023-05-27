
import React from 'react'
import { Themeitems } from '../../Constants/indexs';


const Themes = () => {
  return (
    <div className='theme'>
        <h1 className="text-center text-4xl font-bold py-10">Theme</h1>
        <div className="w-11/12 grid grid-cols-12 gap-4  ml-auto mr-auto">
          
         {Themeitems.map(res=>(
           <div className="lg:col-span-4 md:col-span-4  ss:col-span-6 col-span-12 p-4">
           <div className="card">
             <div className="rectangle">
               <div className="cardtop">
               </div>
               <div className="circle" dangerouslySetInnerHTML={{__html:res.icon}}>
               
               </div>
               <h2 className='blue'>{res.title}</h2>
             </div>
           </div>
         </div>
         ))}
        </div>
    </div>
  )
}

export default Themes;