import React from "react"
import {Row, Col, Card, Table, CardHeader,Button} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'




import Click from "../../Image/Clicks.png"
import Forward from "../../Image/Forward.png"
import Count from "../../Image/Handle.png"
import BounceCount from "../../Image/BounceCount.png"
import Unique from "../../Image/UniqueClick.png"

import Hard from "../../Image/Hardness.png"


const series111=[{
  name: 'Hard Bounce',
  type: 'column',
  data: [40, 50, 41, 67, 22, 41, 20, 35, 75, 32, 25, 16]
}, {
  name: 'Soft bounce',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}]
const options111={
  chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:!1,
   },
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Bounce Categories',
    style:{
     color:"var(--text-primary)",
    },
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
    
    colors:"var(--text-primary)",
    
    }
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nev', 'Dec'],
  xaxis: {
    type: 'year',
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  },
  yaxis: [{
    title: {
      text: 'Hard Bounce Count',
      style:{
        color:"var(--text-primary)",
      }
    },
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  
  }, {
    opposite: true,
    title: {
      text: 'Soff bounce count',
      style:{
        color:"var(--text-primary)"
      }
    },
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  }]
}
export default function EmailCampaign4(){
  return(
    <div>
            <Row className="mt-2">
                <Col className="d-flex justify-content-center">
                  <h4 className="" style={{color:"var(--text-primary)"}}>Mass Email Performance Report</h4>
                </Col>
            </Row>
             <Row  className="mt-2">
                <Col>
                  <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"var(--background)",border:"none"}}>
                         
                          <Row>
                            <Col>
                             <h6 className="" style={{color:"var(--text-primary)"}}>From</h6>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                             <input className="css-1s2u09g-control"  type='date'></input>
                            </Col>
                          </Row>
                          
                         </Card>
                        
                        </Col>
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"var(--background)",border:"none"}}>
                         
                          <Row>
                            <Col>
                             <h6 className="" style={{color:"var(--text-primary)"}}>To</h6>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                             <input className="css-1s2u09g-control"  type='date'></input>
                            </Col>
                          </Row>
                          
                         </Card>
                        
                        </Col>
                      
                       
                        <Col lg={6} className="d-flex justify-content-end align-items-center">
                            <Row>
                                <Col>
                                <Button>Apply</Button>
                                </Col>
                            </Row>
                          
                        </Col>
                    </Row>
                  </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={3}>
                 
                  <Card className="p-3" style={{backgroundColor:"var(--background)",border:"none"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Hard} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Hard bounce count Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>40%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className=" p-3 mt-3" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={BounceCount} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Soft bounce count Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>10%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Unique} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Unique click count Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>40%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                 
                </Col>
                <Col lg={9}>

                <Row>
                  <Col>
                  <Card className="" style={{backgroundColor:"var(--background)"}}>
                  <Row className="">
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Click} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Click Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>30%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  </Col>
                  <Col>
                  <Card className="" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Forward} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Forwarding Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>20%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  </Col>

                  <Col>
                  <Card className="" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Count} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Forward count Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>40%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  </Col>
                </Row>
                
                <Row className="mt-2">
                  <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                     <ReactApexChart options={options111} series={series111} type="line" height={275} />
                    </Card>
                  </Col>
                </Row>
                
                </Col>
            </Row>

    </div>
  );
}