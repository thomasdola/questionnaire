import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import {View as QView} from './Question'
import {QUESTIONS} from './questions'
import { useState } from "react";

const answers = new Map()

export default function App() {
  const [current, setCurrent] = useState(() => QUESTIONS.find(({id}) => id === 1))
  const handlePrevious = () => {
    const prev_q = QUESTIONS.find(({id}) => id === current.id - 1)
    setCurrent(prev_q)
  }
  const handleOnAnswer = ans => {
    answers.set(current.id, {q: current, a: ans})
    if(current.last){
      console.log('done', {answers})
    }else{
      const next_q = QUESTIONS.find(({id}) => id === current.id + 1)
      setCurrent(next_q)
    }
  }
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <QView {...current} onPrevious={handlePrevious} onAnswer={handleOnAnswer}/>
      </MDBRow>
    </MDBContainer>
  );
}