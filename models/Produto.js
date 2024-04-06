const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type:String,
        required: true,
        maxLength: 10,
        uppercase: true

    },
    preco: {
        type: Int16Array,
        required: true
    },
    tamanho: {
        type: String,
        required: true
    }, 
    tipo: String
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto