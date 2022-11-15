import React from "react";
import Menu from '../Componentes/menu';
import Terminarre from '../Componentes/terminar';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';



function Continuar() {
    return (
        <div className="Continuar">
            <Menu />
            <Terminarre/>
            <Piedepagina/>

        </div>
    )
}

export default Continuar;