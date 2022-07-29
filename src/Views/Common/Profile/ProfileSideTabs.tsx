import React from "react";
import { Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import BlueLabel from "../../../Component/Labels/BlueLabel/Index";
import GreenLabel from "../../../Component/Labels/GreenLabel/Index";
import RedLabel from "../../../Component/Labels/RedLabel/Index";
import TableView from "../../../Component/Table/Index";
import TabsView from "../../../Component/Tabs/Index";

function ProfileSideTabs() {
  const overviewTableColumns = React.useMemo(
    () => [
      {
        Header: "Objective",
        accessor: "objective",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "End Date",
        accessor: "endDate",
      },
    ],
    []
  );

  const overviewTableData = [
    {
      objective: "Deanna approval",
      status: <GreenLabel successLabel="Completed" />,
      type: "Email",
      startDate: "07-14-2022",
      endDate: "07-14-2023",
    },
    {
      objective: "Sent to load",
      status: <BlueLabel blueLabel="In Progress" />,
      type: "Email",
      startDate: "07-14-2022",
      endDate: "07-14-2023",
    },
    {
      objective: "Sent CCA-Morgan called to provide full - texted",
      status: <RedLabel dangerLabel="Incomplete" />,
      type: "Phone Call",
      startDate: "07-14-2022",
      endDate: "07-14-2023",
    },
    {
      objective: "Guests will call in directly",
      status: <GreenLabel successLabel="Completed" />,
      type: "Blitz",
      startDate: "07-14-2022",
      endDate: "07-14-2023",
    },
  ];

  const recentActionTableColumns = React.useMemo(
    () => [
      {
        Header: "Activities",
        accessor: "activities",
      },
      {
        Header: "Detials",
        accessor: "detials",
      },
      {
        Header: "Perform Date",
        accessor: "performDate",
      },
    ],
    []
  );

  const recentActionTableData = [
    {
      activities: "Save Account Attachment",
      detials: "ETB Tours 5.31.pdf is New Created",
      performDate: "11-27-2018",
    },
    {
      activities: "Save Activities",
      detials: "Http://www.wyndhamhotels.com/hotels/53728?corporate_id=1000053638 is New Created",
      performDate: "10-04-2021",
    },
    {
      activities: "Update Account",
      detials: "Rackley Company Inc#LQ53728 is Update",
      performDate: "01-18-2022",
    },
    {
      activities: "Update Client",
      detials: "JenniferDaudi is Updated",
      performDate: "09-23-2021",
    },
  ];

  const hotelsTableColumns = React.useMemo(
    () => [
      {
        Header: "Hotel Name",
        accessor: "hotelName",
      },
      {
        Header: "Portfolio",
        accessor: "portfolio",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Contact No",
        accessor: "contactNo",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Web",
        accessor: "web",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const hotelsTableData = [
    {
      hotelName: "Studio 6 Dallas Northwest",
      portfolio: "My Hospitality Sales Pro",
      city: "-",
      state: "-",
      contactNo: "877-794-4710",
      email: "info@essicompanies.com",
      web: "-",
      status: <RedLabel dangerLabel="Inactive" />,
    },
    {
      hotelName: "La Quinta Inn& Suites Morgan Hill",
      portfolio: "My Hospitality Sales Pro",
      city: "Morgan Hill",
      state: "CA",
      contactNo: "509-947-8246",
      email: "info@essicompanies.com",
      web: "-",
      status: <GreenLabel successLabel="Active" />,
    },
  ];

  const accountsTableColumns = React.useMemo(
    () => [
      {
        Header: "Account Name",
        accessor: "accountName",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Contact No",
        accessor: "contactNo",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Web",
        accessor: "web",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const accountsTableData = [
    {
      accountName: "Studio 6 Dallas Northwest",
      city: "-",
      state: "-",
      contactNo: "877-794-4710",
      email: "info@essicompanies.com",
      web: "-",
      status: <RedLabel dangerLabel="Inactive" />,
    },
    {
      accountName: "La Quinta Inn& Suites Morgan Hill",
      city: "Morgan Hill",
      state: "CA",
      contactNo: "509-947-8246",
      email: "info@essicompanies.com",
      web: "-",
      status: <GreenLabel successLabel="Active" />,
    },
  ];

  const tabList = [
    {
      key: "1",
      tabTitle: "Overview",
      tabContent: (
        <Container fluid={true} className="p-0 position-relative">
          <div className="clearfix">
            <div className="btn-icon-grp position-static float-end mt-n6">
              <OverlayTrigger placement="bottom" overlay={<Tooltip>Get More Activities</Tooltip>}>
                <Button className="btn-icon addFormIcon"></Button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="activity-tab-table">
            <TableView columnsData={overviewTableColumns} tableData={overviewTableData} />
          </div>
        </Container>
      ),
    },
    {
      key: "2",
      tabTitle: "Recent Actions",
      tabContent: (
        <Container fluid={true} className="p-0 position-relative">
          <div className="clearfix">
            <div className="btn-icon-grp position-static float-end mt-n6">
              <OverlayTrigger placement="bottom" overlay={<Tooltip>Get More Actions</Tooltip>}>
                <Button className="btn-icon addFormIcon"></Button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="activity-tab-table">
            <TableView columnsData={recentActionTableColumns} tableData={recentActionTableData} />
          </div>
        </Container>
      ),
    },
    {
      key: "3",
      tabTitle: "Hotels",
      tabContent: (
        <Container fluid={true} className="p-0 position-relative">
          <div className="clearfix">
            <div className="btn-icon-grp position-static float-end mt-n6">
              <OverlayTrigger placement="bottom" overlay={<Tooltip>Get More Hotels</Tooltip>}>
                <Button className="btn-icon addFormIcon"></Button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="activity-tab-table">
            <TableView columnsData={hotelsTableColumns} tableData={hotelsTableData} />
          </div>
        </Container>
      ),
    },
    {
      key: "4",
      tabTitle: "Accounts",
      tabContent: (
        <Container fluid={true} className="p-0 position-relative">
          <div className="clearfix">
            <div className="btn-icon-grp position-static float-end mt-n6">
              <OverlayTrigger placement="bottom" overlay={<Tooltip>Get More Accounts</Tooltip>}>
                <Button className="btn-icon addFormIcon"></Button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="activity-tab-table">
            <TableView columnsData={accountsTableColumns} tableData={accountsTableData} />
          </div>
        </Container>
      ),
    },
  ];
  return (
    <Container fluid="true">
      <TabsView tabPaneList={tabList} />
    </Container>
  );
}

export default ProfileSideTabs;
