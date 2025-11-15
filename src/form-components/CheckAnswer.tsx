import React, { useState } from "react";
import { Form } from "react-bootstrap";

//The CheckAnswer component allows a user to enter an answer to a short answer question, 
// and then displays whether they got it correct or incorrect. 
// The component takes in a parameter representing the expectedAnswer.

//You will need a state to handle the user’s given answer
//The user’s given answer should initially be the empty string
//When the user’s given answer matches the expectedAnswer, display ✔️; 
// otherwise display ❌

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>){
        setAnswer(event.target.value)
    }

    const correct = answer === expectedAnswer
    return (
        <div>
            <Form.Group controlId="answerInput">
                <Form.Label>Enter your answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}/>
            </Form.Group>
            <h3>Check Answer</h3>
            {/* show check mark if correct, 'X' if incorrect */}
            {correct ? "✔️" : "❌"}
        </div>
    );
}
