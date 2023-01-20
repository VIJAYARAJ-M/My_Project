import React from "react"
import {Row,Col,Card,Button} from "reactstrap"
import ReactApexChart from "react-apexcharts"

const seriesbar2= [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61]
  }]
 const optionsbar2= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
        show:!1,
      }
    },
    title:{
    text:"Monthly Website Visitors",
   style:{
   color:"var(--text-primary)"
    }
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
    colors: ["#2bc7b2"],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01-02-2023', '01-03-2023', '01-04-2023', '01-05-2023',
      '01-06-2023'],
      labels:{
        style:{
          colors:"var(--text-primary)",

        },
  },
    },
    yaxis: {
      title: {
        text: 'Number of Issues',
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
//     fill: {
//     type: "gradient",

//     gradient: {
//       shadeIntensity: 1,
//       type: "vertical",
//       opacityFrom: 0.7,
//       opacityTo: 0.9,
//       colorStops: [
//         {
//           offset: 0,
//           color: "#2bc7b2",
//           opacity: 1
//         },

//         {
//           offset: 100,
//           color: "#002151",
//           opacity: 1
//         }
//       ]
//     }
//   },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
 const seriesstack= [{
    name: 'Email',
    data: [44, 55, 41, 67, 22]
  }, {
    name: 'SEO',
    data: [13, 23, 20, 8, 13]
  }, {
    name: 'Social Media',
    data: [11, 17, 15, 15, 21]
  }]
 const optionsstack= {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: true
      }
    },
    title:{
      text:"Top Converting Marketing Channels",
      style:{
        color:"var(--text-primary)"
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      type: 'year',
      categories: ['01-02-2023', '01-03-2023', '01-04-2023', '01-05-2023',
        '01-06-2023'
      ],
      labels:{
        style:{
          colors:"var(--text-primary)",
          
        },
  },
    },
    yaxis:{
        labels:{
            style:{
              colors:"var(--text-primary)",
              
            },
      },
    },
    legend: {
      position: 'bottom',
      offsetY: 5,
      labels: {
      
        colors:"var(--text-primary)",
        
        }
    },
    fill: {
      opacity: 1
    }
  }

export default function Social2(){
    return(
        <div>
            
            <Row className="mt-3">
                <Col className="d-flex justify-content-center">
                         <h4 className="" style={{color:"var(--text-primary)"}}>Social Media Tracking Report</h4>
                </Col>
            </Row>
            <Row  >
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
                        
                        <h6 className="" style={{color:"var(--text-primary)"}}>Website Visitor(Last 24 hours)</h6>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                      
                        <h4 className="" style={{color:"var(--text-primary)"}}>1502</h4>
                       
                        </Col>
                    </Row>
                 </Card>
                </Col>

                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        
                        <h6 className="" style={{color:"var(--text-primary)"}}>Number of Leads(Last 24 hours)</h6>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                      
                        <h4 className="" style={{color:"var(--text-primary)"}}>31</h4>
                       
                        </Col>
                    </Row>
                 </Card>
                </Col>

                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        
                        <h6 className="" style={{color:"var(--text-primary)"}}>Cost Per Click(Last 24 hours)</h6>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                      
                        <h4 className="" style={{color:"var(--text-primary)"}}>$0.79</h4>
                       
                        </Col>
                    </Row>
                 </Card>
                </Col>

                <Col>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col>
                        
                        <h6 className="" style={{color:"var(--text-primary)"}}>Impressions(Last 24 hours)</h6>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                      
                        <h3 className="" style={{color:"var(--text-primary)"}}>1000</h3>
                       
                        </Col>
                    </Row>
                 </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={6}>
                 <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                 <ReactApexChart options={optionsbar2} series={seriesbar2} type="bar" height={300} />

                 </Card>
                </Col>
                <Col lg={6}>
                 <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                 <ReactApexChart options={optionsstack} series={seriesstack} type="bar" height={300} />
    

                 </Card>
                </Col>
            </Row>
        </div>
    );
}