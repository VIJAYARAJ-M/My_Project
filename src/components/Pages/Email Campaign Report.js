import React,{useState ,useEffect} from "react"
import {Row, Col, Card, Button,} from "reactstrap"
import ReactApexChart from "react-apexcharts"
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"
import Select from "react-select"

import Recepient from "../../Image/Recepient.png"
import Delivery from "../../Image/Email Delivery.png"
import Open from "../../Image/Email Open.png"
import Unopen from "../../Image/Email Unopen.png"
import Click from "../../Image/Clicks.png"
import Unclick from "../../Image/Email Unclicked.png"
import Bounce from "../../Image/Bounce.png"
import Average from "../../Image/Average user.png"
import Block from "../../Image/Block.png"
import Sub from "../../Image/Unsub.png"
import Reply from "../../Image/Reply.png"

import {FcDownload} from "react-icons/fc"


const options = [{
    "id": 1,
    "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
    "label": "GS"
  }, {
    "id": 2,
    "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
    "label": "Blue base"
  }, {
    "id": 3,
    "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
    "label": "Shiash"
  }, {
    "id": 4,
    "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
    "label": "Xo"
  },]

const seriesbar1= [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61]
  }]
 const optionsbar1= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
        show:!1,
      }
    },
    colors: ["#6026c5"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    // title:{
    // text:"Click Details",
    // style:{
    //          color:"white"
    //     }
    // },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
        
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels:{
        style:{
          colors:"var(--text-primary)",

        },
  },
    },
    yaxis: {
      title: {
        text: 'Clicks',
        
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
    // fill: {
    //     type: "gradient",

    //     gradient: {
    //       shadeIntensity: 1,
    //       type: "vertical",
    //       opacityFrom: 0.7,
    //       opacityTo: 0.9,
    //       colorStops: [
    //         {
    //           offset: 0,
    //           color: "#6026c5",
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
    // title:{
    //     text:"Open Details",
    //     style:{
    //         color:"white"
    //     }
    // },

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
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels:{
        style:{
          colors:"var(--text-primary)",

        },
  },
    },
    yaxis: {
      title: {
        text: 'Opens',
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
export default function Emailcamapaign(){
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
      setSelectedOptions([{ label: "All", value: "*" }, ...options]);
    }, []);
  
    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
      if (value && value.some((o) => o.value === "*")) {
        return `${placeholderButtonLabel}: All`;
      } else {
        return `${placeholderButtonLabel}: ${value.length} selected`;
      }
    }
  
    function onChange(value, event) {
      if (event.action === "select-option" && event.option.value === "*") {
        this.setState(this.options);
      } else if (
        event.action === "deselect-option" &&
        event.option.value === "*"
      ) {
        this.setState([]);
      } else if (event.action === "deselect-option") {
        this.setState(value.filter((o) => o.value !== "*"));
      } else if (value.length === this.options.length - 1) {
        this.setState(this.options);
      } else {
        this.setState(value);
      }
    }
  


    return(
        <div>
           
            <Row className="mt-3">
                <Col className="d-flex justify-content-center">
                  <h4 className="" style={{color:"var(--text-primary)"}}>Email Campaign Report</h4>
                </Col>
            </Row>

            <Row >
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
                         <Card className="" style={{backgroundColor:"var(--background)",border:'none'}}>
                         
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
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"var(--background)",border:"none"}}>
                         
                          <Row>
                            <Col>
                             <h6 className="" style={{color:"var(--text-primary)"}}>Campaigns</h6>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                            <ReactMultiSelectCheckboxes
                                              options={[{ label: "All", value: "*" }, ...options]}
                                              placeholderButtonLabel="Select"
                                              getDropdownButtonLabel={getDropdownButtonLabel}
                                              value={selectedOptions}
                                              onChange={onChange}
                                              setState={setSelectedOptions}
                                            />
                            </Col>
                          </Row>
                          
                         </Card>
                        
                        </Col>
                       
                        <Col lg={3} className="d-flex justify-content-end align-items-center">
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
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Recipients</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="" style={{color:"var(--text-primary)"}}>1165</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Recepient}  height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Replies</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="" style={{color:"var(--text-primary)"}}>16</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Reply} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Open Rate</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="">308(36.4%)</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Open} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Click Rate</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="" style={{color:"var(--text-primary)"}}>12(1.0%)</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Click} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload color='#e0e0e0'/>
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={3}>
                    <Row>
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Bounces</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="" style={{color:"var(--text-primary)"}}>119(10.2%)</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Bounce} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Unsubscribed</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="" style={{color:"var(--text-primary)"}}>42(3.6%)</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3} >
                            <img src={Sub} height={40} />
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h6 className="" style={{color:"var(--text-primary)"}}>Block</h6>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h5 className="" style={{color:"var(--text-primary)"}}>70(10%)</h5>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Block} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                    </Row>
                </Col>
                <Col lg={9}>
                <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                  <Row>
                    <Col lg={4}>
                    <h6 className="" style={{color:"var(--text-primary)"}}>Main Campaign Report</h6>
                    </Col>
                    <Col lg={8}>
                     <FcDownload/>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={10}>
                    <ReactApexChart options={optionsbar2} series={seriesbar2} type="bar" height={130} />

                    </Col>
                    <Col  lg={2} className="d-flex justify-content-center align-items-center">
                      <Card style={{backgroundColor:"var(--background)",border:"none"}}>
                      <Row>
                        <Col className="d-flex justify-content-center ">
                        <h6 className="" style={{color:"var(--text-primary)"}}>Opens</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center ">
                        <h6 className="" style={{color:"var(--text-primary)"}}>308</h6>
                        </Col>
                      </Row>
                    </Card>
                    </Col>
                  </Row>
                  <Row className="">
                    <Col lg={10}>
                    <ReactApexChart options={optionsbar1} series={seriesbar1} type="bar" height={130} />

                    </Col>
                    <Col  lg={2} className="d-flex justify-content-center align-items-center">
                      <Card style={{backgroundColor:"var(--background)" ,border:"none"}}>
                      <Row>
                        <Col className="d-flex justify-content-center ">
                        <h6 className="" style={{color:"var(--text-primary)"}}>Clicks</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center ">
                        <h6 className="" style={{color:"var(--text-primary)"}}>12</h6>
                        </Col>
                      </Row>
                    </Card>
                    </Col>
                  </Row>
                </Card>
                </Col>
               
              
            </Row>
        </div>
    );
}