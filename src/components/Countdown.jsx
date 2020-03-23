import React, { useEffect, useState } from 'react'
import { exercises } from '../exercises';

const Countdown = ({ currentExercise,  setCurrentExercise, setStatus, timerLength, status }) => {
  const [timer, setTimer] = useState(timerLength)
  
  function startCountdown() {
    console.log(timer);
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      if (status === 'running') {
        setStatus('break')
        setCurrentExercise(currentExercise + 1)
      } else if (status === 'break') {
          console.log('got in if');
          setStatus("running")
      }
    } 
  }

  useEffect(startCountdown, [timer])

  useEffect(() => {
    setTimer(timerLength)
  }, [currentExercise])

  return (
    <div className="m-3 border-8 border-blueGrey text-8xl rounded-full w-84 h-84 flex justify-center items-center">
      {timer.toString()}
    </div>
  )
}

export default Countdown