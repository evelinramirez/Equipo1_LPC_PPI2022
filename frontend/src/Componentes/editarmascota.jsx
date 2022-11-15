import React from "react";
import { Link } from 'react-router-dom';


function Editarmasco() {
    return (
        <div className="container pt-5 mt-3">
            <Link className="nav-link active" to="/homel" style={{ color: "#00C6FF" }}>Volver a mi perfil</Link>
            <div className="row">
                <h1 className="pt-3">Crea a tu mascota</h1>
                <div class="col-12 mb-3 pt-3 ">
                    <label for="inputAddress2" class="form-label">Tipo de mascota</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Perro</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Gato</small>
                        </label>
                    </div>
                    <div class="col-md-6 pt-3">
                        <label for="inputEmail4" class="form-label">Nombre de tu mascota</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="P. ej. toto" />
                        <p className="" style={{ color: "#FF0000" }}><small>Ingresa un nombre valido</small></p>
                    </div>
                    <div class="col-md-6 pt-3">
                        <label for="inputEmail4" class="form-label">Fecha de nacimiento</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="dd/mm/aaaa" />
                        <p className="" style={{ color: "#FF0000" }}><small>Ingresa una fecha valido</small></p>
                    </div>
                    <label for="inputAddress2" class="form-label">Sexo de mascota</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Macho</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Hembra</small>
                        </label>
                    </div>
                    <label for="inputAddress2" class="form-label">Tamaño de mascota</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>0 - 10 kg</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>11 - 25 kg</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>26 - 45 kg</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>46+ kg</small>
                        </label>
                    </div>
                    <div class="col-md-4 pt-4">
                        <label for="inputState" class="form-label">Raza</label>
                        <select id="inputState" class="form-select">
                            <option selected></option>
                            <option>Affenpinscher</option>
                            <option>Afgano</option>
                            <option>Airdale Terrier</option>
                            <option>Akita</option>
                            <option>Alaska Malamute</option>
                            <option>American Eskimo</option>
                            <option>American Foxhound</option>
                            <option>American pit bull Terrier</option>
                            <option>American Staffodshire - Terrier</option>
                            <option>Australian Terrier</option>
                            <option>Basenji</option>
                            <option>Basset Hound</option>
                            <option>Beagle</option>
                            <option>Bedlington Terrier</option>
                            <option>Bernese de la montaña</option>
                            <option>Bichón Frisé</option>
                            <option>Bloodhound</option>
                            <option>Border Collie</option>
                            <option>Border Terrier</option>
                            <option>Borzoi</option>
                            <option>Boston Terrier</option>
                            <option>Boxer</option>
                            <option>Braco Alemán/Pointer Alemán</option>
                            <option>Briard</option>
                            <option>Bulldog Americo</option>
                            <option>Bulldog Francés</option>
                            <option>Bulldog inglés</option>
                            <option>Bullmastiff</option>
                            <option>Bullterrier</option>
                            <option>Cane Corso</option>
                            <option>Caniche / Poodle</option>
                            <option>Carin Terrier</option>
                            <option>Cavalier King Charles Spaniel</option>
                            <option>Cesky Terrier</option>
                            <option>Chichuahua</option>
                            <option>Chow Chow</option>
                            <option>Clumber Spaniel</option>
                            <option>Cocker Spaniel</option>
                            <option>Collie</option>
                            <option>Coton de Tuléar</option>
                            <option>Crestado Chino</option>
                            <option>Criollo</option>
                            <option>Dachshund / Teckel</option>
                            <option>Deerhound</option>
                            <option>Doberman</option>
                            <option>Dogo Argentino</option>
                            <option>Dogo de Burdeos</option>
                            <option>Dogo del Tibet</option>
                            <option>Dálmata</option>
                            <option>English Foxhound</option>
                            <option>Fila Brasilero</option>
                            <option>Flat Coated Retriever</option>
                            <option>Fox Terrier pelo de alambre</option>
                            <option>Fox Terrier pelo liso</option>
                            <option>Foxhound inglés</option>
                            <option>Galgo </option>
                            <option>Galgo italiano</option>
                            <option>Golden Retriever</option>
                            <option>Gordon Stter</option>
                            <option>Gran Danés / Dogo Alemán</option>
                            <option>Greyhound</option>
                            <option>Husky Siberiano</option>
                            <option>Irish Terrier</option>
                            <option>Irish Setter</option>
                            <option>Irish Wolfhound</option>
                            <option>Jack Russell Terrier</option>
                            <option>Kerrie Blue Terrier</option>
                            <option>Komondor</option>
                            <option>Kuvasz</option>
                            <option>Ladradoodle</option>
                            <option>Labrador Retriever</option>
                            <option>Leonberger</option>
                            <option>Löwchen</option>
                            <option>Maltese</option>
                            <option>Manchester Terrier</option>
                            <option>Mastiff</option>
                            <option>Mastín de los pirineos</option>
                            <option>Mastín Español</option>
                            <option>Mastín Napolitano</option>
                            <option>Minipig</option>
                            <option>Münsterlander</option>
                            <option>Norwich Terrier</option>
                            <option>Ovejero Alemán</option>
                            <option>Parson Russell Terrier</option>
                            <option>Pastor Alemán</option>
                            <option>Pastor Australiano</option>
                            <option>Pastor Australiano Ganedero / Cattle dog</option>
                            <option>Pastor Belga Groenendael</option>
                            <option>Pastor Belga Laekenois</option>
                            <option>Pastor Belga Malinois</option>
                            <option>Pastor Belga Tervveren</option>
                            <option>Pastor Blanco Suizo</option>
                            <option>Pastor de Brie</option>
                            <option>Pastor de los Pirineos</option>
                            <option>Pastor Holandés</option>
                            <option>Pastor Ovejero / Bobtail</option>
                            <option>Pekinés</option>
                            <option>Perro de agua Portugués</option>
                            <option>Perro de agua Español</option>
                            <option>Perro de presa Canario</option>
                            <option>Perro sin Pelo de Perú</option>
                            <option>Pinscher Alemán</option>
                            <option>Pinscher Mniatura</option>
                            <option>Pointer Inglés</option>
                            <option>Pomerania</option>
                            <option>Pomsky</option>
                            <option>Poodle Grande</option>
                            <option>Poodle Pequeño (French Poodle)</option>
                            <option>Pug</option>
                            <option>Puli</option>
                            <option>Rhodesian Ridgeback</option>
                            <option>Rottweiler</option>
                            <option>Sabueso Fino Colombiano</option>
                            <option>Saluki</option>
                            <option>Samoyedo</option>
                            <option>San Bernardo</option>
                            <option>Schnauzer Gigante</option>
                            <option>Schnauzer Mediano</option>
                            <option>Schnauzer Miniatura</option>
                            <option>Scottish Terrier</option>
                            <option>Setter Inglés</option>
                            <option>Shar Pei</option>
                            <option>Shetland Sheepdog</option>
                            <option>Shiba Inu</option>
                            <option>Shih Tzu</option>
                            <option>Springer Spaniel</option>
                            <option>Sussex Spaniel</option>
                            <option>Terranova / Newfoundland</option>
                            <option>Vizsla</option>
                            <option>Weimaraner</option>
                            <option>Welsh Corgi Cardigan</option>
                            <option>Welsh Corgi Pembroke</option>
                        </select>
                    </div>
                    <label for="inputAddress2" class="form-label pt-4">Tipo de mascota</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Concentrado</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Dieta Barf</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Mix</small>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <small>Otra</small>
                        </label>
                    </div>
                    <div class="col-md-4 pt-4">
                        <label for="inputState" class="form-label">Marca de comida</label>
                        <select id="inputState" class="form-select">
                            <option selected></option>
                            <option>Agility</option>
                            <option>Canamor</option>
                            <option>Cat Chow</option>
                            <option>Chef Guau</option>
                            <option>Chunky</option>
                            <option>Chunky - Gatos</option>
                            <option>Diamond</option>
                            <option>Diamond - Gatos</option>
                            <option>Dieta Barf</option>
                            <option>Dog Chow</option>
                            <option>Dogourmet</option>
                            <option>Dr. Clauders</option>
                            <option>Dr. Clauders - Gatos</option>
                            <option>Equilibrio</option>
                            <option>Equilibrio - Gato</option>
                            <option>Eukanuba</option>
                            <option>Evangers</option>
                            <option>Evolve</option>
                            <option>Evolse - Gatos</option>
                            <option>Fancy Feast</option>
                            <option>Felix</option>
                            <option>Hill's</option>
                            <option>Hill's</option>
                            <option>Naturalis</option>
                            <option>Nutra Nuggets</option>
                            <option>Nutra Nuggets - Gatos</option>
                            <option>Nutre Can</option>
                            <option>Nutre Cat</option>
                            <option>Otro</option>
                            <option>Pedigree</option>
                            <option>Pixie</option>
                            <option>Precept</option>
                            <option>Pride</option>
                            <option>Pro Pac</option>
                            <option>Pro Pac - Gatos</option>
                            <option>Proplan</option>
                            <option>Ringo</option>
                            <option>Royal Canin</option>
                            <option>Royal Canin - Gatos</option>
                            <option>Taste of the Wild</option>
                        </select>
                    </div>
                    <input type="email" class="form-control mt-1" id="inputEmail4" placeholder="Referencia. P. ej. Raza Grande" />
                    <div class="form-floating pt-4">
                        <p>Hábitos al comer</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Otros hábitos</p>
                        <textarea class="form-control" placeholder="ej.Sale a pasear en la mañana y en la tarde" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Salud</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Medicamentos</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Miedos</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Comportamiento</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Adicionales</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Veterinaria de confianza</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="form-floating pt-4">
                        <p>Teléfono de la veterinaria</p>
                        <textarea class="form-control" placeholder="ej.dos veces al dia" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"></label>
                    </div>
                    <div class="mb-3 mt-3">
                        <p>Carné de vacunas</p>
                        <label for="formFileSm" class="form-label">Adjunta el carné de vacunas (Archivos PNG o JPG.</label>
                        <input class="form-control form-control-sm mb-3" id="formFileSm" type="file" />
                    </div>
                    <form class="row g-3" action="homel" method="get">
                        <div class="col-12 py-4 text-center">
                            <button type="submit" class="btn btn-primary">Guardar datos de esta mascota</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Editarmasco;