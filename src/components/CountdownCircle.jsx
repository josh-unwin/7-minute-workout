import React from 'react'
import styled from 'styled-components'

const CountdownCircleDiv = styled.div`

`

const CountdownCircle = ({children}) => {
  return (
    <CountdownCircleDiv className="m-3 border-8 text-8xl rounded-full w-84 h-84 flex justify-center items-center">
      {children}
    </CountdownCircleDiv>
  )
}

export default CountdownCircle