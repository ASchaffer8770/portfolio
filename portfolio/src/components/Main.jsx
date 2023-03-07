import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover ' 
            src="https://images.unsplash.com/photo-1669918257672-53b43775b3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="a lake in the north west of the United States of America" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
            <div>
                <h1>I'm Alex Schaffer</h1>
                <h2>I'm a 
                    <TypeAnimation
                        sequence={[
                        'Full Stack Developer', // Types 'One'
                        3000, // Waits 1s
                        'Software Engineer', // Deletes 'One' and types 'Two'
                        4000, // Waits 2s
                        'Tech Enthusiast',
                        4000 // Types 'Three' without deleting 'Two'
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Main