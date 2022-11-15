import React from "react";
import { Link } from 'react-router-dom';
import niñera1 from '../Imagenes/niñera1.jpg';
import perfil from '../Imagenes/perfil.jpg';
import perfil1 from '../Imagenes/perfil1.jpg';
import gatos from '../Imagenes/gatos.jpg';
import mi from '../Imagenes/mi.jpg';
import casa from '../Imagenes/casa.png';
import dog from '../Imagenes/dog.png';
import good from '../Imagenes/good.png';
import noche from '../Imagenes/noche.png';
import arbol from '../Imagenes/arbol.png';
import sol from '../Imagenes/sol.png';
import parque from '../Imagenes/parque.png';
import cama from '../Imagenes/cama.png';
import medicamento from '../Imagenes/medicamento.png';
import entrenar from '../Imagenes/entrenar.png';
import ducha from '../Imagenes/ducha.png';




function Perfil1() {
    return (
        <div className="container pt-5 mt-3">
            <div class="card">
                <div class="card-body">
                    <div className="row">
                        <div className="col"><img src={niñera1} alt="" width={70} /></div>
                        <div className="col">
                            <h4> <small>Manuela Reyes</small></h4>
                            <p> <small>Las palmas</small> </p>
                        </div>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner pt-5">
                            <div class="carousel-item active">
                                <img src={gatos} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={perfil1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={perfil} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <h3 className="pt-5">Descripción</h3>
                    <p>Soy una persona amante a la naturaleza y a los animales.soy tranquila,amable, me gusta viajar y salir a caminar con mi perrita. Estoy capacitada de cuidar y albergar perritos en mi casa con todo el amor y cuidado.</p>

                    <div className="row">
                        <h5>Mis mascotas</h5>
                        <div className="col"><img src={mi} alt="" width={70} /></div>
                        <div className="col">
                            <h4> <small>Toto</small></h4>
                            <p> <small>1 Año</small> </p>
                        </div>
                    </div>

                    <h4 className="pt-5">Mascotas permitidas</h4>
                    <div className="card">
                        <div className="col" ><img src={casa} alt="" width={20} />   Para DayCare</div>
                        <div className="col pt-3" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 0 - 10 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 11 - 25 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 26 - 46 Kg</div>
                        <div className="col pt-4"><img src={good} alt="" width={20} />Si recibo gatos</div>
                        <div className="col pt-1"><img src={good} alt="" width={20} />Si recibo adultos mayores</div>
                        <div className="col pt-1"><img src={good} alt="" width={20} />Si recibo cachorros</div>
                    </div>

                    <div className="card mt-4">
                        <div className="col  " ><img src={noche} alt="" width={20} />   Para Sleepover</div>
                        <div className="col pt-3" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 0 - 10 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 11 - 25 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 26 - 46 Kg</div>
                        <div className="col pt-4"><img src={good} alt="" width={20} />Si recibo gatos</div>
                        <div className="col pt-1"><img src={good} alt="" width={20} />Si recibo adultos mayores</div>
                        <div className="col pt-1"><img src={good} alt="" width={20} />Si recibo cachorros</div>
                    </div>

                    <h5 className="pt-4">Caracteristicas del domicilio</h5>
                    <div className="col pt-3"><img src={arbol} alt="" width={25} /> Patio</div>
                    <div className="col pt-1"><img src={sol} alt="" width={25} /> Balcón</div>
                    <div className="col pt-1"><img src={parque} alt="" width={25} /> Parques cercanos</div>
                    <div className="col pt-1"><img src={cama} alt="" width={25} /> Mascotas sobre muebles</div>
                    <div className="col pt-1"><img src={medicamento} alt="" width={25} /> Sé dar medicamentos</div>
                    <div className="col pt-1"><img src={entrenar} alt="" width={25} /> Experiencia entrenando</div>
                    <div className="col pt-1"><img src={ducha} alt="" width={25} /> Servicio de baño</div>

                    <div className="card mt-3">
                        <h3><small>Tarifas:</small></h3>
                        <li>Sleepover: $38.000 por noche</li>
                        <li>DayCare: $30.000 por noche</li>
                        <p className="pt-4"><small>*Estas tarifas no invluyen servicios adicionales</small></p>
                        <h4>Disponibilidad Sleepover</h4>
                        <li>Entre semana</li>
                        <li>Fines de semana</li>
                        <h4 className="pt-3">Disponibilidad DayCare</h4>
                        <li>Entre semana</li>
                        <li>Fines de semana</li>
                        <li>Mañana</li>
                        <li>Tarde</li>
                        <form class="row g-3 pt-4" action="homeL" method="get">
                            <Link to="/iniciarsesion">
                                <div class="d-grid gap-2 col-11 mx-auto pb-1">
                                    <button class="btn btn-primary " type="button">Reserva con tu usuario</button>
                                </div>
                            </Link>
                            <Link to="/registrarse">
                                <div class="d-grid gap-2 col-11 mx-auto pb-1 pt-3">
                                    <button class="btn btn-primary " type="button">Crea una cuenta</button>
                                </div>
                            </Link>
                            
                        </form>
                    </div>





                </div>
            </div>
        </div>
    );
}
export default Perfil1;