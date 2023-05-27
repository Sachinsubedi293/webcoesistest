import { Sponsoritems } from '../../Constants/indexs'
import React, { useState, useEffect } from 'react';
const Sponser = () => {
  const [Golden, setGolden] = useState([]);
  const [Silver, setSilver] = useState([]);
  const [Platinum, setPlatinum] = useState([]);
  useEffect(() => {
    setGolden(Sponsoritems.filter(res => res.type == "Gold"));
    setSilver(Sponsoritems.filter(res => res.type == "Silver"));
    setPlatinum(Sponsoritems.filter(res=>res.type=="Platinum"));
  }, [])
 


  return (
    <div >
      <h2 className='text-center text-4xl font-bold py-10'>Platinum Sponsers</h2>
      <div className="sponsers flex flex-wrap text-center justify-center">
        {Platinum.map((res) => (
          <div className='sponsercontainer' key={res.id}>
            <img src={res.logo} alt="Companylogo" />
          </div>
        ))}
      </div>
      <h2 className='text-center text-4xl font-bold py-10'>Golden Sponsers</h2>
      <div className="sponsers flex flex-wrap text-center justify-center">
        {Golden.map((res) => (
          <div className='sponsercontainer' key={res.id}>
            <img src={res.logo} alt="Companylogo" />
          </div>
        ))}
      </div>
      <h2 className='text-center text-4xl font-bold py-10'>Silver Sponser</h2>
      <div className="sponsers  flex flex-wrap text-center justify-center">
        {Silver.map((res) => (
          <div className='sponsercontainer' key={res.id}>
          <img src={res.logo} alt="Companylogo" />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Sponser