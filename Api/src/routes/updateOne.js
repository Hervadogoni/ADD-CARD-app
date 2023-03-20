const updateOne = require("../db/dbQueries").updateOne

module.exports = (app, client) => {
    app.put("/card/:id", (req, res) => {
        const id = req.params.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        if(isNaN(id)){
            return res.status(404).json({msg : " This id doesn't exist"})
        }
        client.query(updateOne, [id, name, image, price], (error, result) => {
            if(result){
                res.status(200).json({msg : `Card ${id} updated successfuly`})
            }
            else{
                console.log(error)
                res.status(500).json({msg: "Something wrong !!! Try later"})
            }
        })
    })
}