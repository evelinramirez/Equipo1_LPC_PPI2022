import React from "react";
import Menu from '../Componentes/menu';
import Comprarp from '../Componentes/comprar';
import Piedepagina from '../Componentes/piedepagina';

function Comprar(){
    return (
        <div className="Comprar">
            <Menu/>
            <Comprarp/>
            <Piedepagina/>
            
        </div>
    )
}

export default Comprar;