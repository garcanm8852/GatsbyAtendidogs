
import React from "react";
import separador from "../IMG/Separador.png";
import estetoscopio from "../IMG/estetoscopio.png";
import peluqueria from "../IMG/Peluqueria.png";
import tienda from "../IMG/tienda.png";
import contacto from "../IMG/contacto.png";
import localizacion from "../IMG/localizacion.png";
import redessociales from "../IMG/redessociales.png";
export default (props) => (
    <div className="container sept-t-50">

        <div className="row sep-t-50">
            <div className="col-md-12 titulo">NUESTROS SERVICIOS</div>
        </div>
        <div className="row separador"><img src={separador} className="img-100 sep-t-50" alt="" /></div>
        <div className="row sep-t-50 justify-content-between">
            <div className="col-md-3 sep-b-responsive-75">
                <img src={estetoscopio} alt="" className="img-50 block img-center" />
                <p className="block titulo sep-t-50">VETERINARIA</p>
                <p className="text-justify sep-t-25">Nuestro servicio de veterinaria atenderá a todas las posibles consultas de su mascota además de un diagnóstico completo.</p>
                <a className="button sep-t-25" href="./veterinaria.html">Ir a Veterinaria</a>
            </div>
            <div className="col-md-3 sep-b-responsive-75">
                <img src={peluqueria} alt="" className="img-50 block img-center" />
                <p className="block titulo sep-t-50">PELUQUERÍA</p>
                <p className="text-justify sep-t-25">Nuestro servicio de baño y peluquería dejará a tu mascota totalmente limpia y fresca.</p>
                <a className="button sep-t-25" href="./peluqueria.html">Ir a Peluquería</a>
            </div>
            <div className="col-md-3">
                <img src={tienda} alt="" className="img-50 block img-center" />
                <p className="block titulo sep-t-50">TIENDA</p>
                <p className="text-justify sep-t-25">Nuestro servicio de tienda online te ayudará a comprar los productos alimenticios, juguetes, camas y más para todo tipo de mascotas.</p>
                <a className="button sep-t-25" href="./tienda.html">Ir a Tienda</a>

            </div>
        </div>
        <div className="row sep-t-50">
            <div className="col-md-12 titulo">DATOS DE CONTACTO</div>
        </div>
        <div className="row separador"><img src={separador} className="img-100 sep-t-50" alt="" /></div>
        <div className="row sep-t-50 justify-content-between">
            <div className="col-md-3 sep-b-responsive-75">
                <img src={contacto} alt="" className="img-50 block img-center" />
                <p className="block titulo sep-t-50">CONTACTO</p>
                <p className="text-center sep-t-25">Telf. 605 58 12 94 <br /> clinicaatendidogs@gmail.com</p>
            </div>
            <div className="col-md-3 sep-b-responsive-75">
                <img src={localizacion} alt="" className="img-50 block img-center" />
                <p className="block titulo sep-t-50">LOCALIZACIÓN</p>
                <p className="text-center sep-t-25">Avenida Valdecarretera, Número 6, Rota, Cádiz 11520</p>
                <a className="button sep-t-25" target="_blank" href="https://goo.gl/maps/tNfR4o56xr8Sz2d27">Ver en Google Maps</a>
            </div>
            <div className="col-md-3">
                <img src={redessociales} alt="" className="img-50 block img-center" />
                <p className="block titulo sep-t-50">REDES SOCIALES</p>
                <p className="text-center sep-t-25"> <i className="fa fa-facebook-square iconos">
                </i><a href="#" className="links">Facebook</a>
                    <br />
                    <i className="fa fa-instagram iconos"></i><a href="#" className="links">Instagram</a></p>
            </div>
        </div>
        <div className="row justify-content-center sep-t-50">
            <div className="col-md-12">
                <p className="message text-center">Contacta con nosotros y un veterinario experto atenderá las necesidades de tu mascota.</p>
                <a className="button sep-t-50 f-24" href="./cita-previa.html">Contactar</a>

            </div>
        </div>
    </div>

);