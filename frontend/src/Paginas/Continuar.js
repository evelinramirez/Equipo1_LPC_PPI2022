import React from "react";
import Menu from '../Componentes/menu';
import Continuarre from '../Componentes/continuar';
import Piedepagina from '../Componentes/piedepagina';



function Continuar() {
    return (
        <div className="Continuar">
            <Menu />
            <Continuarre/>
            <Piedepagina/>

        </div>
    )
}

export default Continuar;