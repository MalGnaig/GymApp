import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto'>
      <div className='flex flex-col gap-4'>
      <p> IT'S TIME TO GET</p> 
      <h1 className='uppercase font-semibold text-5xl sm:text-4xl md:text-6xl lg:text-7xl'> MAS<span className='text-blue-400 font-medium'>SIVE</span> </h1> {/* span is so we can color the word MASSIVE different */}
      </div>
      <p className='text-sm md:text-base font-light'> Get ready to get massive! 💪 This gym app is here to turn Lam and Sarah into <span className = 'text-blue-400 font-medium'>absolute beasts, with workout plans that mix cardio and weight exercises. </span> 
         From serious weightlifting to heart-pumping cardio, this app's got everything to make <span className='text-blue-400 font-medium'>muscles pop and stamina soar. </span>
        It’s your ultimate gym buddy for a future where Lam and Sarah are the <span className = 'text-blue-400 font-medium'>buffest legends around.</span> Let's hit the gym and have some fun getting strong! 🏋️‍♀️🔥 </p>
      <Button> Accept & Begin </Button>
    </div>
  )
}
