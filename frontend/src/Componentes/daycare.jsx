import React from "react";
import huella from '../Imagenes/huella.png';
import '../Estilos/index.css';

function Daycaren() {
    return (
        <div className="">
            <div className="fullscreen">
                <div className="fondodaycare fondohero background-hero pt-5 p-3 mt-2">
                    <div class="row pt-3 row-cols-1 row-cols-md-3 g-4">
                        <h2 className="text-center pt-3" style={{ color: "white" }}><b>SAL DE CASA SIN PREOCUPACIONES</b></h2>
                    </div>

                </div>
            </div>

            <div className="container text-center">
                <hr className="mx-auto py-3" width={150} />
                <p>Se acabaron las largas horas que te esperan solos en casa mientras vuelves. Nuestros cuidadores estarán felices de recibir a tu mascota cuando tengas que salir de casa a trabajar o hacer alguna vuelta de último minuto. </p>
                <p className="pt-4">Déjanos en casa de un membro de Happy Place cerca de ti, que cuidará de tu peludo y se encargará de sacarlo a hacer sus necesidades y darle su comida. El servicio DAYCARE es una gran opción para:  </p>
                <hr className="mx-auto py-3" width={150} />
                <img src={huella} alt="" />
                <hr className="mx-auto py-3" width={150} />
                <p>Cachorros y perros con mucha energía que no quieres dejar solos en casa, evitando que se estresen y hagan algún daño.</p>
                <hr className="mx-auto py-3" width={150} />
                <img src={huella} alt="" />
                <hr className="mx-auto py-3" width={150} />
                <p>Perro con necesidades especiales, como adultos mayores, que requieran más atencion y dedicación.</p>
                <hr className="mx-auto py-3" width={150} />
                <img src={huella} alt="" />
                <hr className="mx-auto py-3" width={150} />
                <p>Perros con ansiedad por separación y dueños que se van tristes de dejarlos solitos.</p>
            </div>


        </div>

    );
}
export default Daycaren;