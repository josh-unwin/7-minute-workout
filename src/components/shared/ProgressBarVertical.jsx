import React from 'react'
import styled from 'styled-components'

const ProgressBarVerticalDiv = styled.div`
  .progress {
    animation-name: progress;
    animation-duration: 30s;
    animation-timing-function: linear;
    bottom: 0;
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

const ProgressBarVertical = () => {
  return (
    <ProgressBarVerticalDiv className=" ml-4 relative h-64">
      <div className="absolute h-full w-2 bg-blueGrey">
      </div>
      <div className="progress absolute w-2">
      </div>
    </ProgressBarVerticalDiv>
  )
}

export default ProgressBarVertical