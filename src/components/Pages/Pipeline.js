import React from "react"
import { Card, Col, Row, Table, CardHeader } from "reactstrap";
import Money from "../../Image/money.png"
import Closed from "../../Image/closed.png"
import Count from "../../Image/Counts.png"
import Days from "../../Image/days.png"
import ReactApexChart from "react-apexcharts";


const series = [{
  data: [21, 22, 10, 28, 16, 21, 13, 30]
}]

const options = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: !1,
    },
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  title: {
    text: 'Leads by sources',
    style: {
      color: "var(--text-primary)",

    },

  },
  // colors:['#e0e0e0'],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  yaxis: [{
    title: {
      text: 'Record Count',
      style: {
        color: "var(--text-primary)",
      },
    },
    labels: {
      style: {
        colors: "var(--text-primary)",

      },
    },

  },],
  xaxis: {
    categories: [
      ['advertisements'],
      ['Emplyee Referral'],
      ['External Referral'],
      ['Facebook'],
      ['omline store'],
      ['Partner'],
      ['LinkedIn'],
      ['Monster'],
    ],
    labels: {
      style: {
        //   colors: colors,
        fontSize: '12px',
        colors: 'var(--text-primary)'
      }
    }
  }
}

const optionspie = {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Account by industry',
    style: {
      color: "var(--text-primary)",
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Technology', 'Consultant', 'Communication', 'Education', 'Manufacturing'],
  colors: ["#6f42c1", "#007bff", "#17a2b8", "#00cccc", "#adb2bd"],
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

      colors: "var(--text-primary)",

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
const seriespie = [44, 55, 13, 43, 22]

const seriesbar = [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58]
}]

const optionsbar = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: !1,
    }
  },
  title: {
    text: 'Leads by Status',
    style: {
      color: "var(--text-primary)",
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
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Attempted to contact', 'Contact in future', 'Contacted', 'Lost Lead', 'Not contact', 'Pre-Qualifying'],
    labels: {
      style: {
        colors: "var(--text-primary)",

      },
    },
  },
  yaxis: {
    title: {
      text: 'Record Count',
      style: {
        color: "var(--text-primary)",
      },

    },
    labels: {
      style: {
        colors: "var(--text-primary)",

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
  }
}


const table1 = [{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",


},
{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",
},
{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",
},
{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",
},
{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",
},
{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",
},
{
  name: "Orien",
  amount: "$35,000",
  stage: "Closed Win",
  date: "20-12-2022",
},
]

export default function Pipline() {
  return (
    <div className="p-3">


      <Row className="mt-2">
        <Col>
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h6 className="" style={{color:"var(--text-primary)"}}> Total Deal Amount</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="" style={{color:"var(--text-primary)"}}>10000</h4>
                  </Col>
                </Row>
              </Col>

              <Col>
                <img src={Money} height={60} width={60} />
              </Col>
            </Row>

          </Card>
        </Col>
        <Col>
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h6 className="" style={{color:"var(--text-primary)"}}> Total Deal Closed</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="" style={{color:"var(--text-primary)"}}>8</h4>
                  </Col>
                </Row>
              </Col>

              <Col>
                <img src={Closed} height={60} width={60} />
              </Col>
            </Row>

          </Card>
        </Col>
        <Col>
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h6 className="" style={{color:"var(--text-primary)"}}> Total Deal Count</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="" style={{color:"var(--text-primary)"}}>10</h4>
                  </Col>
                </Row>
              </Col>

              <Col>
                <img src={Count} height={60} width={60} />
              </Col>
            </Row>

          </Card>
        </Col>
        <Col>
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col>
                    <h6 className="" style={{color:"var(--text-primary)"}}>Avg days to closed deal</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="" style={{color:"var(--text-primary)"}}>10</h4>
                  </Col>
                </Row>
              </Col>

              <Col lg={6}>
                <img src={Days} height={60} width={60} />
              </Col>
            </Row>

          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <Row>
              <Col>
                <ReactApexChart options={options} series={series} type="bar" height={273} />
              </Col>
            </Row>

          </Card>
        </Col>
        <Col >
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <Row>
              <Col className="d-flex justify-content-center" >
                <ReactApexChart options={optionspie} series={seriespie} type="pie" width={380} />
              </Col>
            </Row>

          </Card>
        </Col>

      </Row>

      <Row className="mt-3">
        <Col lg={5}>
          <Card className="p-3" style={{ backgroundColor: "var(--background)" }}>
            <ReactApexChart options={optionsbar} series={seriesbar} type="bar" height={350} />
          </Card>
        </Col>
        <Col lg={7}>
          <Card className="" style={{ backgroundColor: 'var(--background)', height: "400px" }}>



            <CardHeader className=""
              style={{
                backgroundColor: "var(--background)",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                border: "0px"
              }}>
              <Row className="align-items-center">
                <div className="col">
                  <h5 className="mb-0 " style={{color:"var(--text-primary)"}}>Deal Details</h5>
                </div>

              </Row>


            </CardHeader>
            <Table className="align-items-center  table-flush" responsive >
              <thead >
                <tr className="" style={{ color: "#91cf57", backgroundColor: "#26385c" }}>
                  <th scope="col">Name</th>
                  <th className=" " scope="col">Amount</th>
                  <th scope="col">Stage</th>
                  <th scope="col">Closing Date</th>

                </tr>
              </thead>
              {table1.map((item, index) => (
                <tbody   >
                  <tr key={index} className=" "style={{color:"var(--text-primary)"}} >
                    <td className="" scope="">{item.name}</td>
                    <td >{item.amount}</td>
                    <td className="">{item.stage}</td>
                    <td >{item.date}</td>



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