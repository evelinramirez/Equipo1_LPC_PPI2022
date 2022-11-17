import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioRegistro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                Documento: '',
                correo_electronico: '',
                contraseña: '',
                nombre: '',
                apellido: '',
                departamento: '',
                cuidad: ''

            }
        }
    }

    peticionGet = () => {
        axios.get('http://localhost:4001/api/usuarios')
            .then((response) => {
                this.setState({
                    datos: response.data
                });
            }).catch(error => {
                console.log(error.message);
            })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('http://localhost:4001/api/usuarios', this.state.form)
            .then(response => {
                alert(`Bienvenido`)

            }).catch(error => {
                console.log(error.message);
            })

    }


    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }



    render() {

        // const datosForm = this.state.form;
        const data = this.state.datos;
        console.log(data)

        return (

            <div className="fondoregistrarse col-md-8 order-md-1 container my-5">
                <div className="mx-auto text-center py-2">
                    <h1 className="pt-5">Registrarse</h1>
                    <p>Las mascotas no son todo en la vida pero ellas las complementas.</p>
                </div>

                <div className="card p-3 pt-5">
                 <form className="needs-validation" noValidate="">
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label >Nombre</label>
                            <input type="text" className="form-control" name="nombre" id="Usuario" placeholder="Nombres" required="" onChange={this.handleChange} value={data.nombre}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Apellidos</label>
                            <input type="text" className="form-control" name="apellido" id="Usuario" placeholder="apellidos" required="" onChange={this.handleChange} value={data.apellido}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" className="form-control" name="correo_electronico" id="email" placeholder="you@example.com" onChange={this.handleChange} value={data.correo_electronico}></input>
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" name="contraseña" id="Contrasena" onChange={this.handleChange} value={data.contraseña}></input>
                    </div>

                    <div className="mb-3">
                        <label>Departamento</label>
                        <input type="text" className="form-control" name="departamento" id="email" onChange={this.handleChange} value={data.departamento}></input>
                    </div>
                    <div className="mb-3">
                        <label>Cuidad</label>
                        <input type="text" className="form-control" name="cuidad" id="email" onChange={this.handleChange} value={data.cuidad}></input>
                    </div>
                    <hr className="mb-4"></hr>
                    <Link to="/homeL">
                        <button className="btn btn-outline-primary btn-lg btn-block" type="submit" onClick={() => this.peticionPost()} ><font style={{ marginRight: 'vertical-align: inherit' }} >Registrarme</font></button>
                    </Link>
                </form>   
                </div>
                
            </div>

        );
    }
}

export default FormularioRegistro;