import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import Layout from './Layout'
import Countdown from './Countdown'
import CountdownCircle from './CountdownCircle'
import ReturnButton from './shared/ReturnButton'
import TwitterShare from '../components/shared/TwitterShare'
import FacebookShare from '../components/shared/FacebookShare'
import ProgressBarVertical from '../components/shared/ProgressBarVertical'
import ProgressBarFull from '../components/shared/ProgressBarFull'

import { exercises } from '../exercises'

const Go = (props) => {
  let restPeriod = props.location.restPeriod;

  if (!restPeriod) {
    restPeriod = 10
  }
  
  const [currentExercise, setCurrentExercise] = useState(0);
  const [initialCountdown, setInitialCountdown] = useState(0);
  const [status, setStatus] = useState("off");
  const [exerciseLength, setExerciseLength] = useState(30)
  const [endDuration] = useState(restPeriod === 15 ? 525 : 468);
  const [duration, setDuration] = useState(0)
  const [percentageComplete, setPercentageComplete] = useState(0)
  
  useEffect(() => {
    if (currentExercise === exercises.length - 1 || currentExercise === exercises.length - 2) {
      setExerciseLength(15)
    } else {
      setExerciseLength(30)
    }
  },[currentExercise])

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
        <div className="flex flex-col lg:flex-row -mt-2 mx-6 mb-2 lg:m-16">
          <div className="lg:w-1/2 flex justify-center items-center">
            <CountdownCircle timerLength={restPeriod} status={status}>
              <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                        status={status} setStatus={setStatus} timerLength={exerciseLength} />
            </CountdownCircle>
            <ProgressBarVertical timerLength={exerciseLength} />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <span className="text-4xl">{exercises[currentExercise].title}</span>
            <span style={{height: '350px'}}>
              <ReactSVG
              src={exercises[currentExercise].img}
              beforeInjection={svg => {
                svg.setAttribute('style', 'width: 350px')
              }}
              />
             </span>
            {/* <span className="font-normal text-sm">{exercises[currentExercise].description}</span> */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-auto w-full lg:my-4">
          <ProgressBarFull duration={duration} setDuration={setDuration} endDuration={endDuration} 
                          percentageComplete={percentageComplete} setPercentageComplete={setPercentageComplete} />
          <div className="flex w-full">
            <div className="w-1/2 flex justify-start items-start">
              <div className="mt-1 text-xl md:text-2xl text-blueGrey text-left w-full">Exercise <span className="text-yellow">{currentExercise + 1}</span> / 13</div>
            </div>
            <div className="w-1/2 flex justify-center items-end flex-col">
              <div className="mt-1 text-xl text-yellow">Next up</div>
              <div className="text-3xl text-blueGrey">
                {exercises[currentExercise + 1] ? exercises[currentExercise + 1].title : "Last one, nearly there!"}
              </div>
            </div>
          </div>
        </div>
        </>
      }

      {/* DISPLAY OF BREAK/REST PERIOD, WHEN status = break */}
      {status === "break" &&
        <div className="flex flex-col justify-center items-center">
          <span className="mb-3 text-xl">Next exercise coming up!</span>
          <span className="mb-3 text-4xl text-yellow">{exercises[currentExercise].title}</span>
          <div className="flex flex-col lg:flex-row mx-6 mb-2 lg:m-16 w-full">
            <div className="lg:w-1/2 flex justify-center lg:justify-end items-center md:mr-4">
              <CountdownCircle timerLength={restPeriod} status={status}>
                <Countdown currentExercise={currentExercise} setCurrentExercise={setCurrentExercise} 
                          status={status} setStatus={setStatus} timerLength={restPeriod} />
              </CountdownCircle>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-start items-center md:ml-4 mt-4 md:mt-0">
              <span style={{height: '250px'}}>
              <ReactSVG
              src={exercises[currentExercise].img}
              beforeInjection={svg => {
                svg.setAttribute('style', 'width: 250px')
              }}
              />
              </span>
            </div>
          </div>
          <ProgressBarFull duration={duration} setDuration={setDuration} endDuration={endDuration} 
                            percentageComplete={percentageComplete} setPercentageComplete={setPercentageComplete} />
          <div className="mt-1 text-xl md:text-2xl text-blueGrey text-left w-full">Exercise <span className="text-yellow">{currentExercise + 1}</span> / 13</div>
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