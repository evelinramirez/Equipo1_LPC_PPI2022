import React from "react";
import { Link } from 'react-router-dom';

function Iniciosesion() {
    return (
        <div className="fondoiniciarsesion">
         <div className="container pb-5 pt-5 mt-3">
<div className="mx-auto">
    <form action="/homeL" method="get">
        <h1 className="text-center py-5" style={{color:"white"}}>Los ojos de un animal tienen el poder de hablar un gran lenguaje.</h1>
        <div class="card">
            <div class="card-header fw-bold" style={{ color: "#0064A5" }}>
                Iniciar sesión
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Escriba un correo electrónico valido.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ingresa una contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Recordar contraseña</label>
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </div>
            <Link className="nav-link active text-center" to="/registrarse" style={{ color: "#00C6FF" }}> <h5>¿No tienes cuenta?</h5>  </Link>
            <Link className="nav-link active text-center" to="/registrarse" style={{ color: "#00C6FF" }}> <h5>Regístrate</h5> </Link>
        </div>
    </form>
    
</div>

</div>
        </div>
        




    );
}
export default Iniciosesion;