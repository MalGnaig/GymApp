import React from 'react'
import SectionWrapper from './SectionWrapper'

// We make this function instead of creating another class component and we can call this underneath now
function Header(props) {
  const {index, title, description} = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text2xl md:text-4xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {

    
  return (
    <div className='min-h-screen'>
      <SectionWrapper header ={"generate your workout"} title = {[ 'It\'s', 'Huge', 'o\'clock']}>  {/* The title is an array list of strings */}
        <Header index = {'01'} title = {"Choose your poision"} description = {"Select the workout routine"} /> 
      </SectionWrapper>
    </div>
  )
}
