import React from 'react'
import styled from 'styled-components'

const ProgressBarFullDiv = styled.div`
  .progress {
    animation-name: progress;
    animation-duration: 30s;
    animation-timing-function: linear;
    bottom: 0;
  }

  .bar {
    height: 6px;
  }

  @keyframes progress {
    0% {
      width: 0;
      background-color: #FFAD05;
    }
    50% {
      width: 50%;
      background-color: #FCFF4B;
    }
    100% {
      width: 100%;
      background-color: #7AE581;
    }
  }
`

const ProgressBarFull = () => {
  return (
    <ProgressBarFullDiv className="ml-4 relative w-full">
      <div className="bar absolute w-full bg-blueGrey">
      </div>
      <div className="progress bar absolute">
      </div>
    </ProgressBarFullDiv>
  )
}

export default ProgressBarFull