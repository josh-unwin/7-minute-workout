import React, { useEffect, useState } from 'react'
import { FaRunning, FaTwitter, FaFacebookF } from 'react-icons/fa';
import Layout from './Layout'
import Countdown from './Countdown'
import CountdownCircle from './CountdownCircle'
import ReturnButton from './shared/ReturnButton'
import TwitterShare from '../components/shared/TwitterShare'
import FacebookShare from '../components/shared/FacebookShare'
import ProgressBarVertical from '../components/shared/ProgressBarVertical'

import { exercises } from '../exercises'

const Go = (props) => {
  let restPeriod = props.location.restPeriod;

  if (!restPeriod) {
    restPeriod = 10
  }

  const [currentExercise, setCurrentExercise] = useState(0);
  // TODO: Set initialCountdown back to 3
  const [initialCountdown, setInitialCountdown] = useState(3);
  const [status, setStatus] = useState("off");

  useEffect(() => {
    if (initialCountdown === 0) {
      setStatus('running')
    } else {
      initialCountdown > 0 && setTimeout(() => setInitialCountdown(initialCountdown - 1), 1000);
    }
  }, [initialCountdown])

  return (
    <Layout>
      <ReturnButton text={status === "complete" ? "Back" : "Stop"} />
      {/* DISPLAY OF INITIAL COUNTDOWN, WHEN status = false */}
      {status === "off" &&
        <div className="text-xl flex flex-col justify-center">
          <span>Get ready!</span>
          <span className="text-10xl">{initialCountdown}</span>
        </div>
      }

      {/* DISPLAY AND START EXERCISES WHEN status = true */}
      {status === "running" &&
        <>
        <div className="flex w-100 m-16">
          <div className="w-1/2 flex justify-center items-center">
            <CountdownCircle timerLength={restPeriod} status={status}>
              <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                        status={status} setStatus={setStatus} timerLength={30} />
            </CountdownCircle>
            <ProgressBarVertical />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-4xl">{exercises[currentExercise].title}</span>
            <span><FaRunning className="my-5" style={{fontSize: "250px"}} /></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-auto w-full my-4">
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
          <span className="mb-3 text-4xl text-yellow">{exercises[currentExercise].title}</span>
          <CountdownCircle timerLength={restPeriod} status={status}>
            <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                      status={status} setStatus={setStatus} timerLength={restPeriod} />
          </CountdownCircle>
        </div>
      }

      {/* DISPLAY OF FINISHED PAGE, WHEN status = complete */}
      {status === "complete" &&
        <div className="flex flex-col justify-center items-center">
          <span className="mb-6 text-5xl text-yellow">Finished!</span>
          <span className="mb-3 text-xl">Nice work! You must be thirsty, go grab a drink!</span>
          <div className="flex flex-col mb-0 text-blueGrey text-sm">
            <span>If you know someone who'll enjoy this, feel free to share!</span>
            <div className="flex justify-center mt-3 text-3xl">
              <TwitterShare />
              <FacebookShare />
            </div>
          </div>
        </div>
      }
    </Layout>
  )
}

export default Go