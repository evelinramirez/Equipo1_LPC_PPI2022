import React from "react";
import { Link } from 'react-router-dom';

function Buscarnl() {
    return(
        <div className="container mb-5 pt-5 mt-5">  
          <div className="row">
           <div className="mx-auto text-center py-2">
                <h2>Elige el servicio que necesites</h2>
                <p>Todos nuestros servicios cuentan con la asistencia de HAPPY PLACE.</p>
             </div> 
                       <form class="row g-3">
                        <div class="col-md-3">
                            <label for="validationDefault04" class="form-label">Servicios</label>
                            <select class="form-select" id="validationDefault04" required>
                             <option selected disabled value=""></option>
                             <option>Sleepover - Hospedaje por noches</option>
                             <option>Day care - Hospedaje por día</option>
                             <option>Dog Walker - Paseos por horas</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault04" class="form-label">Tipo de mascota</label>
                            <select class="form-select" id="validationDefault04" required>
                             <option selected disabled value=""></option>
                             <option>Gato</option>
                             <option>Perro de 0-10kg</option>
                             <option>Perro de 11-25kg</option>
                             <option>Perro de 26-46kg</option>
                             <option>Perro de más de 46kg</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault04" class="form-label">Cuidad</label>
                            <select class="form-select" id="validationDefault04" required>
                             <option selected disabled value=""></option>
                             <option>Medellín</option>
                             <option>Bogotá</option>
                             <option>Cali</option>
                             <option>Chía</option>
                             
                            </select>
                        </div>
                        <div class="col-md-4">
                          <label for="validationDefault01" class="form-label"></label>
                          <input type="text" class="form-control" id="validationDefault01" value="Ingresa tu dirección" />
                        </div>
                        <div class="col-12">
                            <Link to="/opcionesniñerasl">
                            <button class="btn btn-primary" type="submit">Buscar</button>
                            </Link>
                            
                        </div>
                        </form>   
            </div>
        </div> 
         
         
               
       
    );
}
export default Buscarnl;