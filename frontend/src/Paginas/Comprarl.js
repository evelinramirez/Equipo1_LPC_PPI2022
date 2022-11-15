import React from "react";
import MenuL from '../Componentes/menuL';
import Comprarpl from '../Componentes/comprarl';
import Piedepagina from '../Componentes/piedepagina';

function Comprarl(){
    return (
        <div className="Comprarl">
            <MenuL/>
            <Comprarpl/>
            <Piedepagina/>
            
        </div>
    )
}

export default Comprarl;