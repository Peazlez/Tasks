import React from "react";
import "./App.css";
import {Button, Container, Row, Col} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div>
            {/* Heading Text */}
            <header className="App-header">
                <h1>COS420</h1>
            </header>
            
            {/* image with alt text */}
            <h1>Hello World</h1>
            <img src="Ela.jpeg" alt="My dog Ela" />
            {/* list with three elements*/}
            Ordered List:
            <ol>
                <li>Toys</li>
                <li>Food</li>
                <li>Catch</li>
            </ol>
            {/* Bootstrap button (Log Hello World) */}
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            {/*Red Filled rectangle*/}
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;