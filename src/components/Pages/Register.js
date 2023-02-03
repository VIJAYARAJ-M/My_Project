import Raect from "react"
import { Row, Col, Button } from "reactstrap";
import { useState } from "react";
import "./Pages.css";

export default function Register(){
    const url = "http://127.0.0.1:8000/user/";

    const[data,setdata]=useState({
     Name: "",
     
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
               username:data.Name,
              
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
                <h1>SignUp</h1>
          </Col>
          </Row>
          <Row className="mt-2">
            <Col>
            <input type="text" name="Name" placeholder="Username" value={data.Name} onChange={(e)=>handle(e)}/>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
            <input type="email" name="Email" placeholder="Email" value={data.Email} onChange={(e)=>handle(e)}/>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
            <input type="password" name="Password" placeholder="Password" value={data.Password} onChange={(e)=>handle(e)}/>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Button onClick={submit}>Register</Button>
            </Col>
          </Row>

          
        </div>
    </div>
    );
}