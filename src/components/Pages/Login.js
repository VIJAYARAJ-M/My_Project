import React from "react";
import { Row, Col } from "reactstrap";
import "./Pages.css";


export default function Login(){
    return(
        <div className="main">
            
            <div className="cards">
              <Row>
                <Col>
                    <h1>login</h1>
              </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                <input type="text" placeholder="Username"/>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                <input type="text" placeholder="Username"/>
                </Col>
              </Row>

              
            </div>
        </div>
    )
}