import React from "react";
import Menu from '../Componentes/menu';
import Quieroni from '../Componentes/quieroserniñera';
import Piedepagina from '../Componentes/piedepagina';


function Quieroserniñera(){
    return (
        <div className="Quieroserniñera">
            <Menu/>
            <Quieroni/>
            <Piedepagina/>
            
        </div>
    )
}

export default Quieroserniñera;