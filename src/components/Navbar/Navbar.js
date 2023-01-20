import React from "react";
import { Col, Row,Card } from "reactstrap";
import "./Navbar.css";
import profile from "../../Image/new.png"

export default function Nav(){
    return(
        <div className="topnav ">
            <Col lg={2} className="d-flex justify-content-center align-items-center">
            <h5 style={{color:"var(--text-primary)"}} >Dashboard</h5>
            </Col>
            
            <Col lg={6} className="d-flex justify-content-end align-items-center">
           
            
            
            </Col>
            <Col lg={4} className="d-flex justify-content-center align-items-center">
              <Row>
                <Col lg={3} className="d-flex justify-content-center align-items-center">
                    <Card className="profile">
                     <img src={profile} height={40} style={{borderRadius:"20px"}}/>
                    </Card>
                </Col>
                <Col lg={9} className="d-flex justify-content-center align-items-center">
                <h6 style={{color:"var(--text-primary)"}}>Vijayaraj Muthuraman</h6>
                </Col>
               
              </Row>
            
            </Col>
        </div>
    )
}