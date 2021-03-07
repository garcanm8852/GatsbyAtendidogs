import React from "react";
import spain from "../IMG/spain.png";
import france from "../IMG/france.png";
import portugal from "../IMG/portugal.png";
import english from "../IMG/uk.png";

export default (props) => (
    <footer className="page-footer font-small blue sep-t-50">
        <div className="footer-copyright text-center text-footer">
            ©2020 Clínica Veterinaria Atendidogs - Todos los derechos reservados - Avenida Valdecarretera, Número 6, Rota, Cádiz 11520 - Telf. 605 58 12 94 - clinicaatendidogs@gmail.com
            <br/>
            <div className="countries">
                <div className="country">
                    <img src={spain} className="img-country" alt=""/>
                    <a href="">Español</a>
                </div>
                <div className="country">
                    <img src={france} className="img-country" alt=""/>
                    <a href="">Français</a>
                </div>
                <div className="country">
                    <img src={portugal} className="img-country" alt=""/>
                    <a href="">Português</a>
                </div>
                <div className="country">
                    <img src={english} className="img-country" alt=" "/>
                    <a href="">English</a>
                </div>
            </div>
        </div>

    </footer>
);