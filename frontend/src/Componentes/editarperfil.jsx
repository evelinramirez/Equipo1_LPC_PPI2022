import React from "react";
import { Link } from 'react-router-dom';


function Editarper() {
    return (
        <div className="container pt-5 mt-3">
            <Link className="nav-link active" to="/homel" style={{ color: "#00C6FF" }}>Volver a mi perfil</Link>
            <div className="row">
                <div className="mx-auto  py-2">
                    <h1 className="pt-3">Modifica tus datos</h1>
                    <p className="" style={{ color: "#8F8F8F" }}>Si requieres modificar un dato que no está en el formulario, escríbenos a happyplace12293@gmail.com</p>
                    <div class="col-md-6 pt-3">
                        <label for="inputEmail4" class="form-label">Cédula de cuidadanía</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                        <p className="" style={{ color: "#FF0000" }}><small>Ingresa tu cédula</small></p>
                    </div>
                    <div class="col-md-6 pt-3">
                        <label for="inputEmail4" class="form-label">Celular</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                        <p className="" style={{ color: "#FF0000" }}><small>Ingresa tu celular</small></p>
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
                    <div class="col-md-6 pt-3">
                        <label for="inputEmail4" class="form-label">Fecha de nacimiento</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="dd/mm/aaaa" />
                    </div>
                    <div class="form-floating pt-3">
                        <p>Descripción sobre mi</p>
                        <textarea class="form-control" placeholder="Cuentanos de ti" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <form class="row g-3" action="homel" method="get">
                        <div class="col-12 py-4 text-center">
                            <button type="submit" class="btn btn-primary">Guardar perfil</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Editarper;