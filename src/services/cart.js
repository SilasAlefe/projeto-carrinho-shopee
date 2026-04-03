// acoes que o carrinho pode fazer

//adicionar item no carrinho
async function addNewItem(userCart, item){
    userCart.push(item)
}
//calcular o total
async function calcTotal(userCart){
    console.log("\n")
    console.log("Shopee total cart:")
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}
//excluir item do carrinho
async function deleteItem(userCart, itemName){
    const index = userCart.findIndex((item) => item.name === itemName.name)

    if (index != -1){
        userCart.splice(index,1)
    }
}
//remover item - diminui um item
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound==-1){
        console.log("Ítem não encontrado")
        return
    }

    if (userCart[indexFound].quantity>1){
        userCart[indexFound].quantity -= 1
    } else if (userCart[indexFound].quantity==1){
        deleteItem(userCart, item)
        return
    }
}
//mostrar todos os itens do carrinho
async function displayCart(userCart){
    console.log("\n")
    for (let valid = 0; valid<userCart.length; valid++){
        console.log(`Nome: ${userCart[valid].name} | Preço ${userCart[valid].price} | Quantidade: ${userCart[valid].quantity} | Subtotal ${userCart[valid].subtotal()}`)
    }
}

export {
    addNewItem,
    calcTotal,
    deleteItem,
    removeItem,
    displayCart
}