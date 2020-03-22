import React, { useEffect, useState } from 'react'
import { FaRunning, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Layout from './Layout'

const Exercise = ({exerciseTitle}) => {
  const [timer, setTimer] = useState(30);

  function startCountdown() {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);

    if (timer === 0) {
      // setTimeout(() => {alert("time up!")}, 1000)
    }
  }

  useEffect(startCountdown, [timer])

  return (
    <Layout>
      <Link to="/">
        <div className="absolute top-0 left-0 m-6 flex items-center"><FaArrowLeft className="mr-2" /> Stop</div>
      </Link>
      <div className="flex w-full">
        <div className="w-1/2 flex justify-center items-center">
          <div className="m-3 border-8 border-blueGrey text-6xl rounded-full w-64 h-64 flex justify-center items-center">
            {timer.toString()}
          </div>
        </div>
        <div className="w-1/2 justify-center items-center">
          <span className="text-4xl">{exerciseTitle}</span>
          <span><FaRunning className="my-5" style={{fontSize: "250px"}} /></span>
        </div>
      </div>
    </Layout>
  )
}

export default Exercise