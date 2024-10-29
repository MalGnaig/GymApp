import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Generator from './components/Generator'
import Gymworkout from './components/Gymworkout'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className ='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero></Hero>
      <Generator></Generator>
      <Gymworkout></Gymworkout>

    </main>
  )
}

export default App
