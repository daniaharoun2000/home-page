import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import svgg from '../images/angledownicon.svg'
function LocationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-white locationbox mb-0 ">
   
          <Button onClick={handleShow} className="d-flex align-items-center  locationbutton m-0 d-xxl-none " variant="badge">
  
    <span  className="locationtext py-2 text-overflow-1 d-flex justify-content-center gap-1 align-items-center">  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height= "23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        strokeLinejoin="round"
        className="locationicon "
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg></span>
  </Button>
      <Button onClick={handleShow} className="d-flex align-items-center w-100 locationbutton d-none d-xxl-block  " variant="badge">
    
  
        <span  className="locationbuttonspan py-2 text-overflow-1 d-flex justify-content-center gap-1 align-items-center">  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height= "23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            strokeLinejoin="round"
            className="locationicon "
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg><span>Your Location </span><img src={svgg} className="angleicon  justify-content-end gap-1 align-items-center"/></span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Choose your Delivery Location
            <h6>
            
              Enter your address and we will specify the offer for your area.
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
              
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Your Area"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Select a Location</Form.Label>
              <ListGroup>
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Alabama{" "}
                  <Badge bg="primary" pill >
                    Min: $130
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Arizona Min:
                  <Badge bg="primary" pill>
                    Min: $150
                  </Badge>
                </ListGroup.Item>{" "}
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  California
                  <Badge bg="primary" pill>
                    Min: $110
                  </Badge>
                </ListGroup.Item>{" "}
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Colorado
                  <Badge bg="primary" pill>
                    Min: $140
                  </Badge>
                </ListGroup.Item>{" "}
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Florida
                  <Badge bg="primary" pill>
                    Min: $160
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LocationBar;
