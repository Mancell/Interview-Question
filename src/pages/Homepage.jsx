import React from 'react'
import Header from '../components/Header'
import Question from "../components/Question"

const Homepage = () => {
  return (
    <div className='p-3 mb-2 bg-warning text-dark'>
        <Header/>
        <Question/>
    </div>
  )
}

export default Homepage