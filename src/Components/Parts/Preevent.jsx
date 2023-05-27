import React from 'react'
import { Preeventitems } from '../../Constants/indexs';

const Preevent = () => {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold py-10'>Pre-Events</h2>
      <div className='text-center'>A more detailed schedule will be provided to everyone during the event.</div>
      <div className="schedule flex justify-center mt-2">
        <table className='w-11/12 '>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {Preeventitems.map(res => (
            <tr key={res.id} >
              <td colSpan={2} className='tdimage pt-5 pb-5 ps-4 '>
                <div className='daytext'>Day {res.day}</div>
              </td>
              <td className='list p-5' colSpan={3}>
                <ul>
                  {res.event.map(res=>(
                    <li key={res.id}>
                     {res.id}. {res.title}
                    </li>
                  ))}
                  
                </ul>
              </td>
            </tr>
          ))}

        </table>
      </div>
    </div>
  )
}

export default Preevent;