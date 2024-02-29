import React from "react";
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, } from "reactstrap";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

// import avatar from "../../assets/images/users/user-4.jpg";

const CustomerProfile = props => {
    return (

        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    {/* Render Breadcrumb */}
                    <Breadcrumb maintitle="Carvaan" title="Customers" breadcrumbItem="Customer Profile" />

                    <Row>
                        <Col className="d-flex w-100">
                            <Card className="w-30 mx-2 d-flex align-items-center">
                                <CardImg
                                    style={{ width: '70%' }}
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="Card image cap"
                                />
                                <CardBody className="d-flex flex-column align-items-center">
                                    <CardTitle tag="h5">John Smith</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        Profession
                                    </CardSubtitle>
                                    <div className="d-flex justify-content-center m-2">
                                        <Button color="primary">Follow</Button>
                                        <Button outline color="primary" className="ms-1">
                                            Message
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="mb-4 w-100 mx-2" >
                                <CardBody>
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Full Name</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">Johnatan Smith</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Age</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">26</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Gender</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">Male</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Email</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">example@example.com</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Mobile</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">(098) 765-4321</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Current City</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">Patna</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Interest</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">Johnatan Smith</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CustomerProfile