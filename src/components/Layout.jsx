import React from 'react'
import styled from 'styled-components'

const LayoutDiv = styled.div`
  background-color: #044389;
  display: flex;
  text-align: center;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <LayoutDiv className="App">
      <div className="container h-full min-h-screen flex flex-col justify-center">
        {children}
      </div>
    </LayoutDiv>
  )
}

export default Layout