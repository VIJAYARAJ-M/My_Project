import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import EmailCamapign1 from "./Email Campaign1"
import EmailCamapign2 from "./Email Campaign2";
import EmailCamapign3 from "./Email Campaign3";
import EmailCamapign4 from "./EmailCampaign4"

export default function Email1(){
    return(
        <div className="mt-3 p-3" style={{backgroundColor:""}}>
            <Tabs defaultActiveKey="email2">
                <Tab eventKey="email1" title="Email Camapign1">
                     <EmailCamapign1/>
                </Tab>
                <Tab eventKey="email2" title="Email Camapign2">
                     <EmailCamapign2/>
                </Tab>
                <Tab eventKey="email3" title="Email Camapign3">
                     <EmailCamapign3/>
                </Tab>
                <Tab eventKey="email4" title="Email Camapign4">
                     <EmailCamapign4/>
                </Tab>
            </Tabs>
        </div>
    );
}