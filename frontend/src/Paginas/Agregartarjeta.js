import React from "react";
import MenuL from '../Componentes/menuL';
import Agregartar from '../Componentes/agregartarjeta';
import Piedepagina from '../Componentes/piedepagina';


function Agregartarjeta(){
    return (
        <div className="Agregartarjeta">
            <MenuL/>
            <Agregartar/>
            <Piedepagina/>
                        
        </div>
    )
}

export default Agregartarjeta;