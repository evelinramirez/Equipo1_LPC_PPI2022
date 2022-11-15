import React from "react";
import huella from '../Imagenes/huella.png';
import '../Estilos/index.css';

function Sleepovern() {
    return (
        <div className="">
            <div className="fullscreen">
                <div className="fondosleepover fondohero background-hero pt-5 p-3">
                    <div class="row pt-3 row-cols-1 row-cols-md-3 g-4">
                        <h2 className="text-center" style={{ color: "white" }}><b>¡OLVIDATE DE LAS PERRERAS Y LAS JAULAS!</b></h2>
                    </div>

                </div>
            </div>

            <div className="container text-center">
                <hr className="mx-auto py-5" width={150} />
                <p>Encuentra entre diferentes hogares reales el mejor cuidador que recibirá a tu mascota como parte de su familia cuando tengas que ausentarsepor unos días. El servicio SLEEPOVER es una gran opción para: </p>
                <hr className="mx-auto py-3" width={150} />
                <img src={huella} alt="" />
                <hr className="mx-auto py-3" width={150} />
                <p>Mascotas que necesiten de atención, mucho cariño y poder dormir en sus camas o en los lugares que normalmente duermen cuando están en su casa.</p>
                <hr className="mx-auto py-3" width={150} />
                <img src={huella} alt="" />
                <hr className="mx-auto py-3" width={150} />
                <p>Dueños que buscan una alternativa más segura, cerca y personalizada distintas a la guarderías campestres u hoteles caninos.</p>
                <hr className="mx-auto py-3" width={150} />
                <img src={huella} alt="" />
                <hr className="mx-auto py-3" width={150} />
                <p>Para perros y gatos que les guste socializar y conocer nuevos amigos en casa de cuidadores.</p>
            </div>


        </div>

    );
}
export default Sleepovern;