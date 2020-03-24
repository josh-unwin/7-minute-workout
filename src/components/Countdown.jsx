import React, { useEffect, useState } from 'react'
import { exercises } from '../exercises';

const Countdown = ({ currentExercise,  setCurrentExercise, setStatus, timerLength, status }) => {
  const [timer, setTimer] = useState(timerLength)

  function playSounds() {
    const ding = new Audio('./audio-ding.wav');
    const chime = new Audio('./audio-chime.wav');

    if (timer === 3 || timer === 2 || timer === 1) {
      ding.play()
    }

    if (timer === 0 && status === 'running') {
      chime.play()
    }     
  }
  
  function startCountdown() {
    // While timer is not 0 reduce timer by 1 each second.
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    playSounds();

    // Sets status of app based on timer
    if (timer === 0) {
      if (status === 'running') {
        setCurrentExercise(currentExercise + 1)
        currentExercise === (exercises.length - 1) ? setStatus('complete') : setStatus('break')
      } else if (status === 'break') {
          setStatus("running")
      }
    }
  }

  // When the timer state changes, start the countdown
  useEffect(startCountdown, [timer])

  // When the currentExercise changes, set the timer to correct length
  useEffect(() => {
    setTimer(timerLength)
  }, [currentExercise])

  return (
    <div>
      {timer.toString()}
    </div>
  )
}

export default Countdown