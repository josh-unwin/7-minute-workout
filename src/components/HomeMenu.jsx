import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TwitterShare from '../components/shared/TwitterShare'
import FacebookShare from '../components/shared/FacebookShare'

const HomeMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    color: #7CAFC4;
    transition: 0.2s ease;
    margin: 0.5em;
    font-size: 1.4em;

    .link {
      transition: 0.2s ease;
    }

    .selected {
      font-size: 1.8rem;
      color: #CCE3EC;
    }

    .link:hover, .link:hover {
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
        <Link to="/exercises">
          <a className="link text-2xl" href="/">The Exercises</a>
        </Link>
      </div>
      <div>
        Rest period: <span className={`link ${restPeriod === 10 ? 'selected' : ''}`} onClick={() => {setRestPeriod(10)}}>10</span> |&nbsp;
                     <span className={`link ${restPeriod === 15 ? 'selected' : ''}`} onClick={() => {setRestPeriod(15)}}>15</span> seconds
      </div>
      <div className="flex mb-0">
        <TwitterShare />
        <FacebookShare />
      </div>
      <div style={{marginTop: "0"}}>
        <a className="text-sm" href="https://www.joshunwin.com" target="_blank" rel="noopener noreferrer">Built by joshunwin</a>
      </div>
    </HomeMenuDiv>
  )
}

export default HomeMenu