const sequenc = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequenc.id //se id do prod não estiver setado, recebe sequence.id
    produtos[produto.id] = produto //produtos com valor do ID no array vai receber produto inserido
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}