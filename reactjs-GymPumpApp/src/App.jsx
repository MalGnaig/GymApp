import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Generator from './components/Generator'
//import Gymworkout from './components/Gymworkout'
import Hero from './components/Hero'
import {generateWorkout} from './utils/functions'


function App() {
  const [count, setCount] = useState(0)
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [goal, setGoal] = useState();

  function updateWorkout() {
    if(muscleGroups.length < 1) {
      return
    }
    let newWorkOut = generateWorkout({poison, muscleGroups, goal});
    console.log(newWorkOut);
    setWorkout(newWorkOut);
  }


  return (
    <main className ='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero></Hero>
      <Generator poison={poison} setPoison={setPoison} muscleGroups={muscleGroups} setMuscleGroups={setMuscleGroups} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout}></Generator>
      {workout && (<Workout workout = {workout} updateWorkout= {updateWorkout}></Workout>)}

    </main>
  )
}

export default App
