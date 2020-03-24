import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ReturnButton = ({text}) => {
  return (
  <Link to="/">
    <div className="absolute top-0 left-0 m-6 flex items-center"><FaArrowLeft className="mr-2" /> {text}</div>
  </Link>
  )
}

export default ReturnButton