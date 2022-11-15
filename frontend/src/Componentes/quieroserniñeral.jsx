import React from "react";
import perrito from '../Imagenes/perrito.jpg';
import mascota from '../Imagenes/mascota.jpg';
import gatos from '../Imagenes/gatos.jpg';


function Quieronl() {
    return(
        <div className="container pb-5 pt-5 mt-3">
            <div className="row">
                <h1>¡Descubre la forma más divertida de ganar dinero extra haciendo
                    felices a muchos peludos cerca de ti!</h1>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={mascota} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={perrito} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={gatos} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container pb-3">
                    <div className="mx-auto" style={{ maxWidth: "500px" }}>

                        <form class="row g-3" action="niñeral" method="get">
                            <div class="col-md-6 pt-5">
                                <label for="inputEmail4" class="form-label">Nombre</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Apellido</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Correo electónico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Teléfono</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">Repite una contraseña</label>
                                <input type="text" class="form-control" id="inputCity" placeholder="Ingresa tu contraseña" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Cuidad</label>
                                <select id="inputState" class="form-select">
                                    <option selected></option>
                                    <option>Medellín</option>
                                    <option>Bogotá</option>
                                    <option>Cali</option>
                                    <option>Chía</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">¡Quiero ser niñera!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
         
         
               
       
    );
}
export default Quieronl;