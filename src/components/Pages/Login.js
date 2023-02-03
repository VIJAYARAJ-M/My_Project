import React from "react";
import { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { getDataGroupBy } from "rsuite/esm/utils";
import "./Pages.css";


export default function Login(){

  const url = "http://127.0.0.1:8000/login/";

  const[data,setdata]=useState({
    Email: "",
    Password: ""
   })
 
   function submit(e){
     e.preventDefault();
           
      
             fetch(url,{
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               email:data.Email,
               password:data.Password
             })
           });
    } 
 
    function handle(e){
     const newdata={...data}
     newdata[e.target.name]=e.target.value
     setdata(newdata);
     console.log(newdata);
    }
    return(
        <div className="main">
            
            <div className="cards">
              <Row>
                <Col>
                    <h1>SignIn</h1>
              </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                <input type="email" name="Email"  placeholder="Email" value={data.Email} onChange={(e)=>handle(e)}/>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                <input type="password" name="Password" placeholder="Password" value={data.Password} onChange={(e)=>handle(e)}/>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Button onClick={submit}>Login</Button>
                </Col>
              </Row>

              
            </div>
        </div>
    )
}