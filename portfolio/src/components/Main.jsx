import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover ' 
            src="https://images.unsplash.com/photo-1669918257672-53b43775b3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="a lake in the north west of the United States of America" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Schaffer.Tech</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I Create 
                    <TypeAnimation
                        sequence={[
                        'Full Stack Web Applications', // Types 'One'
                        3000, // Waits 1s
                        'Windows and Android Applications', // Deletes 'One' and types 'Two'
                        3000, // Waits 2s
                        'Custom Software Solutions',
                        3000 // Types 'Three' with deleting 'Two'
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaLinkedinIn className= 'cursor cursor-pointer' size={20}/>
                    <FaTwitter className = 'cursor cursor-pointer' size={20}/>
                    <FaFacebookF className = 'cursor cursor-pointer' size={20}/>
                    <FaInstagram className = 'cursor cursor-pointer' size={20}/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main