import React from "react";
import {Row,Col,Card,CardBody,} from "reactstrap";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/user-4.jpg";

const AdminProfile = props => {
  return (
    <React.Fragment>
      <div className="page-content">
      <div className="container-fluid">
          {/* Render Breadcrumb */}
          <Breadcrumb maintitle="Carvaan" title="Admin" breadcrumbItem="Admin Profile" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="mx-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="align-self-center flex-1">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-0">Id no: 101</p>
                        <p className="mb-1">Name : Tiger Nixon</p>
                        <p className="mb-1">Mobile Number : +91 9955110044</p>
                        <p className="mb-1">Email : tigerNixon@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminProfile