import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TwitterShare from '../components/shared/TwitterShare'
import FacebookShare from '../components/shared/FacebookShare'

const HomeMenuDiv = styled.div`
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
    <HomeMenuDiv className="flex flex-col md:items-end">
      <div>
        <Link to="/exercises">
          <span className="link text-2xl" href="/">The Exercises</span>
        </Link>
      </div>
      <div>
        <Link to="/what-is-this">
          <span className="link text-2xl" href="/">What is this?</span>
        </Link>
      </div>
      <div className="text-right">
        Rest period: <span className={`link ${restPeriod === 10 ? 'selected' : ''}`} onClick={() => {setRestPeriod(10)}}>10</span> |&nbsp;
                     <span className={`link ${restPeriod === 15 ? 'selected' : ''}`} onClick={() => {setRestPeriod(15)}}>15</span> seconds
      </div>
      <div className="flex justify-center mb-0">
        <TwitterShare />
        <FacebookShare />
      </div>
      <div className="flex flex-col text-center md:text-right" style={{marginTop: "10px"}}>
        <a className="text-sm" href="https://www.joshunwin.com" target="_blank" rel="noopener noreferrer">Built by joshunwin</a>
        <a className="text-sm" href="https://www.fiverr.com/workoutlabs" target="_blank" rel="noopener noreferrer">Graphics by workoutlabs</a>
      </div>
    </HomeMenuDiv>
  )
}

export default HomeMenu