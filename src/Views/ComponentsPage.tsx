import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import AccordianView from "../Component/Accordian/Index";
import BreadCrumb from "../Component/BreadCrumb/Index";
import DashboardBlueCard from "../Component/DashboardBlueCard/Index";
import BarChart from "../Component/Graphs/Bar/Index";
import DoughnutChart from "../Component/Graphs/Doughnut/Index";
import RoundKnob from "../Component/Knob/Index";
import BlueLabel from "../Component/Labels/BlueLabel/Index";
import GreenLabel from "../Component/Labels/GreenLabel/Index";
import RedLabel from "../Component/Labels/RedLabel/Index";
import SkeletonLoader from "../Component/SkeletonLoader/Index";
import TableView from "../Component/Table/Index";
import TabsView from "../Component/Tabs/Index";
import VerticalTabs from "../Component/VerticalTabs/Index";
import WizardView from "../Component/Wizard/Index";

// import Loader from "./Common/loader";

interface modelObj {
  numberData: number;
  cardHeader: any;
  imgData: string;
}

function ComponentPage() {
  const [roundKnobValue] = useState(90);
  const [roundKnobValue1] = useState(44);
  const [roundKnobValue2] = useState(12);
  const doughnutChartData = {
    Labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#FF791D",
          "#719112",
          "#FFD036",
          "#4AFFFF",
          "#333399",
          "#C0C0C0",
          "#9C4E98",
        ],
        borderWidth: 0,
      },
    ],
  };
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 10, 20, 30],
        backgroundColor: "#3454D1",
      },
    ],
  };
  const averageData = [
    {
      numberData: 9566,
      cardHeader: (
        <span>
          total <br /> accounts
        </span>
      ),
      imgData: "newAccounts.png",
    },
    {
      numberData: 115,
      cardHeader: (
        <span>
          New Accounts <br /> last 30 Days
        </span>
      ),
      imgData: "newOpportunity.png",
    },
    {
      numberData: 35,
      cardHeader: (
        <span>
          New <br /> Opportunity
        </span>
      ),
      imgData: "numberOfActivity.png",
    },
    {
      numberData: 5194,
      cardHeader: (
        <span>
          Number of Activity <br /> in Past Years
        </span>
      ),
      imgData: "totalAccounts.png",
    },
  ];
  const mainTableColumns = React.useMemo(
    () => [
      {
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Account Name",
        accessor: "accountName",
      },
      {
        Header: "Owner",
        accessor: "owner",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Top",
        accessor: "top",
      },
      {
        Header: "Target",
        accessor: "target",
      },
      {
        Header: "Growth",
        accessor: "growth",
      },
      {
        Header: "Anticipated Revenue(C.Y.)",
        accessor: "anticipatedRevenue",
      },
      {
        Header: "Last Activity",
        accessor: "lastActivity",
      },
    ],
    []
  );
  const mainTableData = [
    {
      code: "SH71738",
      accountName: "Wells High School SHILO INN SHILO",
      owner: "Cami Pollack",
      status: <GreenLabel successLabel="Active" />,
      top: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      target: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      growth: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      anticipatedRevenue: "$4500.00",
      lastActivity: "11-27-2018",
    },
    {
      code: "SH71738",
      accountName: "Wells High School SHILO INN SHILO",
      owner: "Cami Pollack",
      status: <BlueLabel blueLabel="Prospect" />,
      top: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      target: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      growth: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      anticipatedRevenue: "$4500.00",
      lastActivity: "11-27-2018",
    },
    {
      code: "SH71738",
      accountName: "Wells High School SHILO INN SHILO",
      owner: "Cami Pollack",
      status: <RedLabel dangerLabel="Inactive" />,
      top: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      target: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      growth: <Form.Check inline name="group1" type="checkbox" id="inline-checkbox-1" />,
      anticipatedRevenue: "$4500.00",
      lastActivity: "11-27-2018",
    },
  ];
  const accordianList = [
    {
      key: "1",
      accordianTitle: "Account Information",
      accordianContent: "2",
    },
    {
      key: "2",
      accordianTitle: "Contacts",
      accordianContent: "345",
    },
  ];
  const firstComponent = () => {
    return <div>1. First Component</div>;
  };
  const secondComponent = () => {
    return <div>2. Second Component</div>;
  };
  const thirdComponent = () => {
    return <div>3. Third Component</div>;
  };
  const finalComponent = () => {
    return <div>4. Final Component</div>;
  };
  const [steps, setSteps] = useState([
    { key: "firstStep", label: "My First Step", isDone: true, component: firstComponent },
    { key: "secondStep", label: "My Second Step", isDone: false, component: secondComponent },
    { key: "thirdStep", label: "My Third Step", isDone: false, component: thirdComponent },
    { key: "finalStep", label: "My Final Step", isDone: false, component: finalComponent },
  ]);
  const tabList = [
    {
      key: "1",
      tabTitle: "Tab 1",
      tabContent: "1",
    },
    {
      key: "2",
      tabTitle: "Tab 2",
      tabContent: "2",
    },
    {
      key: "3",
      tabTitle: "Tab 3",
      tabContent: "3",
    },
  ];

  const notifySuccess = () =>
    toast.success(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos architecto nemo animi sed et?",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
        progress: undefined,
      }
    );
  const notifyInfo = () =>
    toast.info(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos architecto nemo animi sed et?",
      {
        // icon: "🚀",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
        progress: undefined,
      }
    );
  const notifyWarn = () =>
    toast.warn(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos architecto nemo animi sed et?",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
        progress: undefined,
      }
    );
  const notifyError = () =>
    toast.error(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos architecto nemo animi sed et?",
      {
        // icon: "🚀",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
        progress: undefined,
      }
    );

  const successAlert = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button.",
      icon: "success",
    });
  };

  const questionAlert = () => {
    Swal.fire({
      title: "Do you have a problem to solve?!",
      text: "Ask us on dirask",
      icon: "question",
    });
  };

  const errorAlert = () => {
    Swal.fire({
      title: "Icon error!",
      text: "You clicked the button.",
      icon: "error",
    });
  };

  const warningAlert = () => {
    Swal.fire({
      title: "Do you have a problem to solve?!",
      text: "Ask us on dirask",
      icon: "warning",
    });
  };
  const infoAlert = () => {
    Swal.fire({
      title: "Good info!",
      text: "You clicked the button.",
      icon: "info",
    });
  };

  return (
    <div>
      {/* <Loader /> */}
      <Card className="p-4 mb-4">
        <h1>Sweet Alert</h1>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={successAlert}>
            Success Alert
          </Button>
          <Button variant="primary" onClick={questionAlert}>
            Question Alert
          </Button>
          <Button variant="primary" onClick={errorAlert}>
            Error Alert
          </Button>
          <Button variant="primary" onClick={warningAlert}>
            Warning Alert
          </Button>
          <Button variant="primary" onClick={infoAlert}>
            Info Alert
          </Button>
        </div>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Toaster</h1>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={notifySuccess}>
            Notify Success!
          </Button>
          <Button variant="primary" onClick={notifyInfo}>
            Notify Info!
          </Button>
          <Button variant="primary" onClick={notifyWarn}>
            Notify Warning!
          </Button>
          <Button variant="primary" onClick={notifyError}>
            Notify Error!
          </Button>
        </div>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Breadcrumb</h1>
        <BreadCrumb />
      </Card>
      <Card className="p-4 mb-4">
        <h1>Wizard Form</h1>
        <WizardView steps={steps} setSteps={setSteps} />
      </Card>
      <Card className="p-4 mb-4">
        <h1>Accordian</h1>
        <AccordianView accordianPaneList={accordianList} />
      </Card>
      <Card className="p-4 mb-4">
        <h1>SkeletonLoaders</h1>
        <SkeletonLoader />
      </Card>
      <Card className="p-4 mb-4">
        <h1>Charts</h1>
        <Container fluid="true">
          <Row className="mb-5">
            <Col xs={7}>
              <Row>
                <Col xs={6}>
                  <DoughnutChart
                    doughnutChartWidth="330"
                    doughnutChartHeight="250"
                    doughnutChartData={doughnutChartData}
                  />
                </Col>
                <Col xs={6}>
                  <DoughnutChart
                    doughnutChartWidth="330"
                    doughnutChartHeight="250"
                    doughnutChartData={doughnutChartData}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={5}>
              <Row>
                <Col>
                  <BarChart barChartData={barChartData} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
      <Card className="p-4 mb-4">
        <h1>KnobJS</h1>
        <Container fluid="true">
          <Row className="mb-5">
            <Col xs={4} className="text-center">
              <RoundKnob roundKnobValue={roundKnobValue} />
            </Col>
            <Col xs={4} className="text-center">
              <RoundKnob roundKnobValue={roundKnobValue1} />
            </Col>
            <Col xs={4} className="text-center">
              <RoundKnob roundKnobValue={roundKnobValue2} />
            </Col>
          </Row>
        </Container>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Three Labels</h1>
        <Container fluid="true">
          <Row className="mb-5">
            <Col>
              <RedLabel dangerLabel="Not Viable" />
              <GreenLabel successLabel="Normal" />
              <BlueLabel blueLabel="Prospect" />
            </Col>
          </Row>
        </Container>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Dashboard Blue Card</h1>
        <Container fluid="true">
          <Row className="mb-5">
            <Col xs={12}>
              <Row className="mb-5">
                {averageData.length > 0 ? (
                  averageData.map((data: modelObj, key: any) => (
                    <Col className="mb-3" xs={6} key={key}>
                      <DashboardBlueCard
                        numberData={data.numberData}
                        cardHeader={data.cardHeader}
                        imgData={data.imgData}
                      />
                    </Col>
                  ))
                ) : (
                  <div></div>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Table</h1>
        <Container fluid="true">
          <TableView columnsData={mainTableColumns} tableData={mainTableData} />
        </Container>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Tabs</h1>
        <Container fluid="true">
          <TabsView tabPaneList={tabList} />
        </Container>
      </Card>
      <Card className="p-4 mb-4">
        <h1>Vertical Tabs</h1>
        <VerticalTabs />
      </Card>
    </div>
  );
}

export default ComponentPage;
