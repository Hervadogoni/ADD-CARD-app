const findAll = "SELECT * FROM product;";
const createOne = "INSERT  INTO product (name, image, price)\
                        VALUES($1, $2, $3);"
const updateOne = "UPDATE product SET name = $2, image = $3, price = $4\
                                 WHERE id = $1;"
const deleteOne = "DELETE FROM product WHERE id = $1;"

module.exports = {
    findAll,
    createOne, 
    updateOne,
    deleteOne
}