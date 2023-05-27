import React from 'react'
import { FAQitems } from '../../Constants/indexs';
const Faq = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold py-10'>FAQ</h1>
        <div className="w-10/12 flex flex-wrap ms-auto me-auto">
          
         {FAQitems.map(res=>(
          <div className="containerq" key={res.id}>
           <div className="questioncontainer" >
           <h2>{res.question}</h2>
           </div>
         </div>
         ))}
          
        </div>
    </div>
  )
}

export default Faq;