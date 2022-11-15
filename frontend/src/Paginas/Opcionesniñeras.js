import React from "react";
import Menu from '../Componentes/menu';
import Opcionesni from '../Componentes/opcionesniñeras';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';

function Opcionesniñeras(){
    return (
        <div className="Opcionesniñeras">
            <Menu/>
            <Opcionesni/>
            <Piedepagina/>
            
        </div>
    )
}

export default Opcionesniñeras;