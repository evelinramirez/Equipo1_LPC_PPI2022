import React from "react";
import Menul from '../Componentes/menuL';
import Paquetesl from '../Componentes/paquetesypaseosl';
import Piedepagina from '../Componentes/piedepagina';

function Paquetesypaseosl(){
    return (
        <div className="Paquetesypaseosl">
            <Menul/>
            <Paquetesl/>
            <Piedepagina/>
            
        </div>
    )
}

export default Paquetesypaseosl;