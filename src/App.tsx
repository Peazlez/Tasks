import React from "react";
import "./App.css";
import {Button, Container, Row, Col} from 'react-bootstrap';

function App(): React.JSX.Element {
    return(
        <div>
            {/* Heading Text */}
            <h1>Mason Peasley (COS 420)</h1>

            {/* image with alt text */}
            <h1>Hello World</h1>
            <img src="Ela.jpeg" alt="My dog Ela"/>
            
            {/* list with three elements*/}
            Ordered List:
            <ol>
                <li>Toys</li>
                <li>Food</li>
                <li>Catch</li>
            </ol>

            {/* Bootstrap button (Log Hello World) */}
            <Button onClick={() => { console.log("Log Hello World") } }>Click Me</Button>

            {/*Red Filled rectangle*/}
            <Container>
                <Row>
                    <Col>
                        <div style={{width: "100px", height: "100px", backgroundColor: "red"}}></div>
                    </Col>
                    <Col>
                        <div style={{width: "100px", height: "100px", backgroundColor: "red" }}></div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default App;