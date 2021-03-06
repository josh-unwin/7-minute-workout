import React from 'react'
import styled from 'styled-components'

const ProgressBarVerticalDiv = styled.div`
  .progress {
    animation-name: progress;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    bottom: 0;
  }

  .bar {
    width: 11px;
  }

  @keyframes progress {
    0% {
      height: 0;
      background-color: #FFAD05;
    }
    50% {
      height: 50%;
      background-color: #FCFF4B;
    }
    100% {
      height: 100%;
      background-color: #7AE581;
    }
  }
`

const ProgressBarVertical = (props) => {
  return (
    <ProgressBarVerticalDiv className="ml-4 relative h-64" timerLength={props.timerLength}>
      <div className="bar absolute h-full bg-blueGrey">
      </div>
      <div className="progress bar absolute">
      </div>
    </ProgressBarVerticalDiv>
  )
}

export default ProgressBarVertical