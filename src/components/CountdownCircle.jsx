import React from 'react'
import styled from 'styled-components'

const CountdownCircleDiv = styled.div`
  transition: 1s;
  border-color: #7CAFC4;

  &:hover {
    border-color: #7AE581;
  }
`

const CountdownCircle = ({children, timerLength, status}) => {
  console.log('from circle: ', status, timerLength);
  return (
    <CountdownCircleDiv className="m-3 border-8 text-8xl rounded-full w-84 h-84 flex justify-center items-center">
      {children}
    </CountdownCircleDiv>
  )
}

export default CountdownCircle