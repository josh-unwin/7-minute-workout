import React, { useEffect, useState } from 'react'
import { FaRunning, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Layout from './Layout'
import Countdown from '../components/Countdown'

import { exercises } from '../exercises'

const Exercise = (props) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [initialCountdown, setInitialCountdown] = useState(3);
  const [status, setStatus] = useState("off");
  console.log(currentExercise);

  useEffect(() => {
    if (initialCountdown === 0) {
      setStatus('running')
    } else {
      initialCountdown > 0 && setTimeout(() => setInitialCountdown(initialCountdown - 1), 1000);
    }
  }, [initialCountdown])

  return (
    <Layout>
      <Link to="/">
        <div className="absolute top-0 left-0 m-6 flex items-center"><FaArrowLeft className="mr-2" /> Stop</div>
      </Link>

      {/* DISPLAY OF INITIAL COUNTDOWN, WHEN status = false */}
      {status === "off" &&
        <div className="text-xl flex flex-col justify-center">
          <span>Get ready!</span>
          <span className="text-8xl">{initialCountdown}</span>
        </div>
      }

      {/* DISPLAY AND START EXERCISES WHEN status = true */}
      {status === "running" &&
        <>
        <div className="flex w-100 m-16">
          <div className="w-1/2 flex justify-center items-center">
            <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                       status={status} setStatus={setStatus} timerLength={5} />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-4xl">{exercises[currentExercise].title}</span>
            <span><FaRunning className="my-5" style={{fontSize: "250px"}} /></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-auto w-full">
          <div className="text-xl text-yellow">Next up</div>
          <div className="text-3xl text-blueGrey">{exercises[currentExercise + 1].title}</div>
        </div>
        </>
      }

      {/* DISPLAY OF BREAK/REST PERIOD, WHEN status = break */}
      {status === "break" &&
        <div className="text-xl flex flex-col justify-center items-center">
          <span className="mb-3">Next exercise coming up!</span>
          <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
          status={status} setStatus={setStatus} timerLength={3} />
        </div>
      }
    </Layout>
  )
}

export default Exercise