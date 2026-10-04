const product = [
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

console.log(product[1].name)
console.log(product[2].price)
console.log(product.length)
console.log(product[product.length - 1].name)

product.push(
  {
    id: 4,
    name: "Trens",
    price: 28000,
    category: "tokarka",
    isActive: true
  }
)

console.log(product.length)
console.log(product[product.length - 1].name)