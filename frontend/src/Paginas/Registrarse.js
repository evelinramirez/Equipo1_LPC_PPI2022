import React from "react";
import Menu from '../Componentes/menu';
import Register from '../Componentes/registrarse';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';

function Registrarse(){
    return (
        <div className="Registrarse">
            <Menu/>
            <Register/>
            <Piedepagina/>
        </div>
    )
}

export default Registrarse;