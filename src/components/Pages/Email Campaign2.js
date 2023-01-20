import React from "react"
import {Row, Col, Card, Table, CardHeader} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'




import Open from "../../Image/Opens.png"
import Unopen from "../../Image/Unopen.png"
import Click from "../../Image/Clicked.png"
import Unclick from "../../Image/unclicked.png"


const seriessclick=[{
  name: 'Email Open',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Email Unopen',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}]
const optionssclick={
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
    text: 'Email click Categories',
    style:{
      color:"var(--text-primary)",
    }
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
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime',
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  },
  yaxis: [{
    title: {
      text: 'Email Click',
      style:{
        color:"var(--text-primary)",
      },
    },
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  
  }, {
    opposite: true,
    title: {
      text: 'Email Unclick',
      style:{
        color:"var(--text-primary)",
      },
    },
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  }]
}  
const seriescolumn= [{
  name: 'Call',
  data: [44, 55, 41, 67, 22, 43, 21, 49]
}, {
  name: 'Form',
  data: [13, 23, 20, 8, 13, 27, 33, 12]
}]

const optionscolumn= {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%',
    toolbar:{
      show:!1,
    }
  },
  title: {
    text: 'Average conversion, call and form rate for Email',
    style:{
      color:"var(--text-primary)",
     
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun',
      'Jul', 'Aug'
    ],
    style:{
      color:"var(--text-primary)",
    },labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  },
  yaxis: {
      title: {
        text: 'Count',
        style:{
          color:"var(--text-primary)",
        },
        
      },
      labels:{
        style:{
          colors:"var(--text-primary)",
          
        },
  },
    },
   
  
  fill: {
    opacity: 1
  },
  legend: {
    position: 'right',
    offsetX: 0,
    offsetY: 50,
    labels: {
  
      colors:"var(--text-primary)",
      
      }
  },
}
export default function EmailCampaign2(){
  return(
    <div>
           <Row className="mt-4">
            <Col lg={3}>
              <Row>
              <Col >
                  <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                      <Col lg={3} className="justify-content-center d-flex align-items-center">
                       <img src={Open} height={50} width={50}/>
                      </Col>
                      <Col lg={9} >
               
                    <Row>
                        <Col className="">
                        <h6 className=""  style={{color:"var(--text-primary)"}}>Open Rate</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h4 className=""  style={{color:"var(--text-primary)"}}>80%</h4>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

              <Row className="mt-4">
              <Col >
                  <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                      <Col lg={3} className="justify-content-center d-flex align-items-center">
                       <img src={Unopen} height={50} width={50}/>
                      </Col>
                      <Col lg={9} >
               
                    <Row>
                        <Col className="">
                        <h6 className=""  style={{color:"var(--text-primary)"}}>Unopened Rate</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h4 className=""  style={{color:"var(--text-primary)"}}>10%</h4>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

            </Col>
            <Col lg={9}>
            <Row>
            <Col>
              <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
              

              <ReactApexChart options={optionscolumn} series={seriescolumn} type="bar" height={190} />

    

              </Card>
            </Col>
            </Row>
            </Col>
           </Row>

           <Row className="mt-4">
              <Col lg={3}>
              <Row>
              <Col >
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                      <Row>
                        <Col lg={3} className="justify-content-center d-flex align-items-center">
                        <img src={Click} height={50} width={50}/>
                        </Col>
                        <Col lg={9}>
                
                      <Row>
                          <Col className="">
                          <h6 className=""  style={{color:"var(--text-primary)"}}>Spam Rate</h6>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="">
                          <h4 className=""  style={{color:"var(--text-primary)"}}>5%</h4>
                          </Col>
                      </Row>
              
                        </Col>
                      </Row>
                    </Card>
                    </Col>
              </Row>

              <Row className="mt-4">
              <Col >
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                      <Row>
                        <Col lg={3} className="justify-content-center d-flex align-items-center">
                        <img src={Unclick} height={50} width={50}/>
                        </Col>
                        <Col lg={9} >
                
                      <Row>
                          <Col className="">
                          <h6 className=""  style={{color:"var(--text-primary)"}}>Unsubscribe Rate</h6>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="">
                          <h4 className=""  style={{color:"var(--text-primary)"}}>50%</h4>
                          </Col>
                      </Row>
              
                        </Col>
                      </Row>
                    </Card>
                    </Col>
              </Row>
              </Col>
              <Col lg={9}>

              <Row>
              <Col>
                <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                <ReactApexChart options={optionssclick} series={seriessclick} type="line" height={187} />

                </Card>
                </Col>
              </Row>
              </Col>
           </Row>
    </div>
  );
}