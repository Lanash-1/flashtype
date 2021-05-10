import React from 'react';
import './../TestLetter/TestLetter.css';

const TestLetter = ({individualLetterInfo}) => {

    const status = individualLetterInfo.status;

    // let statusClass;

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notattempted: "test-letter-undefined"
    }[status]

    // if(status === "correct"){
    //     statusClass = "test-letter-correct";
    // }else if(status ==="incorrect") {
    //     statusClass = "test-letter-incorrect";
    // }else if(status === "notattempted") {
    //     statusClass = "test-letter-undefined";
    // }

    return (
        <span className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
}

export default TestLetter;