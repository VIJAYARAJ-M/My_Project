import React, { useState } from "react";
import {AiFillSetting} from "react-icons/ai"
import styled from "styled-components";
import "./footer.css"
 
import { Link } from "react-router-dom";

 const RightNavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

 const RightSidebar =styled.div`
    width:250px; 
    height:100vh;
    
    
    display:flex;
    justify-content:center;
    
    left: ${({isopen}) => (isopen ? '0' : '-100%')};
    transition: 350ms;
    
`;

const RightSidebarwarb =styled.div`
    width:10% ;
`;

export default function Footer(){
    
   

    const[isright, setopen] = useState(false);
    const toggle = () => {
        setopen(!isright);
        
    }
 

    return(
        <div className="">
            <div className="footer">
                <div>
                    <button className="" /*onClick={switchTheme}*/ 
                            style={{borderRadius:"10px"}}><AiFillSetting onClick={toggle} size="2rem" className="setting"/>
                    </button>
                    
                </div>

                
                
            </div>
            
            
        </div>
    );
}