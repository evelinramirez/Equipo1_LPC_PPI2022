import React from "react";
import { Link } from 'react-router-dom';
import '../Estilos/index.css';
import logo from '../Imagenes/logo.png';


function Menu() {
    return(
         <div className="header">
          <nav className="navbar navbar-expand-lg bg-light fixed-top">
             <div className="container-fluid">
             <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" width={50} /> <b style={{fontFamily: 'sans-serif'}}>  HAPPY PLACE</b></Link>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/iniciarsesion">Iniciar sesión</Link>
             </li>
              <li className="nav-item">
             <Link className="nav-link active" to="/registrarse">Registrarse</Link>
           </li>
        
             <li className="nav-item">
               <Link className="nav-link active" to="/paquetesypaseos">Paquetes y paseos</Link>
             </li>
             <li className="nav-item">
              <Link className="nav-link active" to="/quieroserniñera ">Quiero ser niñera</Link>
             </li>
            </ul>
                 <form className="d-flex" role="search">
                 <input className="form-control me-2" type="search" placeholder="Encuentra tu niñera" aria-label="Search"/>
                 <button className="btn btn-primary btn btn-primary-outline-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
           </nav>
           

        </div>
         




    );
}
export default Menu;