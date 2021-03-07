import React from "react";
import separador from "../IMG/Separador.png";

export default (props) => (
    <div>
        <div className="container">
            <div className="row sep-t-50">
                <div className="col-md-12 titulo">¿QUIÉN SOMOS?</div>
            </div>
            <div className="row sep-t-50 justify-content-between h-250 sep-b-responsive-75">
                <div className="col-md-5 text-justify v-align-center">Clínica veterinaria Atendidogs es la clínica veterinaria más innovadora de toda la provincia de Cádiz. Contamos con las mejores tecnologías para el cuidado tanto de las mascotas domésticas como animales exóticos de todo tipo. Nuestro deseo
                es que cada mascota que salga de nuestra clínica esté feliz y totalmente sana para volver con su familia.
        </div>
                <div className="col-md-5 seccion1-1-img"></div>
            </div>
            <div className="row">
                <img src={separador} className="img-100 sep-t-50" alt=""></img>
            </div>
            <div className="row sep-t-50">
                <div className="col-md-12 titulo">SERVICIOS</div>
            </div>
            <div className="row sep-t-50 justify-content-between h-250 sep-b-responsive-75">
                <div className="col-md-5 seccion1-2-img"></div>
                <div className="col-md-5 text-justify v-align-center">Disponemos de los avances y las técnicas de diagnóstico y tratamiento más actuales, y la garantía de los mejores veterinarios en la atención de tu mascota. Así como el servicio de baño y peluquería desde los más pequeños a los más grandes.</div>
            </div>
            <div className="row separador">
                <img src={separador} className="img-100 sep-t-50"></img>
            </div>

            <div className="row sep-t-50">
                <div className="col-md-12 titulo">INSTALACIONES</div>
            </div>
            <div className="row sep-t-50 justify-content-between h-250 sep-b-responsive-75">
                <div className="col-md-5 text-justify v-align-center">Nuestro centro veterinario de Rota cuenta con infraestructuras y especializaciones óptimas para dar servicio a toda la provincia de Cádiz y todas las ciudades cercanas.
        </div>
                <div className="col-md-5 seccion1-3-img"></div>
            </div>
        </div>
        <div className="container-fluids sep-t-50 h-350 banner-1-img">
            <div className=" text-center font-banner v-align-center f-24 h-350 p-center">
                Un amplio equipo de profesionales especialistas, técnicas avanzadas y modernas estructuras para atender de manera segura y eficaz a los que más quieres. Cuidamos lo más importante, su salud y bienestar.
    </div>
        </div>
    </div>
);