import React from "react";
import { Link } from 'react-router-dom';

function portada() {
   return (
      <div className="fondo">

         <div className="container pt-5">
            <p className="text-center fw-bold pt-5 pb-3" style={{ color: "#fff", fontSize: "32px" }}>Tus mascotas van a quedar en las mejores manos. </p>

         </div>

         <div className="container">
            <div class="card">
               <div class="card-body">
                  <p className="text-center"><small><b>Elige tu servicio</b></small></p>
                  
                  <p className="text-center">Todos nuestros servicios cuentan con la asistencia de HAPPY PLACE.</p>

                  <form class="row g-3">
                     <div class="col-md-3">
                        <label for="validationDefault04" class="form-label">Servicios</label>
                        <select class="form-select" id="validationDefault04" required>
                           <option selected disabled value=""></option>
                           <option>Sleepover - Hospedaje por noches</option>
                           <option>Day care - Hospedaje por día</option>
                           <option>Dog Walker - Paseos por hora</option>
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
                        <p className="mt-2">Ingresa tu dirección</p>
                        <input type="email" class="form-control" id="inputEmail4"/>
                     </div>
                     
                     <div class="col-sm-12">
                        <Link to="/opcionesniñeras">
                           <button class="btn btn-primary" type="submit">Buscar</button>
                        </Link>

                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>




   );
}
export default portada;