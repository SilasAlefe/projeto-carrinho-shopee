import * as cartService from "./services/cart.js"
import createItem from "./services/itens.js"

//meu carrinho
const myCart = []
const wishList = []

//saudação
console.log("Welcome to your Shopee Cart!")

//representação dos produtos no banco de dados
const item1 = await createItem("Hotwheels ferrari", 20.99, 7)
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3)
const item3 = await createItem("Hotwheels Jaguar", 15.99, 5)

//adicionando itens no carrinho
await cartService.addNewItem(myCart, item1)
await cartService.addNewItem(myCart, item2)
await cartService.addNewItem(myCart, item3)

//adicionando item a lista de desejos
await cartService.addNewItem(wishList, item1)

//Mostrando itens no carrinho
await cartService.displayCart(myCart)

//excluindo itens
await cartService.deleteItem(myCart, item3)

//removendo item

//mostrando o total
console.log(await cartService.calcTotal(myCart))


//Mostrando itens no carrinho
await cartService.displayCart(myCart)

//removendo item
cartService.removeItem(myCart, item2)


//Mostrando itens no carrinho
await cartService.displayCart(myCart)