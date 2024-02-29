import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const CreateTrip = () => {

    return (
        <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Trips" breadcrumbItem="Create Trip" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Create Trip</CardTitle>
                  <Form className="repeater mt-5">
                    <div data-repeater-list="group-a">
                      <div data-repeater-item className="row w-100">
                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="from">From</label>
                          <input type="text" id="from" name="untyped-input" className="form-control" placeholder="From" required />
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="to">To</label>
                          <input type="text" id="to" className="form-control" placeholder="To" required/>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="mob">Date</label>
                          <input type="date" id="date" className="form-control" required/>
                        </div>
                      </div>
                      <button className="mt-1 btn btn-success">Create Trip</button>
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

export default CreateTrip