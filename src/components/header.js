import React from "react";

import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import * as headerStyles  from "../styles/header.module.css";
import logo from "../img/atendidogs-4.png";

export default (props) => (
    <Navbar bg="light" expand="lg" className="justify-content-center">
        <Navbar.Brand href="." className={headerStyles.header} >
        <img src={logo} alt="Logo Clinica Veterinaria Atendidogs" className={headerStyles.logo}/>
        <span className={headerStyles.blue1}>Atendidogs</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href=".">Inicio</Nav.Link>
                <Nav.Link href="#link">Equipo</Nav.Link>
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                    <NavDropdown.Item href=".">Servicios Principales</NavDropdown.Item>
                    <NavDropdown.Item href=".">Veterinaria</NavDropdown.Item>
                    <NavDropdown.Item href=".">Peluquería</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href=".">Adopción</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href=".">Instalaciones</Nav.Link>
                <Nav.Link href=".">Tienda</Nav.Link>
                <NavDropdown title="Contáctanos" id="basic-nav-dropdown">
                    <NavDropdown.Item href=".">Datos de contacto</NavDropdown.Item>
                    <NavDropdown.Item href=".">Cita Previa</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);