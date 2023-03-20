const deleteOne = require('../db/dbQueries').deleteOne

module.exports = (app, client) => {
    app.delete("/card/:id", (req, res) => {
        const id = req.params.id
        if(isNaN(id)){
            return res.status(404).json({msg : "This id doesn't exist"})
        }
        client.query(deleteOne, [id], (error, result) => {
            if(result){
                res.status(200).json({msg : "Card deleted successfuly"})
            }
            else{
                console.log(error)
                res.status(500).json({msg : "Something wrong !! try later"})
            }
        })
    })
}