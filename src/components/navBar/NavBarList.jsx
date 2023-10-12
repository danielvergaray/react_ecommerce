import React from "react";
import styles from "../../style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../components/imagenes/logo.png";

const NavBarList = ({ opciones, logged, userData, cart }) => {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className={styles.navbar}>
        <Navbar.Brand href="#">
          <img className={styles.navBarLogo} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
            {opciones.map((opcion, index) => (
              <Nav.Link >
                <NavLink key={index} className={({ isActive }) => isActive ? `${styles.linkActive}` : `${styles.lista}`} to={opcion}>
                  {index === 0 ? "Inicio" : opcion}


                </NavLink>

              </Nav.Link>
            ))}
            {!logged ? (<NavLink className={styles.nombreUsuario} to="/user" >
              Iniciar sesión
            </NavLink>) :
              <NavLink className={styles.nombreUsuario} to="/user" >
                <p><CgProfile /></p>
                <p>{userData.user}</p>

              </NavLink>}
              {cart.length>0 ? (<NavLink to="/carrito"><FaShoppingCart />
        <li className={styles.lista}></li></NavLink>): <NavLink to="/carritoVacio"><FaShoppingCart />
        <li className={styles.lista}></li></NavLink>}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" >
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  );
};

{/* <div className={styles.navbar}>
      <ul className={styles.contenedor}>
        {opciones.map((opcion, index) => (
          <NavLink key={index} className={({ isActive }) => isActive ? `${styles.linkActive}` : `${styles.lista}`} to={opcion}>
            {index === 0 ? "Inicio" : opcion}
          </NavLink>
        ))}
        
        {!logged ? (<NavLink className={styles.nombreUsuario} to="/user" >
          Iniciar sesión
        </NavLink>) : 
        <NavLink className={styles.nombreUsuario} to="/user" > 
        <p><CgProfile /></p>
        <p>{userData.user}</p>
          
        </NavLink>}

        {cart.length>0 ? (<NavLink to="/carrito"><FaShoppingCart />
        <li className={styles.lista}></li></NavLink>): <NavLink to="/carritoVacio"><FaShoppingCart />
        <li className={styles.lista}></li></NavLink>}
        
        
      </ul>
    </div> */}


export default NavBarList;
