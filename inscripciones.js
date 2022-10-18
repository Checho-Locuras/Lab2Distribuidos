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

app.get('/verMaterias',(req,res)=>{
    let sql="select * from materias";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("resultado");
        res.send(result);
    })
} );

app.listen("3000",()=>{
    console.log("servidor encendido en el puerto 3000")
});