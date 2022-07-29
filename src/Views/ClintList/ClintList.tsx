import React from "react";
import { Container, Row, Button } from "react-bootstrap";

import TableView from "../../Component/Table/Index";
import { getClientSelection } from "../../Service/ClientService";
function ClintList() {
  const clintDabelData1 = React.useMemo(
    () => [
      {
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Reg. Date",
        accessor: "regDate",
      },
      {
        Header: "Exp. Date",
        accessor: "expDate",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Portfolios",
        accessor: "portfolio",
      },
      {
        Header: "Properties",
        accessor: "properties",
      },
      {
        Header: "Users",
        accessor: "user",
      },
      {
        Header: "Action",
        accessor: "btns",
      },
    ],
    []
  );
  const clintDabelData = [
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text green">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
    {
      code: "SH71738",
      name: (
        <div className="text red">
          <i className="fa-solid fa-circle me-1"></i>
          <span>Chris Flores</span>
        </div>
      ),
      regDate: "11-27-2018",
      expDate: "11-27-2018",
      email: "chris34@gmail.com",
      phone: "701-740-1200",
      portfolio: "05",
      properties: "1/1",
      user: "12",
      btns: (
        <div className="button-all-three">
          <Button className="button-download"></Button>
          <Button className="button-edit"></Button>
          <Button className="button-remove"></Button>
        </div>
      ),
    },
  ];
  React.useEffect(() => {
    getClientListData();
  }, []);
  async function getClientListData() {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNocmlzdGluZVJvbm5pbmciLCJnaXZlbl9uYW1lIjoiQ2hyaXN0aW5lUm9ubmluZyIsIlVzZXJJRCI6Ijk1ZjZmY2E1LWVlMGItNDMyNC04Y2Q2LTYwOWE4ZmE5ZjFkMSIsIm5iZiI6MTY1OTAxNTU0NSwiZXhwIjoxNjc0NTY3NTQ1LCJpYXQiOjE2NTkwMTU1NDV9.qix586XaMBgYBKEKaVXgmX9x2t_2cYO2uTk98pNK2y8";
    let resAcountList: any = await getClientSelection(accessToken);
    console.log("resAcountList", resAcountList);
    debugger;
    // setaccountListData(resAcountList.data.data.accountDDLItem);
  }
  return (
    <>
      <div>
        <div className="student-and-expert d-flex">
          <div className="export-and-client d-flex mt-2">
            <div className="export me-3">
              <i className="fa-solid fa-file-export"></i>
              <span>Export</span>
            </div>
            <div className="client">
              <i className="fa-regular fa-circle-plus"></i>
              <span>Client</span>
            </div>
          </div>
        </div>
        <div className="tabelData">
          <Container fluid={true} className="p-0">
            <Row>
              <TableView columnsData={clintDabelData1} tableData={clintDabelData} />
              {/* <Table responsive className="table bg-white text-black">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Reg. Date</th>
                    <th>Exp. Date</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Portfolios</th>
                    <th>Properties</th>
                    <th>Users</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clintDabelData.map((row, i) => {
                    return (
                      <tr key={i}>
                        <td>{row.code}</td>
                        <td>{row.name}</td>
                        <td>{row.regDate}</td>
                        <td>{row.expDate}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.portfolio}</td>
                        <td>{row.properties}</td>
                        <td>{row.user}</td>
                        <td className="button-all-three text-end">
                          {row.btns.btnOne}
                          {row.btns.btnTwo}
                          {row.btns.btnThree}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table> */}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default ClintList;
