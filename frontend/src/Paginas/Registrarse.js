import React from "react";
import Menu from '../Componentes/menu';
import Piedepagina from '../Componentes/piedepagina';
import FormularioRegistro from "../Componentes/FormularioRegistro";

import '../Estilos/index.css';

function Registrarse(){
    return (
        <div className="Registrarse">
            <Menu/>
            <FormularioRegistro/>
            <Piedepagina/>
        </div>
    )
}

export default Registrarse;