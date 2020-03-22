import React from 'react'
import styled from 'styled-components'

const ButtonDiv = styled.button`
  color: #044389;
  padding: 14px 60px;
  border-radius: 8px;
  background: #FCFF4B;
  transition: background 0.3s ease;
  border: none;
  font-size: 20px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background: #FFAD05;
    color: #044389;
  }
`

const Button = ({text}) => {
  return (
    <ButtonDiv className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{text}</ButtonDiv>
  )
}

export default Button