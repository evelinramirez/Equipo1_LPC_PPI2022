import React from "react";
import { Link } from 'react-router-dom';


function Comprarpl() {
    return (
        <div className="container">
            <div className="row">
                <div className="mx-auto text-center py-2 pt-5 mt-5">
                    <h1>¡Reserva tus paseos fácil y rápido!</h1>
                    <p>Las mascotas no son todo en la vida pero ellas las complementas.</p>
                </div>
            </div>
            <div className="container pb-3">
                <div className="mx-auto" style={{ maxWidth: "500px" }}>

                    <form class="row g-3" action="homeL" method="get">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Quiero paseos para:</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Coloca a tu mascota" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Recoge a mi mascota en:</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Campo requerido" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Cuidad</label>
                            <select id="inputState" class="form-select">
                                <option selected>Medellin</option>
                                <option>Bogotá</option>
                                <option>Chía</option>
                                <option>Cali</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Quiero un paseo que dure:</label>
                            <select id="inputState" class="form-select">
                                <option selected></option>
                                <option>1 hora</option>
                                <option>2 horas</option>
                                <option>3 horas</option>
                            </select>
                        </div>

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Quiero programar mi paseo para:</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Quiero que lo recojan a las:</label>
                            <div class="card">
                                <div class="card-body" style={{ color: "#FF0000" }}>
                                    Los paseos se deben reservar con un minimo de 4 horas antes de la hora de inicio.
                                </div>
                                <select id="inputState" class="form-select">
                                    <option selected></option>
                                    <option>6:00 AM</option>
                                    <option>7:00 AM</option>
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                    <option>5:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Déjanos tus recomendaciones:</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Opcional!" />
                        </div>
                        <Link to="/buscarniñeral">
                            <div class="d-grid gap-2 col-6 mx-auto pb-1">
                                <button class="btn btn-primary " type="button">BUSCAR NIÑERA</button>
                            </div>
                        </Link>
                    </form>

                </div>

            </div>
        </div>




    );
}
export default Comprarpl;