import React from "react";
import balanza from "../IMG/balanza.png";
import contrato from "../IMG/contrato.png";

export default (props) => (
    <div className="container sep-t-50">
        <div className="row justify-content-between text-center">
            <div className="col-md-5 sep-b-responsive-50">
                <a href="./Aviso-Legal.html">
                    <img src={balanza} alt="" className="img-25 block img-center sep-b-25"/>
                </a>
                <a href="./Aviso-Legal.html" className="enlace">AVISO LEGAL</a>
            </div>
            <div className="col-md-5">
                <a href="./Politica-de-cookies.html">
                    <img src={contrato} alt="" className="img-25 block img-center sep-b-25"/>
                </a>
                <a href="./Politica-de-cookies.html" className="enlace">POLÍTICA DE COOKIES</a>
            </div>
        </div>


    </div>
);