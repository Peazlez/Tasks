import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    //use states for individual dice
    const [value, setValue] = useState<number>(1);
    const [value1, setValue1] = useState<number>(2);
    
    // game state logic Booleans for easier message handling showing "Win" or "Lose"
    const isSnakeEyes = value ===1 && value1 === 1;
    const isWin = value === value1 && !isSnakeEyes && value !== 0;

        return (
            <div>
                <span>
                    {/*Left Button*/}
                    <Button
                        onClick={() => {
                            setValue(d6());
                        }}
                    >
                        Roll Left
                    </Button>
                    <span data-testid="left-die"> to {value}.</span>
                    {/*Right Button*/}
                    <Button
                        onClick={() => {
                            setValue1(d6());
                        }}
                    >
                        Roll Right
                    </Button>
                    <span data-testid="right-die">to {value1}.</span>
                </span>
                {/* Win/Lose Messages, render null if no win or lose */}
                <div>
                    {isSnakeEyes ?
                        <span>Lose</span>
                    : isWin ?
                        <span>Win</span>
                    :   null}
                </div>
            </div>
        );
}

// The TwoDice component will simulate a game where you roll two dice in an attempt to get matching values. 
// However, you lose the game if your dice ever come up as a pair of ones (“snake eyes”).

// You will need two states, one for each die.
// Each die’s value should be rendered in the View in a span tag of their own, 
// with the first dice having the data-testid of left-die and the second dice having the data-testid of right-die.
// You will need two “Roll” buttons (labelled Roll Left and Roll Right).
// Clicking a Roll button will change the value for the corresponding dice using the provided d6 function.
// Make the default initial values of the dice be different, i.e. each value in useState(value)
// When the two states are equal and equal to 1, render a message that includes the word Lose.
// When the two states are equal, render a message that includes the word Win.
// If you do all these and are still not passing all tests, read the test file, it is a good practice! In much of software engineering, the tests are the product spec.
// Testing and Deploying