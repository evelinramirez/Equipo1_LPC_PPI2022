import React from "react";
import Menu from '../Componentes/menu';
import Paquetes from '../Componentes/paquetesypaseos';
import Piedepagina from '../Componentes/piedepagina';

function Paquetesypaseos(){
    return (
        <div className="Paquetesypaseos">
            <Menu/>
            <Paquetes/>
            <Piedepagina/>
            
        </div>
    )
}

export default Paquetesypaseos;