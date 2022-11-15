import React from "react";
import MenuL from '../Componentes/menuL';
import Opcionesnil from '../Componentes/opcionesniñerasl';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';

function Opcionesniñerasl(){
    return (
        <div className="Opcionesniñerasl">
            <MenuL/>
            <Opcionesnil/>
            <Piedepagina/>
            
        </div>
    )
}

export default Opcionesniñerasl;