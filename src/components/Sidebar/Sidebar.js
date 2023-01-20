import React, { useContext, useState } from "react";
//import {FaBars} from "react-icons/fa"
import { NavLink} from "react-router-dom";
//import { menuItem } from "./MenuItems";
import Nav from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {  FaBars  } from "react-icons/fa"
import { menuItem } from "./MenuItems";
import Submenu from "./Submenu";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"
import {AiFillSetting} from "react-icons/ai"
import {RiReactjsLine} from "react-icons/ri"
import { Row, Col, Button, Badge } from "reactstrap";
import useLocalStorage from 'use-local-storage'
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";
import {UserContext} from "../../App"
import { MDBSwitch } from 'mdb-react-ui-kit';

const Right =styled.div`

    background:var(--index-bg);
    height:100vh;
    width: 300px;
    right:  ${({isright}) => (isright ? '0' : '-100%')};
    position: fixed;
   
    padding:20px;
    z-index: 100;
    
 
`;



export default function Sidebar({children}){

    
  const[isopen, setopen] = useState(false);
  const toggle = () => setopen(!isopen);
  
  
  const[isright, setopen1] = useState(false);
    const toggle1 = () => {
        setopen1(!isright);
        
    }  

    const auth = useContext(UserContext);
    
    return(
       
         <div className="containers" data-theme={auth.theme}>
            
           
            <div style={{width: isopen ? "250px" : "60px"}} className="sidebar" >
                      <div className="top">
                            <h5 style={{display: isopen ? "block" : "none"}}  className="">Prowesstics</h5>
                            <div style={{marginLeft: isopen ? "90px" : "0px"}} className="bar">
                              <FaBars onClick={toggle}/>
                            </div>
                      </div>
                     <div   >
                    
                        
                       
                            {menuItem.map((item,index )=>{
                                    item.expand = isopen
                                return <Submenu  item={item} key={index}
                                
                                />
                            })}
                      
                     </div>
            </div>
             
            
                <Right isright={isright} >
                  
                    <Row className="">
                      <Col lg={10} className="">
                        <h5 >Dashboard Theme</h5>
                      </Col>
                      <Col lg={2} className="d-flex justify-content-end">
                         <AiOutlineClose color="var(--text-primary)" onClick={toggle1} size="2rem"/>
                      </Col>
                    </Row>
                    
                  
                   <Row className="mt-4">
                    <Col>
                     <h4>Theme</h4>
                    </Col>
                    <Col className="d-flex justify-content-center">
                     <MDBSwitch id='flexSwitchCheckDefault' label='' onClick={auth.color}/>
                    </Col>
                   </Row>

                  
                   
                   <Row>
                    <Col>
                    
                    </Col>
                   </Row>

                    
                  

                    

                    
                    

                    
                
                </Right>
                
           
           
           
            <main style={{width: isopen ? "81%" : "100%",height:"auto",backgroundColor:"var(--index-bg)",
            marginLeft: isopen ? "250px" : "60px",
             padding:"",display:"", flexDirection:""}}>
                
                
                    <Nav/>
                
                <div style={{backgroundColor:"", marginTop:""}}>
                   {children}
                </div>

               
                <div className="footer">
                    <div>
                        <button className="" /*onClick={switchTheme}*/ 
                                style={{borderRadius:"10px"}}><RiReactjsLine onClick={toggle1} size="2rem" className="setting"/>
                        </button>
                        
                    </div>
            
                </div> 
                
                
                
            </main>
           
          
       
            
        </div>
        
        
    );
}