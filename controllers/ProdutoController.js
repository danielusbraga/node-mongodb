const Produto = require("../models/Produto")

const ProdutoController = {
    getAll: async (req, res) => {
        res.json( await Produto.find({tipo: {$regex: new RegExp('be  ', 'i')}}) )
    },
    get: async (req, res) => {
        res.json( await Produto.findById(req.params.id) )
    },
    create: async (req, res) => {
        res.json( await Produto.create(req.body) )
    },
    update: async (req, res) => {
        res.json( await Produto.findByIdAndUpdate(req.params.id, req.body) )
    },
    delete: async (req, res) => {
        res.json( await Produto.findByIdAndDelete(req.params.id) )
    },
   
}




module.exports = ProdutoController