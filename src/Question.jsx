import { MDBBtn, MDBCol, MDBRadio } from "mdb-react-ui-kit";
import { useState } from "react";

export const View = ({text, yes, no, id, last, onAnswer, onPrevious}) => {
    const [answer, setAnswer] = useState(yes)

    return (
        <MDBCol size="5" key={id}>
        <form className="bg-white mt-3" action="">
        <p className="fw-bold">
            <span>Question {id} - </span>
            <span style={{marginLeft: 4}}>{text}</span>
        </p>
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
        </form>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {id !== 1 && (
                <MDBBtn onClick={onPrevious}>Previous</MDBBtn>
            )}
            <MDBBtn onClick={() => onAnswer(answer)}>{last ? 'Submit' : 'Next'}</MDBBtn>
        </div>
    </MDBCol>
    )
}