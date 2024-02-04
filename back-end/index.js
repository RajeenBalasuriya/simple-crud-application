import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"rajeen123",
    database:"test" 
    
})



// Connect to the database
db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
    } else {
      console.log("Connected to MySQL database");
    }
  });

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

app.get("/books",(req,res)=>{

    const getBooks="SELECT * FROM books"

    db.query(getBooks,(err,data)=>{
        if (err) return res.json(err)
        else return res.json(data)
    })


})

app.listen(8800,()=>{

    console.log("connected to backend123")
})