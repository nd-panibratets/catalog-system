const products = [
  {
    id: 1,
    name: "Dackle",
    price: 10000,
    category: "frezarka",
    isActive: true
  },

  {
    id: 2,
    name: "Dugard",
    price: 15000,
    category: "frezarka",
    isActive: false
  },

  {
    id: 3,
    name: "Gild",
    price: 8000,
    category: "tokarka",
    isActive: true
  }
]

console.log(products[1].name)
console.log(products[2].price)
console.log(products.length)
console.log(products[products.length - 1].name)

products.push(
  {
    id: 4,
    name: "Trens",
    price: 28000,
    category: "tokarka",
    isActive: true
  }
)

console.log(products.length)
console.log(products[products.length - 1].name)

function sayHello(name) {
  console.log("Hello" + " " + name)
}

sayHello('Alex')
sayHello('Nikolay')

function showProductName(products) {
  console.log(products.name)
  console.log(products.id)
  console.log(products.price)
}

showProductName(products[1])
showProductName(products[3])


function addProduct(product) {
  products.push(product)
}

const newProduct = {
  id: 5,
  name: "Mazak",
  price: 35000,
  category: "frezarka",
  isActive: true
};

addProduct(newProduct)

console.log(products.length)

console.log(products[products.length - 1].name)