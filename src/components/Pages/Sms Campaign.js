import React from "react"
import {Row,Col,Card,Table,CardHeader,Button} from "reactstrap"
import Msg from "../../Image/Msg.png"
import Inbound from "../../Image/SmsIn.png"
import Outbound from "../../Image/SmsOut.png"
import Delivery from "../../Image/SmsDeliverd.png"
import Failed from "../../Image/SmsFailed.png"
import ReactApexChart from "react-apexcharts"

const seriesdount= [44,  13,6,8,13]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Message By Status',
    
   
    style:{
      color:"var(--text-primary)",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Sent', 'Deliverd','Failed', 'Received','Accepted'],
  colors:[ "#6f42c1", "#007bff",'#17a2b8','#00cccc','#adb2bd'],
  plotOptions: {
    pie: {
      donut: {
        size: '60%'
      }
    }
  },
  legend: {
    display: true,
    position: "right",
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
const seriesline= [{
    name: "Desktops",
    data: [10, 41, 80, 10, 50, 80, 20, 40]
}]
const optionsline= {
  chart: {
    height: 350,
    type: 'line',
    toolbar:{
      show:!1,
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Message Performance',
    align: 'left',
    style:{
        color:"var(--text-primary)"
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.0,
      
        },
        xaxis: {
          lines: {
            show: false
          }
        }
  },
  xaxis: {
    categories: ['01-02-2023', '01-03-2023', '01-04-2023', '01-05-2023', 
    '01-06-2023', '01-07-2023', '01-08-2023', '01-09-2023'],
    labels:{
        style:{
            colors:"var(--text-primary)",
        }
    }
  },
  yaxis:{
    labels:{
        style:{
            colors:"var(--text-primary)",
        }
    }
  }
}

const table = [{
    name:"Summer Sale Alerts",
    date :"12-10-2022",
    from :"(548) 896-7609 x7219",
    to :"+1.909.349.0140",
    status:"Delivered",
    direction:"Dial",
   
  },
  {
    name:"New Arrivals Notification",
    date :"12-10-2022",
    from :"(548) 896-7609 x7219",
    to :"+1.909.349.0140",
    status:"Delivered",
    direction:"Reply",
  },
  {
    name:"Happy Hour Deals",
    date :"12-10-2022",
    from :"(548) 896-7609 x7219",
    to :"+1.909.349.0140",
    status:"Delivered",
    direction:"Dial",
  },
  {
    name:"Exclusive Discounts for Members",
    date :"12-10-2022",
    from :"(548) 896-7609 x7219",
    to :"+1.909.349.0140",
    status:"Delivered",
    direction:"Reply",
  },
  {
    name:"Flash Sale",
    date :"12-10-2022",
    from :"(548) 896-7609 x7219",
    to :"+1.909.349.0140",
    status:"Delivered",
    direction:"Dial",
  },
  {
    name:"Back to School Sale",
    date :"12-10-2022",
    from :"(548) 896-7609 x7219",
    to :"+1.909.349.0140",
    status:"Delivered",
    direction:"Dial",
  },
  
  ]
export default function Sms(){
    return(
        <div className="m-3 mt-3">
            

            <Row>
                <Col className="d-flex justify-content-center">
                 <h4 className="" style={{color:"var(--text-primary)"}}>SMS Campaign Tracking Report</h4>
                </Col>
            </Row>

          

            <Row className="mt-2" >
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
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                        <h6 className="" style={{color:"var(--text-primary)"}}>Messages</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 className="" style={{color:"var(--text-primary)"}}>3000</h4>
                        </Col>
                    </Row>
                        </Col>
                        <Col>
                        <img src={Msg} height={40}/>
                        </Col>
                    </Row>
                    
                   

                </Card>
                </Col>
                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                        <h6 className="" style={{color:"var(--text-primary)"}}>Inbound</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 className="" style={{color:"var(--text-primary)"}}>600</h4>
                        </Col>
                    </Row>

                        </Col>
                        <Col>
                        <img src={Inbound} height={40}/>
                        </Col>
                    </Row>
                   
                </Card>
                </Col>
                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                    <Col>
                    <Row>
                        <Col>
                        <h6 className="" style={{color:"var(--text-primary)"}}>Outbound</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 className="" style={{color:"var(--text-primary)"}}>1000</h4>
                        </Col>
                    </Row>
                    </Col>
                    <Col>
                    <img src={Outbound} height={40}/>
                    </Col>
                    </Row>
                  
                   

                </Card>
                </Col>
                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                        <h6 className="" style={{color:"var(--text-primary)"}}>Delivered</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 className="" style={{color:"var(--text-primary)"}}>100</h4>
                        </Col>
                    </Row>
                        </Col>
                        <Col>
                        <img src={Delivery} height={40}/>
                        </Col>
                    </Row>
                    

                </Card>
                </Col>
                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                        <h6 className="" style={{color:"var(--text-primary)"}}>Failed</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 className="" style={{color:"var(--text-primary)"}}>50</h4>
                        </Col>
                    </Row>
                        </Col>
                        <Col>
                        <img src={Failed} height={40}/>
                        </Col>
                    </Row>
                  

                </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                 <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={300} />
                </Card>
                </Col>
                <Col lg={8}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                <ReactApexChart options={optionsline} series={seriesline} type="line" height={173} />
    
                </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
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
                            <tr className="" style={{color:"#7dbf57",backgroundColor:"#344d7f"}}>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Status</th>
                                <th scope="col">Direction</th>
                                
                               
                            </tr>
                            </thead>
                            {table.map((item, index)=>(
                            <tbody  >
                            <tr key={index} className="" style={{color:"var(--text-primary)"}}>
                                <td>{item.name}</td>
                                <td scope="row">{item.date}</td>
                                <td scope="row">{item.from}</td>
                                <td>{item.to}</td>
                                <td>{item.status}</td>
                                <td>{item.direction}</td>
                               
                            
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