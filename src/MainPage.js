import React from "react";
import { BrowserRouter, Routes,Route  } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Login from "./components/Pages/Login"
export default function MainPage(){
    return(
        <div>
        <BrowserRouter>
          <Sidebar>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/about" element={<Login/>}/>
              </Routes>
          </Sidebar>
        </BrowserRouter>
        </div>
    )
}