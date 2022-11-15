import React from "react";
import MenuL from '../Componentes/menuL';
import Editarper from '../Componentes/editarperfil';
import Piedepagina from '../Componentes/piedepagina';


function Editarperfil(){
    return (
        <div className="Editarperfil">
            <MenuL/>
            <Editarper/>
            <Piedepagina/>
                        
        </div>
    )
}

export default Editarperfil;