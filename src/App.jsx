import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import {View as QView} from './Question'
import {QUESTIONS} from './questions'
import { useState } from "react";
import { Assessment } from "./Assessment";
import {Instructions} from './Instructions'

const answers = new Map()

export default function App() {
  const [v, setV] = useState('i')
  const [email, setEmail] = useState()
  const [current, setCurrent] = useState(() => QUESTIONS.find(({id}) => id === 1))
  const handleEmail = email => {
    setEmail(email)
    setV('q')
  }
  const handlePrevious = () => {
    const prev_q = QUESTIONS.find(({id}) => id === current.id - 1)
    setCurrent(prev_q)
  }
  const handleOnAnswer = ans => {
    answers.set(current.id, {q: current, a: ans})
    if(current.last){
      setV('a')
    }else{
      const next_q = QUESTIONS.find(({id}) => id === current.id + 1)
      setCurrent(next_q)
    }
  }
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        {v === 'i' && (<Instructions onEmail={handleEmail}/>)}
        {v === 'q' && (<QView {...current} onPrevious={handlePrevious} onAnswer={handleOnAnswer}/>)}
        {v === 'a' && (<Assessment answers={answers} email={email}/>)}
      </MDBRow>
    </MDBContainer>
  );
}