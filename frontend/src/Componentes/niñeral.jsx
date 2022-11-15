import React from "react";




function Niñeralr() {
    return (
        <div className="container  pt-5 mt-3">
            <div className="row">
                <h1 className="text-center fw-bold pt-5" style={{ color: "#0064A5" }}>CONTINÚA DILIGENCIANDO
                    TUS DATOS</h1>
                <p className="text-center"> <small> Estamos formando una gran comunidad de verdaderos
                    amantes a mascotas que puedan brindarle tranquilidad y
                    sefuridad a muchos papás de perritos y gaticos cuando tengan
                    que dejarlos, por eso es muy importante que nos cuentes más
                    sobre ti y tu vivienda:</small></p>
                <div className="container pb-3">
                    <div className="mx-auto pt-5" style={{ maxWidth: "500px" }}>

                        <form class="row g-3" action="continuarl" method="get">
                            <div class="col-md-12">
                                <label for="inputEmail4" class="form-label">Dirección</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                                <h10 className="" style={{ color: "#FF0000" }}> <small>Ingresa una dirección</small> </h10>
                            </div>
                            <div class="col-md-12">
                                <label for="inputPassword4" class="form-label">Barrio</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                                <h10 className="" style={{ color: "#FF0000" }}> <small>Ingresa tu barrio</small> </h10>
                            </div>
                            <div class="col-md-12   ">
                                <label for="inputState" class="form-label">Tipo de domicilio</label>
                                <select id="inputState" class="form-select">
                                    <option selected></option>
                                    <option>Apartamento</option>
                                    <option>Casa</option>
                                </select>
                                <h10 className="" style={{ color: "#FF0000" }}> <small>Ingresa el tipo de domicilio</small> </h10>
                            </div>
                            <div class="col-md-12">
                                <label for="inputState" class="form-label">Características del domicilio</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Terraza
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Balcón
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Jardín
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Patio
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Fecha de nacimiento (Debes ser mayor de edad)</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="" />
                            </div>
                            <div class="col-md-12">
                                <label for="inputState" class="form-label">¿Quien vive contigo?</label>
                                <select id="inputState" class="form-select">
                                    <option selected></option>
                                    <option>Solo</option>
                                    <option>Padres</option>
                                    <option>Pareja</option>
                                    <option>Pareja e hijos</option>
                                    <option>Residencia compartida</option>
                                    <option>Varios familiares</option>
                                </select>
                            </div>
                            <div class="form-floating">
                                <p>Cuántas mascotas tiene y de qué tipo son </p>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"></label>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">¿Cuáles servicios quiere prestar?</label>
                                <label for="inputAddress2" class="form-label" className="" style={{ color: "#FF0000" }}><small>(Puedes prestar los que quieras)</small></label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <small>DAY CARE (Hospedaje de día en tu casa).</small> 
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <small>SLEEPOVER (Hospedaje de noche en tu casa).</small> 
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <small>DOG WALKER (Pasear perros por horas).</small> 
                                    </label>
                                </div>

                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Continuar registro</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>




    );
}
export default Niñeralr;