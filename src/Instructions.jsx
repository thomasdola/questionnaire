import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';

export const Instructions = ({onEmail}) => {
    const [email, setEmail] = useState()

    return (
        <div>
            <h3>Email</h3>
            <p>form to collect email</p>

            <MDBInput onChange={({target: {value}}) => value && setEmail(value)} label='Email' type='email' />

            <button disabled={!email} onClick={() => onEmail(email)}>Start</button>
        </div>
    )
}