const { contents } = require("../../models");

module.exports = (req, res) => {
    const categoryFilter = req.query.category;
    const typeFilter = req.query.type;
    contents.findAll({
        where: {
            category: categoryFilter
        }
    }).then((categoryData) => {
        categoryData.findAll({
            type: typeFilter
        })
    }).then((typeData) => {
        typeData.findAll({
            attributes: [
                "id",
                "title",
                "director",
                "year",
                "rating",
                "runtime",
                "summary",
                "genres",
                "image",
                "category",
                "detail",
                "link",
                "type",
                "createdAt",
                "updatedAt"
            ],
            order:[{model: contents}, 'year', ' DESC'],
        }).then((result) => {
            return res.status(200).json({data: result, message: "successfully viewed the data type individual page"})
        })
    })
    .catch((err) => {
        console.log(err)
        return res.status(500).json({ data: null, message: "server error" })
    }) 
};