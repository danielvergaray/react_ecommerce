import React, { useContext, useState } from "react";
import styles from "../../style.module.css";
import { FaShoppingCart } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../components/imagenes/logoGameStation.png";
import CartContext from "../context/cartContext/CartContext";

const NavBarList = ({ opciones, logged, userData, cart }) => {
  const { calculoCuenta, productosTotales } = useContext(CartContext);

  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container  fluid className={styles.navbar}>
        <div className={styles.navBarLogoContainer} href="#">
          <NavLink to="/">
            <img className={styles.navBarLogo} src={logo} alt="Logo" />
          </NavLink>
        </div>
        <Navbar.Toggle style={{backgroundColor:"white"}} aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ padding: "0 30px", textAlign:"center" }} id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", padding: "10px 0px", textAlign:"center"}}
            navbarScroll
          >
            {opciones.map((opcion, index) => (
              <div key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.linkActive}` : `${styles.lista}`
                  }
                  to={opcion}
                >
                  
                  {opcion}
                </NavLink>
              </div>
            ))}
          </Nav>

          <div className={styles.carritoLoginContainer}>
            <div>
              {!logged ? (
                <NavLink className={styles.nombreUsuario} to="/user">
                  Iniciar sesión
                </NavLink>
              ) : (
                <NavLink className={styles.nombreUsuario} to="/user">
                  <p>
                    <CgProfile />
                  </p>
                  <p>{userData.user}</p>
                </NavLink>
              )}
            </div>

            <div className={styles.carritoContainer}>
              {cart.length > 0 ? (
                <NavLink to="/carrito">
                  <div className={styles.cantidadProductosCarrito}>
                    <FaShoppingCart />
                    <div className={styles.numeroDeProductosEnCarrito}>
                      <span>{productosTotales}</span>
                    </div>
                  </div>

                  <li className={styles.lista}></li>
                </NavLink>
              ) : (
                <NavLink to="/carritoVacio">
                  <div className={styles.cantidadProductosCarrito}>
                    <FaShoppingCart />
                    <div className={styles.numeroDeProductosEnCarrito}>
                      <span>{productosTotales}</span>
                    </div>
                  </div>
                  <li className={styles.lista}></li>
                </NavLink>
              )}
            </div>
          </div>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <ImSearch />
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarList;
