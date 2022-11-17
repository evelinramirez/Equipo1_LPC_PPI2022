const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields)=>{
        if(!err) {
            return res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { correo_electronico, contraseña, nombre, apellido, departamento, cuidad} = req.body;
  
    let usuario = [ correo_electronico, contraseña, nombre, apellido, departamento, cuidad];
  
    let nuevoUsuario = `INSERT INTO usuario( correo_electronico, contraseña, nombre, apellido, departamento, cuidad) 
    VALUES( ?, SHA1(?),?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;