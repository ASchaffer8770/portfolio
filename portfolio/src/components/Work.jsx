import React from 'react'
import FirstWork from './FirstWork'

const data = [
    {
        company: 'Lite-Check LLC',
        title: 'Software Developer',
        start: 'November 2022',
        end: 'Current',
        details: 'Currently working on Android App developement and Universal Windows Product Applications for the transportation industry.'
    },
    {
        company: 'ABF Freight',
        title: 'Pickup and Delivery Driver',
        start: 'May 2021',
        end: 'July 2022',
        details: 'Maintained a Class A license and DOT medical card. I delivered and pickup oversized freight from customers while preforming critical safety practices.'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=> (
            <FirstWork 
            key={idx} 
            company={item.company} 
            start={item.start} 
            end={item.end} 
            details={item.details}/>
        ))}
    </div>
  )
}

export default Work