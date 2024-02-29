import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const CreateOrder = () => {

    return (
        <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Orders" breadcrumbItem="Create Order" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Create Order</CardTitle>
                  <Form className="repeater mt-5">
                    <div data-repeater-list="group-a">
                      <div data-repeater-item className="row w-100">
                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="uId">User Id</label>
                          <input type="text" id="uId" name="untyped-input" className="form-control" placeholder="Enter user id" required />
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="vId">User Id</label>
                          <input type="text" id="vId" name="untyped-input" className="form-control" placeholder="Enter vendor id" required />
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="tId">Trip Id</label>
                          <input type="text" id="tId" name="untyped-input" className="form-control" placeholder="Enter trip id" required />
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="paidUnpaid">Paid / Unpaid</label>
                          <input type="text" id="paidUnpaid" className="form-control" placeholder="Paid or Unpaid" required/>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="date">Date</label>
                          <input type="date" id="date" className="form-control" required/>
                        </div>

                      </div>
                      <button className="mt-1 btn btn-success">Create Order</button>

                    </div>
                  </Form>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
    )
}

export default CreateOrder