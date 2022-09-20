import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import svgg from "../images/anglerighticon.svg";
function Section3() {
  return (
    <div className="bg-white py-2">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={2} xs={6}>
            <Dropdown className="mw-100 AllCategoriesButton">
              <Dropdown.Toggle
                variant="primary"
                id="dropdown-one"
                bsPrefix="p-2"
              >
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
                  className="AllCategoriesIcon"
                >
                  <line x1="17" y1="10" x2="3" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="3" y2="14"></line>
                  <line x1="17" y1="18" x2="3" y2="18"></line>
                </svg>
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Menu href="#/action-1">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                    alt=""
                    className="section3lesicon"
                  />
                  Vegetables & Fruit
                  <img
                    src={svgg}
                    className="angleicon  justify-content-end gap-1 align-items-center"
                  />
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={8} className="d-none d-lg-block">
            <Navbar>
              <Navbar.Toggle />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="text-overflow-1 d-flex gap-3 align-items-center  justify-content-center navsection3"
              >
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Home"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/"
                    activeClassName={classes.active}
                  >
                    <img
                      src="	https://themes.pixelstrap.com/fastkart/assets/images/theme/1.jpg"
                      alt="logo"
                    />
                    <span className={classes.cc}>KartShop</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <img
                      src="  https://themes.pixelstrap.com/fastkart/assets/images/theme/2.jpg"
                      alt="logo"
                    />
                    <span className={classes.cc}>SweetShop</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <img
                      src="  	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                      alt="logo"
                    />
                    <span className={classes.cc}>Organic</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    <img
                      src=" 	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                      alt="logo"
                    />
                    <span className={classes.cc}>SuperShop</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <img
                      src=" https://themes.pixelstrap.com/fastkart/assets/images/theme/5.jpg"
                      alt="logo"
                    />
                    <span className={classes.cc}>Slicktech</span>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Shop"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    Shop Category Slider
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Shop Category Sidebar{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Shop Banner{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Shop Left Sidebar
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.4">
                    Shop List
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.4">
                    Shop Right Sidebar
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.4">
                    Shop Top Filter
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Product"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    Product 4 Image
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Product Left Thumbnail
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.2">
                    Product Buttom Thumbnail
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Product Left
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Product Right Thumbnail
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Product Slider
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Product Sticky
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Mega Menue"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    c
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    c
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    c
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>

                  <img
                    src=" https://media.istockphoto.com/photos/colorful-fresh-organic-vegetables-picture-id882314812?k=20&m=882314812&s=612x612&w=0&h=xFxR3rfItTty2cxqCbeb4OLubh8rjHITdbz-kj56N9A="
                    alt="logo"
                  />
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Blog"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    Blog Detail
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Blog Grid
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Blog List
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Pages"
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                    activeClassName={classes.active}
                  >
                    404
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Checkout
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.4">
                    Coming Soon
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.4">
                    Compare
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Faq</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Order Success
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Order Tracking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">OTP</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Search</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    User Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Wishlist
                  </NavDropdown.Item>
                </NavDropdown>

                <Button className="contactbuttonsection3">Contact</Button>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col lg={2} xs={6}>
            <div className=" m-0 p-0 d-flex justify-content-end align-items-center">
              <Dropdown className=" m-0 p-0">
                <Dropdown.Toggle
                  className="DealTodaybutton d-inline text-center px-1"
                  id="dropdown-basic"
                  bsPrefix="p-2"
                >
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
                    className="DealTodayIcon mx-1"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span className="d-none d-lg-inline mx-1">Deal Today</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section3;
