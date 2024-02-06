import express from "express"
import mysql from "mysql"
import cors from  "cors"

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

  app.use(express.json())
  app.use(cors())
  



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

app.post("/books",(req,res)=>{
  const post = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";

  const values=[
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ]

  db.query(post,[values],(err,data)=>{
    if(err) return res.send(err);
    else res.json(data);
  })
})

app.listen(8800,()=>{

    console.log("connected to backend123")
})