import React from 'react'
import Layout from '../components/Layout'

import ReturnButton from '../components/shared/ReturnButton'

const Exercises = () => {
  return (
    <Layout>
      <ReturnButton text="Back" />
      <div className="text-xl">Exercises</div>
    </Layout>
  )
}

export default Exercises