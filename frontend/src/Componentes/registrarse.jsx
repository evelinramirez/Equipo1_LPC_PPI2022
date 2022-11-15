import React from "react";


function Register() {
  return (
    <div className="fondoregistrarse container pt-5 mt-3">
      <div className="row">
        <div className="mx-auto text-center py-2">
          <h1>Registrarse</h1>
          <p>Las mascotas no son todo en la vida pero ellas las complementas.</p>
        </div>
      </div>
      <div className="card">
      <div className="container pb-3 mt-5">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>

          <form class="row g-3" action="homeL" method="get">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Nombre</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Apellidos</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">Departamento</label>
              <select id="inputState" class="form-select">
                <option selected></option>
                <option>Antioquia</option>
                <option>Magdalena</option>
                <option>Cundinamarca</option>
                <option>Santader</option>
                <option>Atlantico</option>
              </select>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Cuidad</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="Medellin" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Correo eletrónico</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="ejemplo@gmail.com" />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Ingresa una contraseña</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Ingresa tu contraseña" />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">Repite una contraseña</label>
              <input type="text" class="form-control" id="inputCity" placeholder="Ingresa tu contraseña" />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Registrarme</button>
            </div>
          </form>
        </div>
      </div>
      </div> 
    </div>
  );
}
export default Register;