import React from 'react'
import styled from 'styled-components'
import { FaRedo } from 'react-icons/fa';

const QuickStepsDiv = styled.div`
  display: flex;
  width: 100%;

  .border-inset {
    border-style: inset
  }
`

const QuickSteps = ({restPeriod}) => {
  return (
    <QuickStepsDiv className="md:mx-40">
      <div className="flex-grow flex flex-col items-center text-xs md:text-base">
        <div className="m-3 border-4 border-blueGrey text-2xl md:text-5xl rounded-full w-16 h-16 md:w-32 md:h-32 flex justify-center items-center">
          30
        </div>
        second exercises
      </div>
      <div className="flex-grow flex flex-col items-center text-xs md:text-base">
        <div className="m-3 border-4 border-double border-blueGrey text-2xl md:text-5xl rounded-full w-16 h-16 md:w-32 md:h-32 flex justify-center items-center">
            {restPeriod}
        </div>
          second break
      </div>
      <div className="flex-grow flex flex-col items-center text-xs md:text-base">
        <div className="m-3 border-4 border-inset border-blueGrey text-2xl md:text-5xl rounded-full w-16 h-16 md:w-32 md:h-32 flex justify-center items-center">
          <FaRedo />
        </div>
        repeat!
      </div>
    </QuickStepsDiv>
  )
}

export default QuickSteps