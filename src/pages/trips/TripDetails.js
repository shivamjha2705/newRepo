import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const TripDetails = () => {
    const tripData = {
        columns: [
        {
            label: "SNo",
            field: "sno",
            sort: "asc",
            width: 150,
            },
        {
            label: "Trip Id",
            field: "tripId",
            sort: "asc",
            width: 150,
        },
        {
            label: "Vendor Id",
            field: "vendorId",
            sort: "asc",
            width: 150,
        },
          {
            label: "From ( Arrival )",
            field: "from",
            sort: "asc",
            width: 150,
          },
          {
            label: "To ( Destination )",
            field: "to",
            sort: "asc",
            width: 270,
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
            tripId: "T01",
            vendorId: "V01",
            from: "Chicago",
            to: "Dallas",
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
            tripId: "T02",
            vendorId: "V02",
            from: "Houston",
            to: "Austin",
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
        <Breadcrumbs maintitle="Carvaan" title="Trips" breadcrumbItem="Trip Details" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle className="h4">Trips Details</CardTitle>
                <MDBDataTable responsive bordered data={tripData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </React.Fragment>
  )
}

export default TripDetails