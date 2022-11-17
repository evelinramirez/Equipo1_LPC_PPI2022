import React from "react";
import Menu from '../Componentes/menu';
import Portada from '../Componentes/portada';
import Servicio from "../Componentes/servicio";
import Piedepagina from "../Componentes/piedepagina";


function Inicio(){
    return (
        <div className="Inicio">

            <Menu/>
            <Portada/>
            <Servicio/>
            <Piedepagina/>
        </div>
    )
}

export default Inicio;