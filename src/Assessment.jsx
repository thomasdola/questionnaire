import { useEffect, useState } from "react";

const computeAssessment = (answers, category) => {
    let t = 0;

    if(category){
        answers.forEach(({a, q: {category: _category}}) => {
            if(_category === category){
                t = a + t
            }
        })
    }else{
        answers.forEach(({a}) => t = a + t)
    }
    
    return t;

}

export const Assessment = ({answers, email}) => {
    const [assesment_aa] = useState(() => {
        // AA

        return computeAssessment(answers, "AA");
    })

    const [assesment_ac] = useState(() => {
        // AA

        return computeAssessment(answers, "AC");
    })

    const [assesment] = useState(() => {
        return computeAssessment(answers)
    })

    useEffect(() => {

        // logic for getting assessment
        const assesment_for_aa = computeAssessment(answers, 'AA')
        const assesment_for_ac = computeAssessment(answers, 'AC')
        const assesment_for_all = computeAssessment(answers)

        // send email

        console.log('useEffect', {email, assesment_for_all, assesment_for_aa, assesment_for_ac})

    }, [answers, email])
    
    return (
        <>
            <div>Assessment page: {assesment}</div>
            <div>Assessment for AA: {assesment_aa}</div>
            <div>Assessment for AC: {assesment_ac}</div>

            {assesment >= 8 && (<div>Hospitals</div>)}
        </>
    )
}