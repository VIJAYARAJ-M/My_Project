import React, { useState } from "react";
import {NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";

  
const SidebarLinks = styled(Link)`
  display: flex;
  color: var(--text-primary);
  justify-content: space-between;
  align-items: center;
  padding: 20px !important;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    background: var(--hover-bg);
    border-left: 4px solid var(--hover-border);
    cursor: pointer;
    
  }
  &.active {
    
    background: var(--hover-bg);
   
  }
  
`;
  
const SidebarLabels = styled.span`
  margin-left: 16px;
  color:var(--text-primary) ;
  font-size:16px;
  font-family: serif;
`;
  
const DropdownLinks = styled(Link)`
  background:var(--background);
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color:var(--text-primary);
  font-size: 18px;
  
  &:hover {
    background:  var(--hover-bg);
    border-left: 4px solid var(--hover-border);
    cursor: pointer;
  }
  &.active {
    
    background: var(--hover-bg);
   
  }
`;
  
export default function SubMenu({ item})  {
 
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <SidebarLinks activeStyle  to={item.path} 
      onClick={item.subNav && showSubnav}  >
        <div >
          
          {item.icon}
          {item.expand && <SidebarLabels >{item.name}</SidebarLabels>}
        </div>
        {item.expand && <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>}
        
      </SidebarLinks>
      {(subnav && item.expand ) &&
        item.subNav.map((item, index) => {
          return (
         
            <DropdownLinks to={item.path} key={index}>
              {item.icon}
              <SidebarLabels>{item.title}</SidebarLabels>
            </DropdownLinks>
            
          );
        })}
      
    </>
  );
};
  
