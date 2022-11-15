import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';

function Servicio() {
    return (
        <div className="fondoservicio pt-5 p-2">
            <div class="row pt-3 row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div className="text-center pb-4" style={{ color: "white" }}>
                        <h1 >Servicios</h1>
                        <hr className="mx-auto" width={150} />
                    </div>


                    <div class="card">

                        <div class="card-body">
                            <h6 className="text-center" style={{ color: "#898989" }}><small>SLEEPOVER</small></h6>
                            <p class="card-text">Reserva hospedaje para tu mascota en casa de otro amante de los animales que lo cuidará como tu lo harías.<Link className="nav-link active" to="/sleepover" style={{ color: "#00C6FF" }}>Ver más...</Link></p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">

                        <div class="card-body">
                            <h6 className="text-center" style={{ color: "#898989" }}><small>DOG WALKER</small></h6>
                            <p class="card-text">Reserva paseos para tu perro de forma inmediata en el momento que lo necesites.<Link className="nav-link active" to="/paquetesypaseos" style={{ color: "#00C6FF" }}>Ver más...</Link></p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">

                        <div class="card-body">
                        <h6 className="text-center" style={{ color: "#898989" }}><small>DAY CARE</small></h6>
                            <p class="card-text">Deja a tu mascota en casa de uno de nuestros cuidadores las horas que necesites durante el dia.<Link className="nav-link active" to="/daycare" style={{ color: "#00C6FF" }}>Ver más...</Link></p>
                        </div>
                    </div>
                </div>
                  
            </div>
        </div>

    );
}
export default Servicio;