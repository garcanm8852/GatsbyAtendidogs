import React from "react";
import logo from "../IMG/atendidogs-4.png";

export default (props) => (
    <nav className="navbar navbar-expand-lg navbar-light
    justify-content-center">
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="./index.html">
                <img src={logo} width="30" height="30" alt="Clínica Veterinaria Atendidogs" loading="lazy"/> Clínica Veterinaría
                <span>Atendidogs</span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-right">
                    <li className="nav-item">
                        <a className="nav-link active" alt="Inicio" href="./index.html">Inicio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" alt="Equipo" href="./equipo.html">Equipo</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" alt="Servicios" href="./servicios.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="./servicios.html" alt="Servicios Principales">Servicios Principales</a>
                            <a className="dropdown-item" href="./veterinaria.html" alt="Veterinaria">Veterinaria</a>
                            <a className="dropdown-item" href="./peluqueria.html" alt="Peluqueria">Peluquería</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="./adopcion.html" alt="Adopcion">Adopción</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./instalaciones.html" alt="Instalaciones">Instalaciones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./tienda.html" alt="Tienda">Tienda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./noticias.html" alt="Noticias">Noticias</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="./contacto.html" alt="Contáctanos" id="navbarDropdownContacto" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contáctanos
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownContacto">
                            <a className="dropdown-item" href="./contacto.html" alt="Contacto">Datos de contacto</a>
                            <a className="dropdown-item" href="./cita-previa.html" alt="Cita Previa">Cita Previa</a>
                        </div>
                    </li>
                </ul>
                <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                    <li className="dropdown order-1">
                        <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle" alt="Iniciar Sesión">Iniciar Sesión <span
                                className="caret"></span></button>
                        <ul className="dropdown-menu dropdown-menu-right mt-2">
                            <li className="px-3 py-2">
                                <form className="form" role="form">
                                    <div className="form-group">
                                        <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" required="" alt="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input id="passwordInput" placeholder="Contraseña" className="form-control form-control-sm" type="text" required="" alt="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block" alt="Iniciar Sesión">Iniciar Sesión</button>
                                    </div>
                                    <div className="form-group text-center">
                                        <small><a href="./login.html" data-toggle=""
                                                data-target="#modalPassword" alt="¿Olvidó su contraseña?">¿Olvidó su contraseña?</a></small>
                                    </div>
                                    <div className="form-group text-center">
                                        <small><a href="./login.html" data-toggle="" data-target="#modalPassword" alt="¿No
                                            tienes cuenta? Registrarse">¿No
                                                tienes cuenta? Registrarse</a></small>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </nav>
);