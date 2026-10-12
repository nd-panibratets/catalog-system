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

// function getProductPrice(product) {
//   return product.price
// }

// const price = getProductPrice(products[2])
// console.log(price)

// function getProductLabel(product) {
//   return `${product.name} -  ${product.price} pln`
// }

// const label = getProductLabel(products[1])
// console.log(label)

function getProductCategory(product) {
  return product.category
}

const category = getProductCategory(products[4])
console.log(category)

// function getProductInfo(product) {
//   return `${product.name} | ${product.category} | ${product.price} PLN`
// }

// const info = getProductInfo(products[0])
// console.log(info)

// const getProductPrice = (product) => {
//   return product.price;
// }

// const getProductName = (product) => {
//   return product.name;
// }

const getProductPrice = (product) => product.price;

const getProductLabel = (product) => `${product.name} - ${product.price} PLN`;

const productNames = products.map((product) => {
  return product.name
});

console.log(productNames)

const productLabels = products.map((product) => {
  return `${product.name} - ${product.price} PLN`
});

console.log(productLabels)

const productPrices = products.map(
  (product) => product.price
);

console.log(productPrices)

const activeProducts = products.filter((product) => {
  return product.isActive === true
});

console.log(activeProducts)

const expensiveProducts = products.filter((product) => {
  return product.price > 15000
});

console.log(expensiveProducts)

const millingProducts = products.filter((product) => {
  return product.category === "frezarka"
});

console.log(millingProducts)

const activeMillingProducts = products.filter((product) => {
  return (
    product.category === "frezarka"
    &&
    product.isActive === true
  );
});

console.log(activeMillingProducts);

