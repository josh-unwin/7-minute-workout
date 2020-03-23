import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaFacebookF } from 'react-icons/fa';

const HomeMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    color: #7CAFC4;
    transition: 0.2s ease;
    margin: 0.5em;
    font-size: 1.4em;

    a, span {
      transition: 0.2s ease;
    }

    .selected {
      font-size: 1.8rem;
      color: #CCE3EC;
    }

    a:hover, span:hover {
      font-size: 1.8rem;
      color: #CCE3EC;
      cursor: pointer
    }
  }
`

const HomeMenu = ({restPeriod, setRestPeriod}) => {
  return (
    <HomeMenuDiv>
      <div>
        <a  className="text-2xl" href="/">The Exercises</a>
      </div>
      <div>
        Rest period: <span className={restPeriod === 10 ? 'selected' : ''} onClick={() => {setRestPeriod(10)}}>10</span> |&nbsp;
                     <span className={restPeriod === 15 ? 'selected' : ''} onClick={() => {setRestPeriod(15)}}>15</span> seconds
      </div>
      <div className="flex mb-0">
        <a className="pr-2" href="/"><FaTwitter /></a>
        <a href="/"><FaFacebookF /></a>
      </div>
      <div style={{marginTop: "0"}}>
        <span className="text-sm hover:text-lg" href="/">Built by joshunwin</span>
      </div>
    </HomeMenuDiv>
  )
}

export default HomeMenu