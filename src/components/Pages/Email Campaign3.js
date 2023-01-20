import React from "react"
import {Row, Col, Card, Table, CardHeader} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'




import Bounce from "../../Image/Bounced.png"
import Average from "../../Image/Average.png"
import New from "../../Image/Old.png"
import Old from "../../Image/new.png"

const seriesdount= [44, 5]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  stroke: {
    width: 0
  },
  title: {
    text: 'Opened Vs Unsubscribed',
    style:{
      color:"var(--text-primary)",
    }
  },
  labels: ['Opened', 'Unsubscribed'],
  colors:["#00cccc", "#007bff"],
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

const series11= [44, 5]



const options11= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Delivered Vs Unsubscribed',
    style:{
      color:"white",
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Delivered', 'Unsubscribed'],
  colors:["#6f42c1", "#00cccc",],
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
    
    colors:"white",
    
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
const series111=[{
  name: 'New Users',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Users',
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
    text: 'Users',
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
      text: 'New Users',
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
      text: 'Users',
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
export default function EmailCampaign3(){
  return(
    <div>
          <Row className="mt-3">
                <Col lg={3}>
                  <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                  <Row className="mt-2">
                  
                    <Col lg={5}>
                    <img src={Bounce} height={50} width={50}/>
                    </Col>
                    <Col lg={7}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Bounce Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>30%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-2" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={5}>
                    <img src={Average} height={50} width={50}/>
                    </Col>
                    <Col lg={7}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Coversion Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>20%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-2" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={5}>
                    <img src={Old} height={50} width={50}/>
                    </Col>
                    <Col lg={7}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>List growth Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>40%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-2" style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col lg={5}>
                    <img src={New} height={50} width={50}/>
                    </Col>
                    <Col lg={7}>
                    <Row>
                      <h6 className="" style={{color:"var(--text-primary)"}}>Autoreply Rate</h6>
                    </Row>
                    <Row className="mt-2">
                      <h4 className="" style={{color:"var(--text-primary)"}}>10%</h4>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                </Col>
                <Col lg={9}>
                
                <Row>
                  <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                     <ReactApexChart options={options111} series={series111} type="line" height={197} />
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col lg={6} className=" ">
                  <Card className="p-3 d-flex justify-content-center align-items-center" style={{backgroundColor:"var(--background)"}}>
                    <ReactApexChart options={options11} series={series11} type="pie"  width={300} />
                  </Card>
                  </Col>
                  <Col lg={6} >
                  <Card className="p-3 d-flex justify-content-center align-items-center" style={{backgroundColor:"var(--background)"}}>
                    <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={300} />
                  </Card>
                  </Col>
                </Row>
                </Col>
            </Row>
    </div>
  );
}