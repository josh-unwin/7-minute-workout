import React from 'react'
import { FaFacebookF } from 'react-icons/fa';


const FacebookShare = () => {
  const facebookText = "Workout in 7 minutes, right from your home!%0a%0a7-minute-workout.netlify.com"

  return (
    <a className="link" href={`https://Facebook.com/intent/tweet?text=${facebookText.replace(" ", "%20")}`} target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
  )
}

export default FacebookShare