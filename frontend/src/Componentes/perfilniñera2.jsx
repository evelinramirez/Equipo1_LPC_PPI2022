import React from "react";
import { Link } from 'react-router-dom';
import niñera from '../Imagenes/niñera.jfif';
import casa from '../Imagenes/casa.png';
import dog from '../Imagenes/dog.png';
import good from '../Imagenes/good.png';
import noche from '../Imagenes/noche.png';
import nofuma from '../Imagenes/nofuma.png';
import sol from '../Imagenes/sol.png';
import parque from '../Imagenes/parque.png';
import cama from '../Imagenes/cama.png';
import medicamento from '../Imagenes/medicamento.png';





function Perfil2() {
    return (
        <div className="container pt-5 mt-3">
            <div class="card">
                <div class="card-body">
                    <div className="row">
                        <div className="col"><img src={niñera} alt="" width={70} /></div>
                        <div className="col">
                            <h4> <small>Sandra Perez</small></h4>
                            <p> <small>San Cristobal</small> </p>
                        </div>
                    </div>
                    <h3 className="pt-5">Descripción</h3>
                    <p>Hola! Soy Sandra Perez, Tengo 22 años, soy estudiante de la Universidad de Antioquia, Soy de Medellin, siempre he tenido un amor profundo por los animales, pero actualmente no tengo mascotas por cuestiones de tiempo, me considero muy responsable y muy seria con mi trabajo, me gusta pasar tiempo con cualquier tipo de perro ya que es mi animale favorito. Con los huéspedes, haría la actividad que más se acomode a cada uno ya sea salir a caminar o juegos en casa, siempre teniendo en cuenta el bienestar de ellos.</p>

                

                    <h4 className="pt-5">Mascotas permitidas</h4>
                    <div className="card">
                        <div className="col" ><img src={casa} alt="" width={20} />   Para DayCare</div>
                        <div className="col pt-3" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 0 - 10 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 11 - 25 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 26 - 46 Kg</div>
                        <div className="col pt-4"><img src={good} alt="" width={20} />Si recibo adultos mayores</div>
                        <div className="col pt-1"><img src={good} alt="" width={20} />Si recibo cachorros</div>
                    </div>

                    <div className="card mt-4">
                        <div className="col  " ><img src={noche} alt="" width={20} />   Para Sleepover</div>
                        <div className="col pt-3" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 0 - 10 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 11 - 25 Kg</div>
                        <div className="col" style={{ color: "#676767" }}><img src={dog} alt="" width={15} /> 26 - 46 Kg</div>
                        <div className="col pt-4"><img src={good} alt="" width={20} />Si recibo adultos mayores</div>
                        <div className="col pt-1"><img src={good} alt="" width={20} />Si recibo cachorros</div>
                    </div>

                    <h5 className="pt-4">Caracteristicas del domicilio</h5>
                    <div className="col pt-3"><img src={nofuma} alt="" width={25} /> No fumador</div>
                    <div className="col pt-1"><img src={sol} alt="" width={25} /> Balcón</div>
                    <div className="col pt-1"><img src={parque} alt="" width={25} /> Parques cercanos</div>
                    <div className="col pt-1"><img src={cama} alt="" width={25} /> Mascotas sobre muebles</div>
                    <div className="col pt-1"><img src={medicamento} alt="" width={25} /> Sé dar medicamentos</div>
                    

                    <div className="card mt-3">
                        <h3><small>Tarifas:</small></h3>
                        <li>Sleepover: $43.000 por noche</li>
                        <li>DayCare: $35.000 por noche</li>
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
export default Perfil2;