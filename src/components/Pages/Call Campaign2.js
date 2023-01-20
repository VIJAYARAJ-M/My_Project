import React from "react"
import {Row,Col,Card,Button} from "reactstrap"

import Bound from "../../Image/Inbound.png"
import OutBound from "../../Image/Outbound.png"
import Handle from "../../Image/Handle.png"
import Resolution from "../../Image/resolution.png"
import Customer from "../../Image/customer.png"

import ReactApexChart from "react-apexcharts"


const seriesdount= [44,  13,]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Call Status',
    align:"center",
   
    style:{
      color:"var(--text-primary)",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Answered', 'Missed'],
  colors:[ "#00cccc", "#adb2bd"],
  plotOptions: {
    pie: {
      donut: {
        size: '65%'
      }
    }
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
    
    colors:"var(--text-primary)",
    
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

const seriess=[{
    name: 'Total Calls',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Abandoned Calls',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }]
  const optionss={
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
      text: 'Call Categories',
      style:{
         color:"var(--text-primary)",
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    legend: {
      display: true,
      position: "bottom",
      labels: {
      
      colors:"var(--text-primary)",
      
      }
    },
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
        text: 'Total Calls',
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
        text: 'Abandoned Calls',
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
const seriesbar= [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100,]
}]
const optionsbar= {
  chart: {
    type: 'bar',
    height: 350,
    toolbar:{
      show:!1,
    }
  },
  title: {
    text: 'Total calls',
    align:"center",
   
    style:{
      color:"var(--text-primary)",
      
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    title: {
      text: 'Calls',
      style:{
        color:"var(--text-primary)",
     },
    },
    categories: ['Paid', 'Organic', 'Direct', 'Social', 'Newsletter', 'External-Ref', 'Internal_Ref',
      'Referral', 
    ],
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  },
  yaxis:{
    title: {
      text: 'Source',
      style:{
        color:"var(--text-primary)",
     },
    },
    labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
  }
}

const seriesdount1= [44,  13,20,30,23,40,18.30]

const optionsdount1= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Call Distribution',
    align:"center",
   
    style:{
      color:"var(--text-primary)",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Paid', 'Organic', 'Direct', 'Social', 'Newsletter', 'External-Ref', 'Internal_Ref',
  'Referral', ],
  colors:[ "#007bff", "#17a2b8","#00cccc",'#adb2bd','#553293','#00d390','#ca9270'],
  plotOptions: {
    pie: {
      donut: {
        size: '65%'
      }
    }
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
    
    colors:"var(--text-primary)",
    
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}
export default function CallCampaign2(){
    return(
        <div>
            
            <Row>
                <Col className="d-flex justify-content-center">
                  <h4 className="" style={{color:"var(--text-primary)"}}>Call Tracking Report</h4>
                </Col>
            </Row>
            <Row  className="">
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
              <Col>
              <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={8}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Inbound call conversion Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}}>20%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={4} className="d-flex justify-content-start">
                                <img src={Bound} height={40} width={40}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={8}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Outbound conversion Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className=""  style={{color:"var(--text-primary)"}}>18%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={4} className="d-flex justify-content-start">
                                <img src={OutBound} height={40} width={40}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Average handle time(min)</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}}>20</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Handle} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>First call resolution Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}}>30%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Resolution} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Customer satisfaction Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}}>100%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Customer} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col lg={6}>
              <Card style={{backgroundColor:"var(--background)"}}>
                 <ReactApexChart options={optionsbar} series={seriesbar} type="bar" height={350}/>
    
              </Card>
              </Col>
              <Col>
              <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                 <ReactApexChart options={optionsdount1} series={seriesdount1} type="donut"  width={430} />
              </Card>
              </Col>
            </Row>

          
        </div>
    );
}