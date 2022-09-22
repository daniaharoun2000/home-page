import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import lines from '../images/lines.svg';

function OffcanvasNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="badge" onClick={handleShow}>
        <img src={lines}  alt="logo"
              width={15}
              mw-100/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='shadow-sm zindex-fixed-nav'>
          <Offcanvas.Title><h5 className='text-primary '>Menu</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
       
      
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasNavbar;