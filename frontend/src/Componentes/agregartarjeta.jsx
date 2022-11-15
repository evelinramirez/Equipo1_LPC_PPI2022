import React from "react";


function Editartar() {
  return (
    <div className="fondoregistrarse container pt-5 mt-3">
      <div className="row">
      </div>
      <div className="card">
      <div className="container pb-3 mt-5">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <h1> <small>Agrega nueva tarjeta</small> </h1>
          <form class="row g-3" action="homeL" method="get">
            <div class="col-md-6 pt-5">
              <label for="inputEmail4" class="form-label">Numero de la tarjeta</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Fecha de expedición</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Dirección de la facturación</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="" />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Teléfono</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="" />
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary">Añadir tarjeta</button>
            </div>
          </form>
        </div>
      </div>
      </div> 
    </div>
  );
}
export default Editartar;