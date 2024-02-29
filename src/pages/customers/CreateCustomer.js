import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const CreateCustomer = () => {

    return (
        <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Customers" breadcrumbItem="Create Customer" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Create Customer</CardTitle>
                  <Form className="repeater mt-5">
                    <div data-repeater-list="group-a">
                      <div data-repeater-item className="row w-100">
                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="CustomerName">Customer Name</label>
                          <input type="text" id="CustomerName" name="untyped-input" className="form-control" placeholder="Enter customer name" required />
                        </div>

                        <div className="mb-3 col-lg-2">
                          <label className="form-label" htmlFor="CustomerEmail">Email</label>
                          <input type="email" id="CustomerEmail" className="form-control" placeholder="Enter customer email"/>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="mob">Mobile Number</label>
                          <input type="number" id="mob" className="form-control" placeholder="Enter your mobile number" required/>
                        </div>
                        
                      </div>
                      <button className="mt-1 btn btn-success">Create Customer</button>

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

export default CreateCustomer