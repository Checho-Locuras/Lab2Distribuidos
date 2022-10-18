const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistemas"
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("conexion exitosa");
});

app.get('/createdb',(req,res)=>{
    let sql="CREATE DATABASE sistemas_distribuidos";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("resultado");
        res.send("base de datos creada");
    })
} );

app.post('/insertEstudiante',(req,res)=>{
    let sql="INSERT INTO estudiante values (2,'22222222','TI','Antonio','Carrillo','M')";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("resultado");
        res.send("Estudiante Insertado");
    })
} );

app.get('/verEstudiantes',(req,res)=>{
    let sql="select * from estudiantes";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("resultado");
        res.send(result);
    })
} );

app.listen("3001",()=>{
    console.log("servidor encendido en el puerto 3001")
});