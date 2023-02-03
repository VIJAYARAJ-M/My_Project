import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Admin from "./Admin";

export default function Top(){
    return(
        <div>
            <BrowserRouter>

                <Admin/>

                <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}