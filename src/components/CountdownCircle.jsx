import React from 'react'
import styled from 'styled-components'

const CountdownCircleDiv = styled.div`
  animation-name: pulse;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  border-style: ${props => props.borderStyle};

  @keyframes pulse {
    0% {border-color: #7CAFC4;}
    50% {border-color: ${props => props.borderColor};}
    100% {border-color: #7CAFC4;}
  }
`

const CountdownCircle = ({children, timerLength, status}) => {
  let borderColor = '#FCFF4B'
  let borderStyle = 'solid'

  if (status === "break") {
    borderStyle = 'double'
  }

  return (
    <CountdownCircleDiv className="m-3 border-8 rounded-full w-84 h-84 flex justify-center items-center text-8xl" 
                        borderColor={borderColor} borderStyle={borderStyle} >
                          {children}
    </CountdownCircleDiv>
  )
}

export default CountdownCircle