import React from "react"
import {Row, Col, Card, Table, CardHeader} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'

import profile from "../../Image/new.png"

import Recepient from "../../Image/Recepients.png"
import Delivery from "../../Image/Deliverys.png"
import Open from "../../Image/Opens.png"
import Unopen from "../../Image/Unopen.png"
import Click from "../../Image/Clicked.png"
import Unclick from "../../Image/unclicked.png"
import Bounce from "../../Image/Bounced.png"
import Average from "../../Image/Average.png"
import New from "../../Image/Old.png"
import Old from "../../Image/new.png"


const seriesarea= [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 30, 20]
}]
const optionsarea= {
  chart: {
    height: 350,
    type: 'area',
    toolbar:{
      show:!1,
   },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    labels:{
      style:{
        colors:"none",
        
      },
},
  },
  grid: {
    show: false,      // you can either change hear to disable all grids
    xaxis: {
      
      lines: {
        show: false, //or just here to disable only x axis grids
       }
     },  
    yaxis: {
     
      lines: { 
        show: false,  //or just here to disable only y axis
       }
     },   
  },
  yaxis: {
  
    labels:{
      style:{
        colors:"none",
        
      },
},
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}

const table = [{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"995",
  newuser:"191",
  bouncerate:"47.75%",
 
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"822",
  newuser:"404",
  bouncerate:"22.72%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"808",
  newuser:"468",
  bouncerate:"21.8%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"799",
  newuser:"400",
  bouncerate:"20%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"750",
  newuser:"350",
  bouncerate:"18.6%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"700",
  newuser:"300",
  bouncerate:"16%",
},

]
const seriesdount= [44, 55, 13, 43, 22]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  stroke: {
    width: 0
  },
  labels: ['Campign 1', 'Campign 2', 'Campign 3', 'Campign 4 ', 'Campign 5'],
  colors:["#6f42c1", "#007bff","#17a2b8", "#00cccc", "#adb2bd"],
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

const series11= [44, 55, 13, 43, 22]



const options11= {
  chart: {
    width: 380,
    type: 'pie',
  },
  stroke: {
    width: 0
  },
  labels: ['Campign 1', 'Campign 2', 'Campign 3', 'Campign 4 ', 'Campign 5'],
  colors:["#6f42c1", "#007bff","#17a2b8", "#00cccc", "#adb2bd"],
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

  
const seriess=[{
  name: 'Spam Emails',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Wrong Emails',
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
    text: 'Undelivered Sources',
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
      text: 'Spam Emails',
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
      text: 'Wrong Emails',
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




const  series22= [{
    name: 'Email Open',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Email Unopen',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }]
 const option22= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
       show:!1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
       labels:{
      style:{
        colors:"var(--text-primary)",
        
      },
},
    },
    yaxis: {
      title: {
        text: 'Email Open & Unopen',
        style:{
         color:"var(--text-primary)",
        }
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
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
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
  }

export default function Email(){

    return(
        <div className="p-3">
            
            <Row className="mt-2">
                <Col  >
                  <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <CardHeader style={{backgroundColor:"var(--background)"}}>
                      <Row>
                        <Col>
                        <h2 style={{color:"var(--text-primary)"}}>Email Recepient Categories</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <h5 style={{color:"var(--text-primary)"}}>Total Email Recepient</h5>
                        </Col>
                      </Row>
                    </CardHeader>
                      
                    <Row className="mt-2">
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                      <img src={Recepient} />
                      </Col>
                      <Col lg={8}>
               
                    <Row>
                        <Col className="">
                        <h4 style={{color:"var(--text-primary)"}}>Recepient</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 style={{color:"var(--text-primary)"}}>200</h2>
                        </Col>
                    </Row>
             
                      </Col>
                      
                    </Row>

                    
                  </Card>
                  </Col>
                  <Col  >
                  <Card className="p-3"   style={{backgroundColor:"var(--background)"}}>
                  <CardHeader  style={{backgroundColor:"var(--background)"}}>
                      <Row>
                        <Col>
                        <h2 className="">Email Delivery Categories</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <h5 className="">Total Email Delivery</h5>
                        </Col>
                      </Row>
                    </CardHeader>
                    <Row className="mt-2">
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                      <img src={Delivery} />
                      </Col>
                      <Col  lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="">Email Delivery</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="">100</h2>
                        </Col>
                    </Row>
             
                      </Col>
                      
                    </Row>

                    
                  </Card>
                  </Col>
            </Row>
           
            <Row className="mt-3">
              <Col>
              <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
              <ReactApexChart options={optionss} series={seriess} type="line" height={350} />

              </Card>
              </Col>
            </Row>
            
            <Row className="mt-3">
              <Col >
              <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <h3 className="">Total Delivered mail</h3></Col>
                </Row>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <ReactApexChart options={options11} series={series11} type="pie"  width={380} />
                  </Col>
                </Row>
              

              </Card>
              </Col>
              <Col>
              <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
              <Row>
                  <Col className="justify-content-center d-flex">
                  <h3 className="">Total Unsend mail</h3></Col>
                </Row>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={380} />
                  </Col>
                </Row>

              </Card>
              </Col>
            </Row>

           <Row className="mt-4">
            <Col lg={4}>
              <Row>
              <Col >
                  <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Open} height={70} width={70}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="">Email Open</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="">80</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

              <Row className="mt-4">
              <Col >
                  <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Unopen} height={70} width={70}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="">Email Unopened</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="">10</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

            </Col>
            <Col lg={8}>
            <Row>
            <Col >
              <Card className="p-2"  style={{backgroundColor:"var(--background)"}}>
              

              <ReactApexChart options={option22} series={series22} type="bar" height={250} />

    

              </Card>
            </Col>
            </Row>
            </Col>
           </Row>

           <Row className="mt-4">
              <Col lg={4}>
              <Row>
              <Col >
                    <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                      <Row>
                        <Col lg={4} className="justify-content-center d-flex align-items-center">
                        <img src={Click} height={70} width={70}/>
                        </Col>
                        <Col lg={8}>
                
                      <Row>
                          <Col className="">
                          <h4 className="">Email clicked</h4>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="">
                          <h2 className="">50</h2>
                          </Col>
                      </Row>
              
                        </Col>
                      </Row>
                    </Card>
                    </Col>
              </Row>

              <Row className="mt-4">
              <Col >
                    <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                      <Row>
                        <Col lg={4} className="justify-content-center d-flex align-items-center">
                        <img src={Unclick} height={70} width={70}/>
                        </Col>
                        <Col lg={8} >
                
                      <Row>
                          <Col className="">
                          <h4 className="">Email UnClicked</h4>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="">
                          <h2 className="">50</h2>
                          </Col>
                      </Row>
              
                        </Col>
                      </Row>
                    </Card>
                    </Col>
              </Row>
              </Col>
              <Col lg={8}>

              <Row>
              <Col>
                <Card className="p-2"  style={{backgroundColor:"var(--background)"}}>
                <ReactApexChart options={optionssclick} series={seriessclick} type="line" height={220} />

                </Card>
                </Col>
              </Row>
              </Col>
           </Row>



            <Row className="mt-4">
                <Col lg={4}>
                  <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                  <Row className="mt-2">
                  
                    <Col>
                    <img src={Bounce} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="">Bounces</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="">300</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3"  style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col>
                    <img src={Average} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="">Average Users</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="">790</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3"  style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col>
                    <img src={Old} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="">Old Users</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="">400</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3"  style={{backgroundColor:"var(--background)"}}>
                  <Row >
                  
                    <Col>
                    <img src={New} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="">New Users</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="">100</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                </Col>
                <Col lg={8}>
                <Card className="p-3"  style={{backgroundColor:"var(--background)"}}>
                <ReactApexChart options={options111} series={series111} type="line" height={570} />
                </Card>
                </Col>
            </Row>

          

          
           
        </div>
    );
}