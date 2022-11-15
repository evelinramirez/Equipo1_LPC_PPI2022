import React from "react";




function Reserval() {
    return (
        <div className="container  pt-5 mt-5 mb-5">
            <div className="row">
                <h1 className="text-center fw-bold pt-3" style={{ color: "#0064A5" }}>¡Reserva tu servicio!</h1>

                <div className="card mt-5">
                    <div class="col-md-12">
                        <form class="row g-3" action="reservalista" method="get">
                            <label for="inputState" class="form-label">Para cuál mascota quiere reservar</label>
                            <select id="inputState" class="form-select">
                                <option selected></option>
                                <option></option>
                                <option></option>
                            </select>
                            <select id="inputState" className="form-select mt-2">
                                <option selected></option>
                                <option>Day Care</option>
                                <option>Sleepover</option>
                            </select>
                            <h5 className="mt-5"><small>Servicios adicionales</small></h5>
                            <p>*Recuerda que estos tiene un costo adicional al servicio que haz elegido</p>
                            <div class="col-md-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Recoge a mi mascota
                                    </label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Ingresa la dirección de recogida" />
                                </div>
                                <div className="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Servicio de baño para mi mascota
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Entrega mimascota en mi casa u otro lugar
                                    </label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Ingresa la dirección de entrega" />
                                </div>
                                <div className="form-floating mt-3">
                                    <p>Algún otro adicional</p>
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea"></label>
                                </div>
                                <div class="col-12 mt-3 mb-3 text-center">
                                    <button type="submit" class="btn btn-primary">Reservar Registro</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>

    );
}
export default Reserval;