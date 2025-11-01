import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Doublers{
    setDhValue: React.Dispatch<React.SetStateAction<number>>
}

interface Halvers{
    setDhValue: React.Dispatch<React.SetStateAction<number>>
}

    function Doubler({setDhValue} : Doublers): React.JSX.Element {
        return (
            <Button
                className = "btn btn-primary"
                type = "button"
                onClick={() => {
                    setDhValue(oldValue => 2 * oldValue);
                }}
            >
                Double
            </Button>
        );
    }

    function Halver({ setDhValue} : Doublers): React.JSX.Element {
        return (
            <Button
                className = "btn btn-primary"
                type = "button"
                onClick={() => {
                    setDhValue(oldValue => 0.5 * oldValue);
                }}
            >
                Halve
            </Button>
        );
    }
export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} />
            <Halver setDhValue={setDhValue} />
        </div>
    );
}
