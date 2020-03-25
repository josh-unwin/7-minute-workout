import React from 'react'
import { FaTwitter } from 'react-icons/fa';


const TwitterShare = () => {
  const twitterText = "Workout in 7 minutes, right from your home!%0a%0a7-minute-workout.netlify.com"

  return (
    <a className="pr-2 link" href={`https://twitter.com/intent/tweet?text=${twitterText.replace(" ", "%20")}`} target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
  )
}

export default TwitterShare