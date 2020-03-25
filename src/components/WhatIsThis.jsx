import React from 'react'
import Layout from '../components/Layout'
import { exercises } from '../exercises'
import { FaRunning } from 'react-icons/fa';

import ReturnButton from '../components/shared/ReturnButton'

const WhatIsThis = () => {
  return (
    <Layout>
      <ReturnButton text="Back" />
      <div className="mt-32 mb-12 text-left flex flex-col min-h-screen h-full">
        <span className="text-5xl">What is the 7 Minute Workout?</span>
        <span className="">The 7 Minute Workout is a scientifically developed</span>
        <span className="">Below is each excercise in order.</span>
      </div>
    </Layout>
  )
}

export default WhatIsThis