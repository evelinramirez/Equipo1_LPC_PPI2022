import React from "react";
import { Link } from 'react-router-dom';
import niñera1 from '../Imagenes/niñera1.jpg';
import niñera from '../Imagenes/niñera.jfif';

function Opcionesnil() {
  return (
    <div className="container pt-5 mt-3">
      <Link to="/perfilniñeral">
        <div class="card">
            <div class="card-body">
            <div className="row">
                <div className="col"><img src={niñera1} alt="" width={50} /></div>
                <div className="col">
                    <p> <small>Manuela Reyes</small> </p>
                    <p> <small>Las palmas</small> </p>
                </div>
                <div className="col" style={{color:"#00DCFF"}}><b> $38.000</b><small className="" style={{color:"black"}}>por noche</small></div>
            </div>
            <p>Soy una persona amante a la naturaleza y a los animales.soy tranquila,amable, me gusta viajar y salir a caminar con mi perrita. Estoy capacitada de cuidar y albergar perritos en mi casa con todo el amor y cuidado.</p>
            </div>
        </div>
      </Link>
      <Link to="/perfilniñera2l">
        <div class="card mt-5">
            <div class="card-body">
            <div className="row">
                <div className="col"><img src={niñera} alt="" width={50} /></div>
                <div className="col">
                    <p> <small>Sandra Perez</small> </p>
                    <p> <small>San Cristobal</small> </p>
                </div>
                <div className="col" style={{color:"#00DCFF"}}><b> $36.000</b><small className="" style={{color:"black"}}>por noche</small></div>
            </div>
            <p>Hola! Soy Sandra Perez, Tengo 22 años, soy estudiante de la Universidad de Antioquia, Soy de Medellin, siempre he tenido un amor profundo por los animales, pero actualmente no tengo mascotas por cuestiones de tiempo, me considero muy responsable y muy seria con mi trabajo, me gusta pasar tiempo con cualquier tipo de perro o gato ya que son mis dos animales favoritos. Con los huéspedes, haría la actividad que más se acomode a cada uno ya sea salir a caminar o juegos en casa, siempre teniendo en cuenta el bienestar de ellos.</p>
            </div>
        </div>
      </Link>
    </div>
  );
}
export default Opcionesnil;