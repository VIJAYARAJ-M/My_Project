import React, { useState } from "react";
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

const Right =styled.div`

    background: aqua;
    height:100vh;
    width: 250;
    right:  ${({isright}) => (isright ? '0' : '-100%')};
    position: fixed;
    z-index: 20;
    
 
`;



export default function Sidebar({children}){
    
  const[isopen, setopen] = useState(false);
  const toggle = () => setopen(!isopen);
  
  
  const[isright, setopen1] = useState(false);
    const toggle1 = () => {
        setopen1(!isright);
        
    }  
    
    return(
     
        <div className="container">
            
           
            <div style={{width: isopen ? "200px" : "50px"}} className="sidebar" >
                      <div className="top">
                            <h1 style={{display: isopen ? "block" : "none"}}  className="">Logo</h1>
                            <div style={{marginLeft: isopen ? "50px" : "0px"}} className="bar">
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
             
            
                <Right isright={isright}>
                    <div>
                    <h2 >kdsjds;djsscscas</h2>
                    <AiOutlineClose onClick={toggle1}/>
                    </div>
                </Right>
                
           
           
           
            <main style={{width:"100%",height:"auto",backgroundColor:"#e0e0e0",marginLeft: isopen ? "200px" : "50px",
             padding:"",display:"", flexDirection:""}}>
                
                
                    <Nav/>
                
                <div style={{backgroundColor:"red", marginTop:"80px"}}>
                   {children}
                </div>

               
                <div className="footer">
                    <div>
                        <button className="" /*onClick={switchTheme}*/ 
                                style={{borderRadius:"10px"}}><AiFillSetting onClick={toggle1} size="2rem" className="setting"/>
                        </button>
                        
                    </div>
            
                </div> 
                
                
                
            </main>
           
          
       
            
        </div>
        
    );
}