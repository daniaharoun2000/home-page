import Container from "react-bootstrap/Container";
import logo from "../images/1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import LocationBar from "./LocationBar";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Section2() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    console.log("window", window.scrollY, fix);
    if (window.scrollY >= 43) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <div
      className={
        fix
          ? "bg-white py-3 position-fixed top top-0 w-100 shadow-sm zindex-fixed-nav"
          : "bg-white py-3"
        //  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      }
    >
      <Container className="section-2">
        <Row className="justify-content-between  align-items-center">
          <Col lg={2} xs={6}>
            <img
              src={logo}
              alt="logo"
              width={160}
              mw-100
              className="align-items-center"
            />
          </Col>
          <Col lg={8} className="d-none d-lg-block">
            <Row>
              <Col xs={4}>
                <LocationBar />
              </Col>
              <Col xs={7}>
                <div className="text-white  text-overflow-1 d-sm-none d-md-block">
                  <InputGroup>
                    <Form.Control
                      placeholder="I'm searching for...."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button id="button-addon2" className="searchicon">
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
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </Button>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Col>
          {/* d-xl-none */}
          <Col lg={2} xs={4}>
            <ul className="unstiled-list m-0 p-0 d-flex justify-content-between  align-items-center">
              <li className="m-0 d-xxl-none d-xl-none d-xxl-block mx-1">  
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
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg></li>
                      <li className="m-0">
                <span className="m-0 d-xxl-none d-xl-none d-xxl-block mx-1">|</span>
              </li>
              <li className="m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="feather feather-phone-call"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </li>
              <li className="m-0">
                <span>|</span>
              </li>
              <li className="m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </li>
              <li className="m-0">
                <span>|</span>
              </li>
              <li className="m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </li>
              <li className="m-0">
                <span>|</span>
              </li>
              <li className="m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section2;
