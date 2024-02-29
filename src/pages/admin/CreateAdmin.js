import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const CreateAdmin = () => {

    return (
        <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Admin" breadcrumbItem="Create Admin" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Create Admin</CardTitle>
                  <Form className="repeater mt-5">
                    <div data-repeater-list="group-a">
                      <div data-repeater-item className="row w-100">
                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="fName">First Name</label>
                          <input type="text" id="fName" name="untyped-input" className="form-control" placeholder="Enter your first name" required />
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="lName">Last Name</label>
                          <input type="text" id="lName" className="form-control" placeholder="Enter your last name" required/>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="mob">Mobile Number</label>
                          <input type="number" id="mob" className="form-control" placeholder="Enter your mobile number" required/>
                        </div>

                        <div className="mb-3 col-lg-3">
                          <label className="form-label" htmlFor="profile">Profile Photo</label>{" "}
                          <input type="file" className="form-control" id="profile" required accept=".png, .jpg, .jpeg"/>
                        </div>
                      </div>
                      <button className="mt-1 btn btn-success">Add</button>

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

export default CreateAdmin