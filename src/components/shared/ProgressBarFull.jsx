import React, { useEffect } from 'react'
import styled from 'styled-components'

const ProgressBarFullDiv = styled.div`
  .progress1 {
    bottom: 0;
    transition: width 4s;
    transition-timing-function: linear;
  }

  .bar1 {
    height: 3px;
    bottom: 0;
  }
`

const ProgressBarFull = ({percentageComplete, setPercentageComplete, duration, setDuration, endDuration}) => {

  function totalDuration() {
    duration < endDuration && setTimeout(() => {
      setDuration(duration + 1);
      setPercentageComplete(Math.round(duration / endDuration * 100))
    }, 1000);
  }

  useEffect(totalDuration, [duration])

  console.log(percentageComplete);

  return (
    <ProgressBarFullDiv className="md:my-5 relative w-full text-left">
      <span className='text-xs text-left'>Total progress</span>
      <div className="bar1 absolute w-full bg-blueGrey">
      </div>
      <div className="progress1 bar1 absolute bg-yellow" style={{width: `${percentageComplete}%`}}>
      </div>
    </ProgressBarFullDiv>
  )
}

export default ProgressBarFull