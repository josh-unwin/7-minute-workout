import React, { useEffect, useState } from 'react'
import { exercises } from '../exercises';
import styled from 'styled-components';

const Countdown = ({ currentExercise,  setCurrentExercise, setStatus, timerLength, status }) => {
  const CountdownDiv = styled.div`
  transition: 1s;
  border-color: #7CAFC4;

  &:hover {
    border-color: #7AE581;
  }
  `

  const [timer, setTimer] = useState(timerLength)
  
  function startCountdown() {
    console.log('current exercise: ', currentExercise, 'exercise length: ', exercises.length);
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      if (status === 'running') {
        console.log('in running if statement');
        setCurrentExercise(currentExercise + 1)
        console.log('before check: current exercise: ', currentExercise, 'exercise length: ', exercises.length);
        currentExercise === (exercises.length - 1) ? setStatus('complete') : setStatus('break')
      } else if (status === 'break') {
          setStatus("running")
      }
    }
  }

  useEffect(startCountdown, [timer])

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