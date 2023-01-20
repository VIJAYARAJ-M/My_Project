import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import CallCampaign1 from "./Call Campaign1"
import CallCampaign2 from "./Call Campaign2"

export default function Call(){
    return(
        <div className="mt-3 p-3" >
             <Tabs defaultActiveKey="call1">
                <Tab eventKey="call1" title="Call Camapign1">
                    <CallCampaign1/>
                </Tab>
                <Tab eventKey="call2" title="Call Camapign2">
                   <CallCampaign2/>
                </Tab>
               
            </Tabs>
        </div>
    );
}