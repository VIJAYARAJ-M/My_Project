import React from "react"
import {Row, Col, Card, Table, CardHeader} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'



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
  title: {
    text: 'Total Unsent mail',
   
    align:"center",
    style:{
      color:"var(--text-primary)",
      fontSize:"12px",
    }
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
    fontSize:"10px",
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
  title: {
    text: 'Total sent mail',
   
    align:"center",
    style:{
      color:"var(--text-primary)",
      fontSize:"12px",
    }
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
    fontSize:"10px",
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
     color:"white",
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
    
    colors:"white",
    
    }
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime',
    labels:{
      style:{
        colors:"white",
        
      },
},
  },
  yaxis: [{
    title: {
      text: 'New Users',
      style:{
        color:"white",
      }
    },
    labels:{
      style:{
        colors:"white",
        
      },
},
  
  }, {
    opposite: true,
    title: {
      text: 'Users',
      style:{
        color:"white"
      }
    },
    labels:{
      style:{
        colors:"white",
        
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
      color:"white",
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
    
    colors:"white",
    
    }
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime',
    labels:{
      style:{
        colors:"white",
        
      },
},
  },
  yaxis: [{
    title: {
      text: 'Email Click',
      style:{
        color:"white",
      },
    },
    labels:{
      style:{
        colors:"white",
        
      },
},
  
  }, {
    opposite: true,
    title: {
      text: 'Email Unclick',
      style:{
        color:"white",
      },
    },
    labels:{
      style:{
        colors:"white",
        
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
        colors:"white",
        
      },
},
    },
    yaxis: {
      title: {
        text: 'Email Open & Unopen',
        style:{
         color:"white",
        }
      },
      labels:{
        style:{
          colors:"white",
          
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
      
      colors:"white",
      fontSize:"5px",
      
      
      }
    },
  }

  const seriesRador =   [44, 55, 67, 83]
  const optionsRador= {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  }
  const seriescol= [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }]

  const optionscol= {
    annotations: {
      points: [{
        x: 'Bananas',
        seriesIndex: 0,
        label: {
          borderColor: '#775DD0',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Bananas are good',
        }
      }]
    },
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Servings',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  }

const seriestree= [
    {
      data: [
        {
          x: 'Campaign 1',
          y: 218
        },
        {
          x: 'Campaign 2',
          y: 149
        },
        {
          x: 'Campaign 3',
          y: 184
        },
        {
          x: 'Campaign 4',
          y: 55
        },
        {
          x: 'Campaign 5',
          y: 84
        },
        
        
      ]
    }
  ]
const optionstree= {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap',
      toolbar:{
        show:!1,
      }
    },
    title: {
      text: 'Total Sent mail',
      align: 'center',
      style:{
        color:"white",
      }
    },
    colors: [
      '#007bff',
      '#17a2b8',
      '#00cccc',
      '#adb2bd',
      '#6f42c1',
     
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    }
  }

export default function EmailCampaign1(){
  return(
    <div>
         <Row className="mt-3">
            <Col lg={3}>
              <Row>
              <Col >
                  <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Recepient} height={50} width={50}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h6 className="" style={{color:"var(--text-primary)"}}>Recipients</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h4 className="" style={{color:"var(--text-primary)"}}>200</h4>
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
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Delivery} height={50} width={50}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h6 className="" style={{color:"var(--text-primary)"}}>Email Delivery</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h4 className="" style={{color:"var(--text-primary)"}}>100</h4>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

            </Col >
            <Col lg={9}>
            <Row>
            <Col>
              <Card className="p-1" style={{backgroundColor:"var(--background)"}}>
              

              <ReactApexChart options={optionss} series={seriess} type="line" height={200} />

    

              </Card>
            </Col>
            </Row>
            </Col>
           </Row>
           
            
            <Row className="mt-3">
              <Col lg={3} >
              <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                
                <Row>
                  <Col className="justify-content-center d-flex">
                  <ReactApexChart options={options11} series={series11} type="pie"  width={280} />
                  </Col>
                </Row>
              

              </Card>
              </Col>
              <Col lg={3}>
              <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
              
                <Row>
                  <Col className="justify-content-center d-flex">
                  <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={280} />
                  </Col>
                </Row>

              </Card>
              </Col>
              <Col lg={6}>
             
                            <Card className="" style={{boxShadow:"",backgroundColor:"var(--background)",height:"240px",
                            /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"
                            /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                            <CardHeader className="border-0" 
                            style={{ backgroundColor:"var(--background)",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"}}>
                                <Row className="align-items-center">
                                <div className="col">
                                    <h6 className="mb-0 " style={{color:"var(--text-primary)"}}>Campaign Details</h6>
                                </div>
                                
                                </Row>
                            
                            
                            </CardHeader>
                            <Table className="align-items-center  table-flush" responsive >
                            <thead className="">
                            <tr className="" style={{color:"#FFB178"}}>
                                <th scope="col">Date</th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">User</th>
                                <th scope="col">New User</th>
                                <th scope="col">Bounce Rate</th>
                                
                            </tr>
                            </thead>
                            {table.map((item, index)=>(
                            <tbody  >
                            <tr key={index} className="" style={{color:"var(--text-primary)"}} >
                                <td scope="row">{item.date}</td>
                                <td scope="row">{item.name}</td>
                                <td>{item.user}</td>
                                <td>{item.newuser}</td>
                                <td>{item.bouncerate}</td>
                               
                            
                            </tr>
                        
                        
                        
                            
                            </tbody>
                            ))}
                        </Table>
                            </Card>
                        
              </Col>
            </Row>

           

           

           

    </div>
  );
}