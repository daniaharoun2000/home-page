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
          <Col lg={8} className="d-none d-lg-block ">
            <Navbar>
              <Navbar.Toggle />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="  gap-3 align-items-center  justify-content-center navsection3"
              >
                <NavDropdown id="nav-dropdown-dark-example" title="Home" className="navdrop">
              
                    <div class="row-fluid">
                      <ul class="media-list span4">
                        <li class="media">
                          <div class="media-body">
                            <ul class="unstyled">
                              <li>
                                <a href="#" className="dropdownitem">
                                  <img
                                    src="	https://themes.pixelstrap.com/fastkart/assets/images/theme/1.jpg"
                                    alt="logo"
                                   
                                  />
                                  <span className="text-primary dropdownspan">KartShop</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                 
                                  <img
                                    src="  https://themes.pixelstrap.com/fastkart/assets/images/theme/2.jpg"
                                    alt="logo"
                                  />
                                  <span className="text-primary">SweetShop</span>
                                </a>
                              </li>
                              <li>
                                <a href="#"><img
                      src="  	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                      alt="logo"
                    />
                    <span className="text-primary">Organic</span></a>
                              </li>
                              <li>
                                <a href="#"><img
                      src=" 	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                      alt="logo"
                    />
                    <span className="text-primary">SuperShop</span></a>
                              </li>
                              <li>
                                <a href="#"> <img
                      src=" https://themes.pixelstrap.com/fastkart/assets/images/theme/5.jpg"
                      alt="logo"
                    />
                    <span className="text-primary">Slicktech</span></a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                 
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Shop"
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
            
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    to="/contact"
                    as={NavLink}
                  >
                     <div class="row-fluid">
                      <ul class="media-list span4">
                        <li class="media">
                          <div class="media-body">
                            <ul class="unstyled">
                              <Col xl={3}> 
                              <div class="dropdown-column col-xl-3">
                                                            <h5 class="dropdown-header">Daily Vegetables</h5>
                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                &amp; Brinjals</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>

                                                            <a href="shop-left-sidebar.html" class="dropdown-item">Chilies, Garlic</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Herbs
                                                                &amp; Sprouts</a>

                                                            <a href="demo-personal-portfolio.html" class="dropdown-item">Lettuce &amp; Leafy</a>
                                                        </div>
                              </Col>
                             
                              <Col xl={3}> <div class="dropdown-column col-xl-3">
                                                            <h5 class="dropdown-header">Baby Tender</h5>
                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                &amp; Brinjals</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Chilies, Garlic</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Potatoes &amp; Tomatoes</a>

                                                            <a href="shop-left-sidebar.html" class="dropdown-item">Peas
                                                                &amp; Corn</a>
                                                        </div></Col>   
                                                        <Col xl={3}> <div class="dropdown-column col-xl-3">
                                                            <h5 class="dropdown-header">Exotic Vegetables</h5>
                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Asparagus &amp; Artichokes</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Avocados &amp; Peppers</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Zucchini</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Celery, Fennel &amp; Leeks</a>

                                                            <a class="dropdown-item" href="shop-left-sidebar.html">Chilies &amp; Lime</a>
                                                        </div></Col>
                             
                                                        <div class="dropdown-column dropdown-column-img col-3"></div>
                
                  
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </NavDropdown.Item>
              
            

                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Blog"
               
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