//Packages
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
var cors = require('cors')

app.use(cors())

//middlewares - ayuda a configurar mis instancias del servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes - para interactuar con la api
app.use(require("./routes/index"))

//Execution - me escuche la aplicacion
app.get('/',(req,res)=> [res.send('Welcome to CXC API-REST ')])
app.listen(5000)
console.log("Server running in http://localhost:5000")
