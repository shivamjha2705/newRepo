import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';

const AdminDetails = () => {
  // Example data, replace with actual admin data
  // const admins = [
  //     { id: 1, firstName: 'John', lastName: 'Doe', mobNo: '123-456-7890' },
  //     { id: 2, firstName: 'Jane', lastName: 'Doe', mobNo: '987-654-3210' },
  //     // Add more admins as needed
  // ];

  //   useEffect(() => {
  //     // Fetch or set your admin data here
  //   }, [])

  const data = {
    columns: [
      {
        label: "SNo",
        field: "sno",
        sort: "asc",
        width: 150,
      },
      {
        label: "First Name",
        field: "firstName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last Name",
        field: "lastName",
        sort: "asc",
        width: 270,
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
        firstName: "Tiger",
        lastName: "Nixon",
        mobileNo: "+91 9955110044",
        action: (
          <div>
            <Link to="/adminProfile">
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
        firstName: "Max",
        lastName: "Bolt",
        mobileNo: "+91 9933110044",
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
        firstName: "Navin",
        lastName: "kUMAR",
        mobileNo: "+91 9956410044",
        action: (
          <div>
            <button className="btn btn-primary mx-2">
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
          <Breadcrumbs maintitle="Carvaan" title="Admin" breadcrumbItem="Admin Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Admin Details</CardTitle>
                  <MDBDataTable responsive bordered data={data}  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminDetails