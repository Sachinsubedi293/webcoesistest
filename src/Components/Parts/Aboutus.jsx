import React from 'react'
import rocket from '../../Assests/Rocket.svg';
import smoke from '../../Assests/Vector 2.svg';
import { Aboutusitems } from '../../Constants/indexs';

const Aboutusblock = () => {
    return (
        <div className='about w-full'>
            <div className='rocketsmoke'>
                <div className="rocket"><img src={rocket} alt="Rocket" /></div>
                <div className="smoke"><img src={smoke} className='smokeimg' alt="Smoke" />
                </div>
            </div>
            <div className='datas pb-96'>
                <h1 className='text-center text py-10'>ABOUT US</h1>
                <div className='aboutques w-4/5 grid grid-cols-12 gap-4'>
                    <div className="col-start-1 sm:col-end-9 col-end-12">
                        {Aboutusitems.map(res => (
                            <>
                                <h2 className='text'>{res.title}</h2>
                                <div >{res.discription}</div></>
                        ))}
                    </div>
                    <div className="">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutusblock;

