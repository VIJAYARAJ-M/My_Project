import React  from "react"
import {Row,Col,Card,Button} from "reactstrap"
import Total from "../../Image/Total call.png"
import Answer from "../../Image/Answer1.png"
import Missed from "../../Image/Missed1.png"
import Abended from "../../Image/Abended.png"
import Duration from "../../Image/Duration.png"
import Routing from "../../Image/Routing.png"
import Center from "../../Image/center.png"
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"

import ReactApexChart from "react-apexcharts"
import { useState,useEffect } from "react"


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
export default function CallCampaign1(){

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
                  <h4 className="" style={{color:"var(--text-primary)"}}>Call Campaign Report</h4>
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
                        {/* <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"#002151"}}>
                         
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
                        
                        </Col> */}
                       
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

            <Row className="mt-3">
              
                <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                        <Row>
                            <Col lg={7}>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Call Volume<br/> Rate</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h4 className="" style={{color:"var(--text-primary)"}}>80%</h4>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={5} className="d-flex justify-content-start">
                             <img src={Total} height={40} width={40}/>
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
                                <h6 className="" style={{color:"var(--text-primary)"}}>Answered Calls Rate</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h4 className="" style={{color:"var(--text-primary)"}}>40%</h4>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-start">
                             <img src={Answer} height={40} width={40}/>
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
                                <h6 className="" style={{color:"var(--text-primary)"}}>Missed Calls Rate</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h4 className="" style={{color:"var(--text-primary)"}}>30%</h4>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={5} className="d-flex justify-content-start">
                             <img src={Missed} height={40} width={40}/>
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
                                <h6 className="" style={{color:"var(--text-primary)"}}> Abandoned Calls Rate</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h4 className="" style={{color:"var(--text-primary)"}}>10%</h4>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-start">
                             <img src={Abended} height={40} width={40}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={3}>
                  <Row className="">
                    <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Call Duration Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}} >20%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Duration} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Call routing data Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}}>18%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Routing} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                    <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h6 className="" style={{color:"var(--text-primary)"}}>Call center efficiency Rate</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h4 className="" style={{color:"var(--text-primary)"}}>30%</h4>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Center} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3}>
                <Card className="p-3" style={{backgroundColor:"var(--background)",height:"318px"}}> 
                <Row>
                  <Col className="d-flex justify-content-center">
                  <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={350} />
                  </Col>
                </Row>
                 
                </Card>
                </Col>
                <Col lg={6}>
                <Card className="p-2" style={{backgroundColor:"var(--background)"}}> 
                <ReactApexChart options={optionss} series={seriess} type="line" height={283} />
                </Card>
                </Col>
                
            </Row>

          
        </div>
    );
}