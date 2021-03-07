import React from "react";
import dog1 from "../IMG/dog-1-h550.png";
import dog2 from "../IMG/dog-2-h550.png";
import dog3 from "../IMG/dog-3-h550.png";
import equipo from "../IMG/equipo-h550.png";

export default (props) => (
    <div className="container-fluids">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={dog1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={dog2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={dog3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={equipo} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);