import React from "react";
import Menu from '../Componentes/menu';
import Iniciosesion from '../Componentes/iniciarsesion';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';


function Login(){
    return (
        <div className="Login">
            <Menu/>
            <Iniciosesion/>
            <Piedepagina/>
        </div>
    )
}

export default Login;