import React from 'react'
import rocket from '../../Assests/Rocket.svg';
import smoke from '../../Assests/Vector3.svg';
import logo from '../../Assests/logo-white.svg';
import facebook from '../../Assests/facebook.svg';
import instagram from '../../Assests/instagram.svg';
import twitter from '../../Assests/twitter.svg';
import linkdin from '../../Assests/linkedin.svg';
import { Navitem } from '../../Constants/indexs';
import {
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='about w-full foot'>
            <div className='rocketsmoke'>
                <div className="rocket"><img src={rocket} alt="Rocket" /></div>
                <div className="smoke"><img src={smoke} className='smokeimg' alt="Smoke" />
                </div>
            </div>
            <div className="footer">
                <div className="containerfoot flex flex-col justify-center align-middle text-center">
                    <div className='logofoot'><img src={logo} alt="fotterlogo" /></div>
                    <div>
                        <div className='footerslogan py-2'>Empower through Innovation</div>
                        <div className='gmail py-1'>coesis@sagarmatha.edu.np</div>
                        <div className='phone py-1'>+977 98xxxxxxxx, 01-5xxxxxx</div>
                        <div className='flex me-auto mr-auto justify-center'><img src={facebook} alt="Facebook" /><img src={instagram} alt="Instagram" /><img src={twitter} alt="Twitter" /><img src={linkdin} alt="Linkdin" />
                        </div>

                    </div>
                    <ul className=' flex gap-2 mr-auto ms-auto py-10 px-10 '>{Navitem.map(res => (
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <Link to="/" className="flex items-center"
                            key={res.id}
                            >
                                {res.title}
                            </Link>
                        </Typography>
                    ))}</ul>
                    <div className='pb-5'>Copyright.COESIS.2023</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;