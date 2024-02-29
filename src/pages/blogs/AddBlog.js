import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';

const AddBlog = () => {
    // const data = {
        
    // }
    return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Blogs" breadcrumbItem="Add Blog" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Add Blog</CardTitle>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
    )
}

export default AddBlog