import React from "react";
import Menu from '../Componentes/menu';
import Sleepovern from '../Componentes/sleepover';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';

function Sleepover(){
    return (
        <div className="Sleepover">

            <Menu/>
            <Sleepovern/>
            <Piedepagina/>
            
           
        </div>
    )
}

export default Sleepover;