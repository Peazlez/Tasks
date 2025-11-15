import React, { useState } from "react";
import { Form } from "react-bootstrap";

/* The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown, 
and then displays whether they got it correct or incorrect. 
The component takes in a parameter representing the expectedAnswer and also a parameter representing the list of options.

You will need a state to represent the user’s currently selected choice.
The initial state of the selected choice is the first element of the options list.
When the user’s given answer matches the expectedAnswer, display ✔️; 
otherwise display ❌ */

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>){
        setSelected(event.target.value)
    }

    const correct = selected === expectedAnswer;
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice">
                <Form.Label>Select an answer </Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((option: string) => 
                        <option key={option} value={option}>{option}</option>
                    )}
                </Form.Select>
            </Form.Group>
            {/* show check mark if correct, 'X' if incorrect */}
            {correct ? "✔️" : "❌"}
        </div>
    );
}
