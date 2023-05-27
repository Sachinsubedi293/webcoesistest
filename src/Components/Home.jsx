import React from 'react'
import vector from '../Assests/Vector.svg';
import logo from'../Assests/Logo-bgw-01 1.svg';
import rocket from'../Assests/Rocket.svg';
import smoke from '../Assests/Vector 2.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = new useNavigate();
  const navigateHomepage=()=>{
    navigate('/home');
  }
  return (
    <div className='home flex flex-wrap flex-col'>
      <div className='date'>July 13-15, 2023</div>
      <div className='logo'><img src={logo} alt="logo" /></div>
      <div className='solgan'>Empower through Innovation</div>
      <div className='discription'>Koshish is a 52-hour in person hackathon where Nepali students turn ideas into the next big innovation.</div>
      <div className='join' onClick={navigateHomepage}><img src={vector} alt="vector" /><span>Join</span></div>
      <div className='rocketsmoke'>
        <div className="rocket"><img src={rocket} alt="Rocket" /></div>
        <div className="smoke"><img src={smoke} className='smokeimg' alt="Smoke" />
        <span className='organizertext'>Organized by COESIS</span>
        </div>
      </div>
      
    </div>
  )
}

export default Home