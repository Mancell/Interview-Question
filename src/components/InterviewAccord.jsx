
import {arrowdown, arrowup} from "../helper/icons"
import { useState, } from 'react'


const InterviewAccord = ({id,question, answer}) => {
  const [click, setClick] = useState(false);
  
  return (
    <div>
      <div>
        <h1 className="bg-danger">
          {id}. {question}
        </h1>
        <div onClick={() => setClick(!click)}>
          <p> {click ? arrowup : arrowdown} </p>
        </div>
      </div>
      {click && (
        <div>
          <div onClick={() => setClick(false)}></div>
          {answer}
        </div>
      )}
    </div>
  );
};

export default InterviewAccord