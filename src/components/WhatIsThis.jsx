import React from 'react'
import Layout from '../components/Layout'

import ReturnButton from '../components/shared/ReturnButton'

const WhatIsThis = () => {
  return (
    <Layout>
      <ReturnButton text="Back" />
      <div className="mt-16 md:mt-32 mb-12 text-left flex flex-col min-h-screen h-full">
        <span className="text-3xl md:text-5xl">What is the 7 Minute Workout?</span>
        <span className="font-normal">
          The 7 Minute Workout is a scientifically developed, high intensity workout designed to target every muscle group.
          It provides a fast an easy way to keep fit, requiring just enough space to lay down, a chair and a wall.

          You can read more about it <a href="https://well.blogs.nytimes.com/2013/05/09/the-scientific-7-minute-workout/" target="_blank" rel="noopener noreferrer">
            here</a>.
        </span>
      </div>
    </Layout>
  )
}

export default WhatIsThis