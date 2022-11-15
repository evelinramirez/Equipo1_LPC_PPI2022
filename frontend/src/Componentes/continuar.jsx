import React from "react";




function Continuarre() {
    return (
        <div className="container pt-5">
            <div className="row">
                <h1 className="text-center fw-bold pt-5" style={{ color: "#0064A5" }}>CONTINÚA DILIGENCIANDO
                    TUS DATOS</h1>
                <div className="container pb-3">
                    <div className="mx-auto" style={{ maxWidth: "500px" }}>

                        <form class="row g-3" action="terminar" method="get">

                            <div class="col-md-6 pt-5">
                                <label for="inputEmail4" class="form-label">Cuéntanos qué experiencias has tenido con perros y/o gatos.</label>
                                <textarea class="form-control" placeholder="" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="form-floating">
                                <p>¿Qué mascotas has tenido/tienes y cuál ha sido tu rol con respecto a ellas? </p>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="form-floating">
                                <p>¿Qué te motivo hacer parte de HAPPY PLACE? </p>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="form-floating">
                                <p>Cuéntanos un poco más sobre ti: a qué te dedicas, qué te gusta hacer en tus tiempo libre, tu forma de ser, etc.. </p>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="form-floating">
                                <p>¿Por qué piensas que el dueño de una mascota te eligiria a ti como su cuidador/paseador? </p>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="form-floating">
                                <p>¿Qué mascotas has tenido/tienes y cuál ha sido tu rol con respecto a ellas? </p>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="mb-3">
                                <label for="formFileSm" class="form-label">Sube 3 fotos donde se muestre los espacios de tu casa donde vas a cuidar a las mascotas (Archivos PNG o JPG de maximo 1MB</label>
                                <input class="form-control form-control-sm mb-3" id="formFileSm" type="file"/>
                                <input class="form-control form-control-sm mb-3" id="formFileSm" type="file"/>
                                <input class="form-control form-control-sm mb-3" id="formFileSm" type="file"/>
                            </div>
                            <div class="mb-3">
                                <label for="formFileSm" class="form-label">Sube una foto tuya (Archivos PNG o JPG de maximo 1MB</label>
                                <input class="form-control form-control-sm mb-3" id="formFileSm" type="file"/>
                            </div>
                            <div class="mb-3">
                                <label for="formFileSm" class="form-label">Sube una foto de tu mascota (Archivos PNG o JPG de maximo 1MB</label>
                                <input class="form-control form-control-sm mb-3" id="formFileSm" type="file"/>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Terminar registro</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>




    );
}
export default Continuarre;