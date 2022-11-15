import React from "react";
import Menu from '../Componentes/menu';
import Buscarn from '../Componentes/buscarniñera';
import Piedepagina from '../Componentes/piedepagina';

function Buscarniñera(){
    return (
        <div className="Buscarniñera">
            <Menu/>
            <Buscarn/>
            <Piedepagina/>
            
        </div>
    )
}

export default Buscarniñera;