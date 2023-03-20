const findAll = require('../db/dbQueries').findAll
module.exports = (app, client) => {
    app.get("/card", (req, res) => {
        client.query(findAll, (error, result) => {
            if(result){
                res.status(200).json(result.rows)
            }
            else{
                console.log(error)
                res.status(500).json({msg : "Something wrong !! Try later"})
            }
        })
    })
}