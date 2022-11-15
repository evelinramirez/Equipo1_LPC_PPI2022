import React from "react";
import Menul from '../Componentes/menuL';
import Terminarrel from '../Componentes/terminarl';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';



function Continuarl() {
    return (
        <div className="Continuar">
            <Menul />
            <Terminarrel/>
            <Piedepagina/>

        </div>
    )
}

export default Continuarl;