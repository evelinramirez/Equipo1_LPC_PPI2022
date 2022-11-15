import React from "react";
import MenuL from '../Componentes/menuL';
import Piedepagina from '../Componentes/piedepagina';
import Reserval from '../Componentes/reserva';
import '../Estilos/index.css';

function Reserva() {
    return (
        <div className="Reserva">
            <MenuL />
            <Reserval/>
            <Piedepagina />
            

        </div>
    )
}

export default Reserva;