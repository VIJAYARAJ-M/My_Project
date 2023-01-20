import React from "react";
import { BrowserRouter, Routes,Route, Switch  } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Login from "./components/Pages/Login"
import Email from "./components/Pages/Analytics";
import Email1 from "./components/Pages/Email";
import Call from "./components/Pages/Call";
import Social from "./components/Pages/Social";
import Sms from "./components/Pages/Sms Campaign";
export default function MainPage(){
    return(
        <div>
        <BrowserRouter>
          <Sidebar>
              <Switch>
                {/* <Route path="/" element={<Dashboard/>}/> */}
                <Route path="/dash" component={Dashboard}/>
                {/* <Route path="/about" component={Login}/> */}
                <Route path="/analytics" component={Email}/>
                <Route path="/email" component={Email1}/>
                <Route path="/call" component={Call}/>
                <Route path="/social" component={Social}/>
                <Route path="/sms" component={Sms}/>

              </Switch>
          </Sidebar>
        </BrowserRouter>
        </div>
    )
}