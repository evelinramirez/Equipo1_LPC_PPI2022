import React from "react";
import { Link } from 'react-router-dom';

function Paquetesl() {
  return (
    <div className="fondopaseo container  pt-5 mt-5 ">
      <h1 className="pb-5" style={{color:"white"}}><b>Paseos personalizados y seguros con verdaderos amantes de perros</b> </h1>
      <div class="card mb-3" >
        <div class="card-body">
          <h4 class="card-title" style={{ color: "#0064A5" }}><strong>Paseos por horas</strong></h4>
          <p class="card-text"> 1 hora - $10.500</p>
          <p class="card-text">2 hora - $16.000</p>
          <p class="card-text">3 hora - $26.500</p>
          <p class="card-text"><small>*Maximo 4 perros por paseo</small> </p>
          <p class="card-text"><small>*Las horas son seguidas</small> </p>
          <Link to="/comprarl">
            <div class="d-grid gap-2 col-6 mx-auto pb-1">
              <button class="btn btn-primary" type="button">COMPRAR</button>
            </div>
          </Link>
        </div>
      </div>
      <div class="card mb-3" >
        <div class="card-body">
          <h4 class="card-title" style={{ color: "#0064A5" }}><strong>Paquetes de 12 paseos</strong></h4>
          <p class="card-text"> 1 hora - $121.000</p>
          <p class="card-text">2 hora - $184.000</p>
          <p class="card-text"><small>*Maximo 4 perros por paseo</small> </p>
          <p class="card-text"><small>*Las horas son seguidas</small> </p>
          <Link to="/comprarl">
            <div class="d-grid gap-2 col-6 mx-auto pb-1">
              <button class="btn btn-primary" type="button">COMPRAR</button>
            </div>
          </Link>
        </div>
      </div>
      <div class="card mb-3" >
        <div class="card-body">
          <h4 class="card-title" style={{ color: "#0064A5" }}><strong>Paquetes de 20 paseos</strong></h4>
          <p class="card-text"> 1 hora - $190.000</p>
          <p class="card-text">2 hora - $296.000</p>
          <p class="card-text">3 hora - $390.000</p>
          <p class="card-text"><small>*Maximo 4 perros por paseo</small> </p>
          <p class="card-text"><small>*Las horas son seguidas</small> </p>
          <Link to="/comprarl">
            <div class="d-grid gap-2 col-6 mx-auto pb-1">
              <button class="btn btn-primary" type="button">COMPRAR</button>
            </div>
          </Link>
        </div>
      </div>




    </div>
  );
}
export default Paquetesl;