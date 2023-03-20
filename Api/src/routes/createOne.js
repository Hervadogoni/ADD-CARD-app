const createOne = require("../db/dbQueries").createOne
module.exports = (app, client) => {
    app.post("/card", (req, res) => {
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        client.query(createOne, [name, image, price] ,(error, result) => {
            if(result){
                res.status(201).json("Card created successfuly")
            }
            else{
                console.log(error)
                res.status(500).json({msg : "Something wrong !! Try later"})
            }
        })
    })
}