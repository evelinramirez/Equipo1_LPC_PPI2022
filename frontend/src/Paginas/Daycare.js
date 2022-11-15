import React from "react";
import Menu from '../Componentes/menu';
import Daycaren from '../Componentes/daycare';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';

function Daycare(){
    return (
        <div className="Daycare">
            <Menu/>
            <Daycaren/>
            <Piedepagina/>
            
        </div>
    )
}

export default Daycare;