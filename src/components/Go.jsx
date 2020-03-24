import React, { useEffect, useState } from 'react'
import { FaRunning, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './Layout'
import Countdown from './Countdown'
import CountdownCircle from './CountdownCircle'

import { exercises } from '../exercises'

const Go = (props) => {
  let restPeriod = props.location.restPeriod;

  if (!restPeriod) {
    restPeriod = 10
  }

  const [currentExercise, setCurrentExercise] = useState(0);
  // TODO: Set initialCountdown back to 3
  const [initialCountdown, setInitialCountdown] = useState(0);
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
            <CountdownCircle timerLength={restPeriod} status={status}>
              <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                        status={status} setStatus={setStatus} timerLength={5} />
            </CountdownCircle>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-4xl">{exercises[currentExercise].title}</span>
            <span><FaRunning className="my-5" style={{fontSize: "250px"}} /></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-auto w-full">
          <div className="text-xl text-yellow">Next up</div>
          <div className="text-3xl text-blueGrey">
            {exercises[currentExercise + 1] ? exercises[currentExercise + 1].title : "This is the last one, nearly there!"}
          </div>
        </div>
        </>
      }

      {/* DISPLAY OF BREAK/REST PERIOD, WHEN status = break */}
      {status === "break" &&
        <div className="flex flex-col justify-center items-center">
          <span className="mb-3 text-xl">Next exercise coming up!</span>
          <span className="mb-3 text-3xl text-yellow">{exercises[currentExercise].title}</span>
          <CountdownCircle timerLength={restPeriod} status={status}>
            <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                      status={status} setStatus={setStatus} timerLength={restPeriod} />
          </CountdownCircle>
        </div>
      }

      {/* DISPLAY OF FINISHED PAGE, WHEN status = complete */}
      {status === "complete" &&
        <div className="flex flex-col justify-center items-center">
          <span className="mb-3 text-3xl text-yellow">Finished!</span>
          <span className="mb-3 text-xl">Nice work! You must be thirsty, go grab a drink!</span>
        </div>
      }
    </Layout>
  )
}

export default Go