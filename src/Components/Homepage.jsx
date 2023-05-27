import React from 'react'
import Navbarmain from './Parts/Navbar';
import Landing from './Parts/Landing';
import Aboutusblock from './Parts/Aboutus';
import Themes from './Parts/Themes';
import Prizes from './Parts/Prizes';
import Mentors from './Parts/Mentors';
import Judges from './Parts/Judges';
import Sponser from './Parts/Sponser';
import Preevent from './Parts/Preevent';
import Faq from './Parts/Faq';
import Footer from './Parts/Footer';


const Homepage = () => {
  return (
  <div className='homepage'>
    <Navbarmain/>
    <Landing/>
    <Aboutusblock />
    <Themes/>
    <Prizes/>
    <Mentors/>
    <Judges/>
    <Sponser/>
    <Preevent/>  
    <Faq/>
    <div className="w-11/12 text-center mr-auto ml-auto py-10 landing">
   <h2> What are you waiting for?</h2>
   <div className='button my-5'><span>Register Button</span></div>
    </div>
    <Footer/>
    
  </div>
  );
}

export default Homepage;