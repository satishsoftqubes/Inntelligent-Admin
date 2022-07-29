import React from "react";
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import GreenLabel from "../../../Component/Labels/GreenLabel/Index";
import RedLabel from "../../../Component/Labels/RedLabel/Index";
import TableView from "../../../Component/Table/Index";

function Users() {
  const usersTableColumns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Contact Number",
        accessor: "contactNo",
      },
      {
        Header: "Passwords",
        accessor: "passwords",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Last Login",
        accessor: "lastLogin",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const usersTableData = [
    {
      name: <Form.Control type="search" className="table-search" />,
      email: <Form.Control type="search" className="table-search" />,
      contactNo: <Form.Control type="search" className="table-search" />,
      passwords: <Form.Control type="search" className="table-search" />,
      status: <Form.Control type="search" className="table-search" />,
      lastLogin: <Form.Control type="search" className="table-search" />,
      action: "",
    },
    {
      name: "Jim Gregory",
      email: "-",
      contactNo: "877-123-123",
      passwords: "877123",
      status: <GreenLabel successLabel="Active" />,
      lastLogin: "11-27-2021",
      action: (
        <div className="btn-icon-grp-table">
          <Button className="btn-icon editIcon"></Button>
          <Button className="btn-icon cancelIcon"></Button>
        </div>
      ),
    },
    {
      name: "Jim Gregory",
      email: "-",
      contactNo: "877-123-123",
      passwords: "877123",
      status: <RedLabel dangerLabel="Inactive" />,
      lastLogin: "11-27-2021",
      action: (
        <div className="btn-icon-grp-table">
          <Button className="btn-icon editIcon"></Button>
          <Button className="btn-icon cancelIcon"></Button>
        </div>
      ),
    },
  ];
  return (
    <Container fluid={true} className="p-0 position-relative">
      <div className="btn-icon-grp position-static justify-content-end">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Export Data</Tooltip>}>
          <Button className="btn-icon exportFileIcon"></Button>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Add User</Tooltip>}>
          <Button className="btn-icon addFormIcon"></Button>
        </OverlayTrigger>
      </div>
      <Row>
        <Col xs={12}>
          <TableView columnsData={usersTableColumns} tableData={usersTableData} />
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
