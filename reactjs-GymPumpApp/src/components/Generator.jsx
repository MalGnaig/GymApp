import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/workouts'
import { useState } from 'react';
import Button from './Button';



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
  const [showMuscleGroups, setShowMuscleGroups] = useState(false);
  const [poison, setPoison] = useState('individual');
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [goal, setGoal] = useState();


  function toggleMuscleGroups() {
    setShowMuscleGroups(!showMuscleGroups);
  }

  function updateMuscles(muscleGroup) {
    if (muscleGroups.includes(muscleGroup)) {
      const selectedMuscGroup = muscleGroups.filter(muscle => muscle !== muscleGroup); 
      setMuscleGroups(selectedMuscGroup);
      return;
    } 
    if(muscleGroups.length > 2){
      setShowMuscleGroups(false);
      return;
    }

    if(poison !== 'individual'){
      setMuscleGroups([muscleGroup]);
      setShowMuscleGroups(false);
      return;
    } 

    setMuscleGroups([...muscleGroups, muscleGroup]);
    if(muscleGroups.length == 2){
      setShowMuscleGroups(false);
      return;
    }
  };
  
    
  return (
    <div className='min-h-screen'>
      <SectionWrapper header ={"generate your workout"} title = {[ 'It\'s', 'Huge', 'o\'clock']}>  {/* The title is an array list of strings */}

        <Header index = {'01'} title = {"Choose your poison"} description = {"Select the workout routine"} />  {/*This os using the function Header above to create a section */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

          {Object.keys(WORKOUTS).map((workouts, workoutIndex) => (                     // In the code we are using map to go over each array item within WORKOUTS and then create buttons for each one.
              
                <button onClick={() => {
                  setMuscleGroups([]);
                  setPoison(workouts) 
                }} className={'bg-slate-950 border-2 py-2 rounded-sm hover:border-blue-700 duration-200 ' + (workouts === poison ? 'border-blue-700' : 'border-blue-400')} key = {workoutIndex}>     
                  <p className='capitalize'>{workouts.replaceAll('_', ' ') }</p>
                </button>
        ))}
         </div>


         <Header index={'02'} title={"Lock on your target Muscle"} /> {/* Using the function Header to create a section */}

          <div className='bg-slate-950 py-3 border-2 border-solid border-blue-400 rounded-lg relative hover:border-blue-700 duration-200'>
            <button onClick={toggleMuscleGroups} className='w-full flex items-center justify-center relative'>
              <p className='flex-1 text-center'> {muscleGroups.length == 0 ? 'Select the muscle group' : muscleGroups.join('-')}</p>
              <i className="fa-solid fa-circle-chevron-down absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
            </button>

            {showMuscleGroups && (
              <div className='flex flex-col mt-2'>
                {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => (
                  <button onClick ={ () => updateMuscles(muscleGroup)} key={muscleGroupIndex} className= {"uppercase p-2 rounded bg-slate-800 text-white hover:bg-blue-500 " + (muscleGroups.includes(muscleGroup) ? 'bg-blue-500' : '')}>
                    {muscleGroup}
                  </button> 
                ))}
              </div>
            )}
          </div>




        <Header index = {'03'} title = {"Choose your Workout Scheme"}/>  {/*This os using the function Header above to create a section */}
                <div className='grid grid-cols-3 gap-4'>

                  {Object.keys(SCHEMES).map((schemes, schemesIndex) => (                     // In the code we are using map to go over each array item within WORKOUTS and then create buttons for each one.
                      <button onClick={() => {
                        setGoal(schemes);
                      }} className={'bg-slate-950 border-2 border-blue-400 py-2 rounded-sm hover:border-blue-700 duration-200 ' + (schemes === goal ? 'border-blue-700' : 'border-blue-400')} key = {schemesIndex}>     
                        <p className='capitalize'>{schemes.replaceAll('_', ' ') }</p>
                      </button>
                ))}
                </div>
                <Button> 💪 FORMULATE PROGRAMME 💪</Button>

      </SectionWrapper>

      
    </div>
  )
}
