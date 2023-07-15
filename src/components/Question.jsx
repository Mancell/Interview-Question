import React from 'react';
import InterviewAccord from './InterviewAccord';
import data from "../helper/data";


const Question = () => {
  console.log(data)
  return (
    <div className=''>
      {data.map((item) =>(
        <InterviewAccord key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default Question