import Menul from '../Componentes/menuL';
import Reservalis from '../Componentes/reservalista';
import Piedepagina from '../Componentes/piedepagina';
import '../Estilos/index.css';



function Reservalista() {
    return (
        <div className="Reservalista">
            <Menul />
            <Reservalis/>
            <Piedepagina/>

        </div>
    )
}

export default Reservalista;