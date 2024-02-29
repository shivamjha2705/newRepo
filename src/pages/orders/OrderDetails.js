import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const OrderDetails = () => {
    const data = {
        columns: [
        {
            label: "SNo",
            field: "sno",
            sort: "asc",
            width: 150,
            },
          {
            label: "User ID",
            field: "userId",
            sort: "asc",
            width: 150,
          },
          {
            label: "Vendor ID",
            field: "vendorId",
            sort: "asc",
            width: 270,
          },
          {
            label: "Trip ID",
            field: "tripId",
            sort: "asc",
            width: 270,
          },
          {
            label: "Paid / Unpaid",
            field: "paidUnpaid",
            sort: "asc",
            width: 200,
          },
          {
            label: "Date",
            field: "date",
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
            userId: "U01",
            vendorId: "V01",
            tripId: "T01",
            paidUnpaid: "Paid",
            date: "31/01/2024",
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
          {
            sno: "2",
            userId: "U02",
            vendorId: "V02",
            tripId: "T02",
            paidUnpaid: "Unpaid",
            date: "31/01/2024",
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
          {
            sno: "3",
            userId: "U03",
            vendorId: "V03",
            tripId: "T03",
            paidUnpaid: "Paid",
            date: "31/01/2024",
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
          <Breadcrumbs maintitle="Carvaan" title="Orders" breadcrumbItem="Order Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Order Details</CardTitle>
                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
    )
}

export default OrderDetails