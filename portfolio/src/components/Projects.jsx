import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/pictures/WIP.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>  
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eius aut quasi, sequi optio mollitia minima delectus saepe accusamus minus inventore eaque quia iste id odio tenetur aspernatur, hic sunt!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={propertyImg} title='Work in Progress'/>
        <ProjectItem img={propertyImg} title='Work in Progress'/>
        <ProjectItem img={propertyImg} title='Work in Progress'/>
        <ProjectItem img={propertyImg} title='Work in Progress'/>
      </div>
    </div>
  )
}

export default Projects