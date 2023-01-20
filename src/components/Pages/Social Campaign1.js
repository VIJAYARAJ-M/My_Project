import React from "react"
import {Row, Col, Card,Button} from "reactstrap"
import ReactApexChart from "react-apexcharts"
import Twitter from "../../Image/Twitter.png"
import Person from "../../Image/person.png"
import New from "../../Image/New user.png"
import Fav from "../../Image/favorite.png"
import Insta from "../../Image/Insta.png"
import Like from "../../Image/Likes.png"
import Post from "../../Image/Post.png"
import Linked from "../../Image/Linked.png"
import Click from "../../Image/Clicks.png"
import Facebook from "../../Image/Facebook.png"
import Commands from "../../Image/Commands.png"


 const seriesstack= [{
    name: 'Twitter',
    data: [44, 55, 41, 37, 22]
  }, {
    name: 'Instagram',
    data: [53, 32, 33, 52, 13]
  }, {
    name: 'LinkedIn',
    data: [12, 17, 11, 9, 15]
  }, {
    name: 'Facebook',
    data: [9, 7, 5, 8, 6]
  }, ]
 const optionsstack= {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar:{
        show:!1,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 0,
      colors: ['#fff']
    },
    title: {
      text: 'Social Values',
      style:{
        color:"var(--text-primary)",
      }
    },
    xaxis: {
        categories: ['01-02-2023', '01-03-2023', '01-04-2023', '01-05-2023',
        '01-06-2023'
      ],
      labels: {
        formatter: function (val) {
          return val + "K"
        },
        style:{
            colors:"var(--text-primary)",
            
          },
      }
    },
    yaxis: {
        title: {
          text: '',
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
        position: 'right',
        offsetX: -10,
        offsetY: 50,
        labels: {
      
          colors:"var(--text-primary)",
          
          }
      },
  }
export default function Social1(){
    return(
        <div>
         
            <Row>
                <Col className="d-flex justify-content-center ">
                <h4 className="" style={{color:"var(--text-primary)"}}>Social Media Campaign</h4>
                </Col>
            </Row>
            <Row  className="">
                <Col>
                  <Card className="p-2" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"var(--background)",border:'none'}}>
                         
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

            <Row className="mt-1">
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Twitter} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h6 className="" style={{color:"var(--text-primary)"}}>Twitter Status</h6>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Followers</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>20,000</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> New Followers</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>167</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Twitter} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>New Tweets</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>200</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Fav} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> Favorites</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>4,000</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Insta} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h6 className="" style={{color:"var(--text-primary)"}}>Instagram Status</h6>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Fans</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>20,000</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> New Fans</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>167</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Likes</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>200</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Post} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> Post Reach</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>4,000</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Linked} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h6 className="" style={{color:"var(--text-primary)"}}>LinkedIn Status</h6>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Followers</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>3,000</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> New Followers</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>12</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Click} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Clicks</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>200</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> Likes</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>400</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>

            <Row className="mt-2">
           
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Facebook} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h6 className="" style={{color:"var(--text-primary)"}}>Facebook Status</h6>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Fans</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>20,000</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}> New Fans</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>167</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Likes</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>200</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"var(--social-card-bg)"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Commands} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h6 className="" style={{color:"var(--text-primary)"}}>Commands</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="" style={{color:"var(--text-primary)"}}>40</h5>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={8}>
                <Card className="p-3" style={{backgroundColor:"var(--background)"}}>
                <ReactApexChart options={optionsstack} series={seriesstack} type="bar" height={213} />
    
                </Card>
                </Col>
            </Row>

        </div>
    );
}