import React from "react";
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import TableView from "../../../Component/Table/Index";

function UsersRole() {
  const usersRoleTableColumns = React.useMemo(
    () => [
      {
        Header: "Role Code",
        accessor: "roleCode",
      },
      {
        Header: "Role Name",
        accessor: "roleName",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const usersRoleTableData = [
    {
      roleCode: <Form.Control type="search" className="table-search" />,
      roleName: <Form.Control type="search" className="table-search" />,
      action: "",
    },
    {
      roleCode: "Administrator",
      roleName: "Administrator",
      action: (
        <div className="btn-icon-grp-table">
          <Button className="btn-icon editIcon"></Button>
          <Button className="btn-icon cancelIcon"></Button>
        </div>
      ),
    },
    {
      roleCode: "DOS",
      roleName: "Director Of Sales",
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
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Add User Role</Tooltip>}>
          <Button className="btn-icon addFormIcon"></Button>
        </OverlayTrigger>
      </div>
      <Row>
        <Col xs={12} className="portfolio-Table">
          <TableView columnsData={usersRoleTableColumns} tableData={usersRoleTableData} />
        </Col>
      </Row>
    </Container>
  );
}

export default UsersRole;
