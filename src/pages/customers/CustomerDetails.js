import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';

const CustomerDetails = () => {
  const CustomerData = {
    columns: [
      {
        label: "SNo",
        field: "sno",
        sort: "asc",
        width: 150,
      },
      {
        label: "Customer Id",
        field: "customerId",
        sort: "asc",
        width: 150,
      },
      {
        label: "Customer Name",
        field: "customerName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Mobile No",
        field: "mobileNo",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 200,
      },
    ],
    rows: [
      {
        sno: "1",
        customerId: "C01",
        customerName: "Tiger",
        mobileNo: "+91 9955110044",
        action: (
          <div>
            <Link to="/customerProfile">
              <button className="btn btn-primary mx-2">
                <i className="ti-eye"></i>
              </button>
            </Link>
            <button className="btn btn-danger mx-2" onClick={() => handleDelete(1)}>
              <i className="ti-trash"></i>
            </button>
            <button className="btn btn-info mx-2" onClick={() => handleDelete(1)}>
              <i className="ti-pencil-alt"></i>
            </button>
          </div>
        ),
      },
      {
        sno: "2",
        customerId: "C01",
        customerName: "Nixon",
        mobileNo: "+91 9947110044",
        action: (
          <div>
            <button className="btn btn-primary mx-2" onClick={() => handleEdit(1)}>
              <i className="ti-eye"></i>
            </button>
            <button className="btn btn-danger mx-2" onClick={() => handleDelete(1)}>
              <i className="ti-trash"></i>
            </button>
            <button className="btn btn-info mx-2" onClick={() => handleDelete(1)}>
              <i className="ti-pencil-alt"></i>
            </button>
          </div>
        ),
      },
    ]
  }

  // ----------*********have to declare handleEdit, handleDelete functions************------------

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Customers" breadcrumbItem="Customer Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Customer Details</CardTitle>
                  <MDBDataTable responsive bordered data={CustomerData} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerDetails