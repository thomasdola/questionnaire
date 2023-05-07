import { MDBBtn, MDBCol, MDBRadio } from "mdb-react-ui-kit";
import { useState } from "react";

export const View = ({text, yes, no, id, last, onAnswer, onPrevious, category}) => {
    const [answer, setAnswer] = useState(yes)

    return (
        <MDBCol size="5" key={id}>
        <div className="fw-bold">
            <h4>{category}</h4>
            <span>Question {id} - </span>
            <span style={{marginLeft: 4}}>{text}</span>
        </div>
        <MDBRadio
            name="flexRadioDefault"
            id="flexRadioDefault1"
            label="Yes"
            checked={answer === yes}
            onChange={({target: {checked}}) => setAnswer(checked ? yes : no)}
        />
        <MDBRadio
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="No"
            checked={answer === no}
            onChange={({target: {checked}}) => setAnswer(checked ? no : yes)}
        />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {id !== 1 && (
                <MDBBtn onClick={onPrevious}>Previous</MDBBtn>
            )}
            <MDBBtn onClick={() => onAnswer(answer)}>{last ? 'Submit' : 'Next'}</MDBBtn>
        </div>
    </MDBCol>
    )
}