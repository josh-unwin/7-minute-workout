import React from 'react'
import Layout from '../components/Layout'
import { exercises } from '../exercises'
import { ReactSVG } from 'react-svg'

import ReturnButton from '../components/shared/ReturnButton'

const Exercises = () => {
  return (
    <Layout>
      <ReturnButton text="Back" />
      <div className="flex flex-col">
        <div className="w-full">
          <div className="mt-12 md:mt-32 mb-12 text-left flex flex-col">
            <span className="text-5xl">Exercises</span>
            <span className="">All you need is enough space to lay down, a chair and a clear wall space.</span>
            <span>
              Please ensure you are performing each exercise safely, look online for more detailed guidelines if you need them.
            </span>
            <span className="">Below is each excercise in order.</span>
          </div>
          {exercises.map((exercise, index) => {
            return (
            <div className={`min-h-64 flex flex-col md:flex-row py-2 my-6 border-blueGrey ${index === (exercises.length - 1) ? '' : 'border-b'}`} key={index}>
              <div className="md:w-1/3 flex justify-center items-center">
              <ReactSVG
                src={exercise.img}
                beforeInjection={svg => {
                  svg.setAttribute('style', 'width: 200px')
                }}
                />
              </div>
              <div className="md:w-2/3 text-left">
                <div className="text-yellow text-xl">{exercise.title}</div>
                <div className="font-normal">{exercise.description}</div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Exercises