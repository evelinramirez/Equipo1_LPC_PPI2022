import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';


function InicioL() {
  return (

    <div className="row pt-5 " style={{ backgroundColor: "#CCF9FF" }}>
      <div className="mx-auto col-md-8 text-center">
      
        <div className="p-3">
          <h1 className="encabezado text fw-bold">Termina tu perfil y agrega a tu mascota.</h1>
          <Link to="/editarmascota">
            <div class="d-grid gap-2 col-6 mx-auto pb-1">
              <button class="btn btn-primary " type="button">Añadir mascota</button>
            </div>
          </Link>
          <Link to="/editarperfil">
            <div class="d-grid gap-2 col-6 mx-auto pb-1">
              <button class="btn btn-primary " type="button">Agregar cédula</button>
            </div>
          </Link>
          <Link to="/editarperfil">
            <div class="d-grid gap-2 col-6 mx-auto pb-1">
              <button class="btn btn-primary " type="button">Agregar teléfono</button>
            </div>
          </Link>
          <h1>Evelin Ramirez</h1>
          <div class="card pd-3">
            <img src="" alt="" />
            <div class="card-body">
              <Link to="/editarperfil">
                <div class="d-grid gap-2 col-6 mx-auto pb-1">
                  <button class="btn btn-primary " type="button">Editar perfil</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h1>Mi mascota</h1>
        <div class="card pd-3 mb-5">
            <img src="" alt="" />
            <div class="card-body">
              <Link to="/editarmascota">
                <div class="d-grid gap-2 col-6 mx-auto pb-1">
                  <button class="btn btn-primary " type="button">Añadir mascota</button>
                </div>
              </Link>
            </div>
          </div>
        
        <div class="card mb-5 py-3 ">
          <div class="card-body">
            <p>Aún no has añadido una tarjeta de crédito.</p>
            <Link to="/tarjeta">
                <div class="d-grid gap-2 col-6 mx-auto pb-1">
                  <button class="btn btn-primary " type="button">Agregar tarjeta de crédito</button>
                </div>
              </Link>
          </div>
        </div>
      </div>


    </div>





  );
}
export default InicioL;