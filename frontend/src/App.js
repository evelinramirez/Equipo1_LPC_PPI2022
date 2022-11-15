import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Iniciarsesion from './Paginas/Iniciarsesion';
import Registrarse from './Paginas/Registrarse';
import Paquetesypaseos from './Paginas/Paquetesypaseos';
import Quieroserniñera from './Paginas/Quieroserniñera';
import Buscarniñera from './Paginas/Buscarniñera';
import HomeL from './Paginas/HomeL';
import Comprar from './Paginas/Comprar';
import Niñera from './Paginas/Niñera';
import Editarperfil from './Paginas/Editarperfil';
import Continuar from './Paginas/Continuar';
import Sleepover from './Paginas/Sleepover';
import Daycare from './Paginas/Daycare';
import Opcionesniñeras from './Paginas/Opcionesniñeras';
import Continuarre from './Paginas/Continuar';
import Terminarre from './Paginas/Terminar';
import Paquetesypaseosl from './Paginas/Paquetesypaseosl';
import Quieroserniñeral from './Paginas/Quieroserniñeral';
import Niñeral from './Paginas/Niñeral';
import Continuarl from './Paginas/Continuarl';
import Terminarl from './Paginas/Terminarl';
import Editarmascota from './Paginas/Editarmascota';
import Agregartarjeta from './Paginas/Agregartarjeta';
import Comprarl from './Paginas/Comprarl';
import Perfilniñera from './Paginas/Perfilniñera';
import Perfilniñera2 from './Paginas/Perfilniñera2';
import Buscarniñeral from './Paginas/Buscarniñeral';
import Opcionesniñerasl from './Paginas/Opcionesniñerasl';
import Perfilniñeral from './Paginas/Perfilniñeral';
import Perfilniñera2l from './Paginas/Perfilniñera2l';
import Reserva from './Paginas/Reserva';
import Reservalista from './Paginas/Reservalista';


function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/iniciarsesion' element={<Iniciarsesion/>}/>
        <Route exact path='/registrarse' element={<Registrarse/>}/>
        <Route exact path='/paquetesypaseos' element={<Paquetesypaseos/>}/>
        <Route exact path='/quieroserniñera' element={<Quieroserniñera/>}/>
        <Route exact path='/buscarniñera' element={<Buscarniñera/>}/>
        <Route exact path='/homeL' element={<HomeL/>}/>
        <Route exact path='/comprar' element={<Comprar/>}/>
        <Route exact path='/niñera' element={<Niñera/>}/>
        <Route exact path='/editarperfil' element={<Editarperfil/>}/>
        <Route exact path='/continuar' element={<Continuar/>}/>
        <Route exact path='/sleepover' element={<Sleepover/>}/>
        <Route exact path='/daycare' element={<Daycare/>}/>
        <Route exact path='/opcionesniñeras' element={<Opcionesniñeras/>}/>
        <Route exact path='/continuar' element={<Continuarre/>}/>
        <Route exact path='/terminar' element={<Terminarre/>}/>
        <Route exact path='/paquetesypaseosl' element={<Paquetesypaseosl/>}/>
        <Route exact path='/quieroserniñeral' element={<Quieroserniñeral/>}/>
        <Route exact path='/niñeral' element={<Niñeral/>}/>
        <Route exact path='/continuarl' element={<Continuarl/>}/>
        <Route exact path='/terminarl' element={<Terminarl/>}/>
        <Route exact path='/editarmascota' element={<Editarmascota/>}/>
        <Route exact path='/tarjeta' element={<Agregartarjeta/>}/>
        <Route exact path='/comprarl' element={<Comprarl/>}/>
        <Route exact path='/perfilniñera' element={<Perfilniñera/>}/>
        <Route exact path='/perfilniñera2' element={<Perfilniñera2/>}/>
        <Route exact path='/buscarniñeral' element={<Buscarniñeral/>}/>
        <Route exact path='/opcionesniñerasl' element={<Opcionesniñerasl/>}/>
        <Route exact path='/perfilniñeral' element={<Perfilniñeral/>}/>
        <Route exact path='/perfilniñera2l' element={<Perfilniñera2l/>}/>
        <Route exact path='/reserva' element={<Reserva/>}/>
        <Route exact path='/reservalista' element={<Reservalista/>}/>




      </Routes>
    </Router>
  );
}

export default App;
