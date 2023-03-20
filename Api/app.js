const express = require("express")
const app = express()
const cors = require("cors")
const client = require("./src/db/dbConnexion")

app.use(express.json())
app.use(cors())
client.connect()
        .then(() => console.log("Database connected"))
        .catch(error => console.log(`Database connexion failed`, error))

// End point 

require("./src/routes/findAll")(app, client)
require("./src/routes/createOne")(app, client)
require("./src/routes/updateOne")(app, client)
require("./src/routes/deleteOne")(app, client)



app.listen(5000, () => console.log("App running ..."))