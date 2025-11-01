import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function Doubler(): React.JSX.Element {
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

    function Halver(): React.JSX.Element {
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

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
