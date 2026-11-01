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

// console.log(products[1].name)
// console.log(products[2].price)
// console.log(products.length)
// console.log(products[products.length - 1].name)

products.push(
  {
    id: 4,
    name: "Trens",
    price: 28000,
    category: "tokarka",
    isActive: true
  }
)

// console.log(products.length)
// console.log(products[products.length - 1].name)

// function sayHello(name) {
//   console.log("Hello" + " " + name)
// }

// sayHello('Alex')
// sayHello('Nikolay')

// function showProductName(products) {
//   console.log(products.name)
//   console.log(products.id)
//   console.log(products.price)
// }

// showProductName(products[1])
// showProductName(products[3])


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

// console.log(products.length)

// console.log(products[products.length - 1].name)

// // function getProductPrice(product) {
// //   return product.price
// // }

// // const price = getProductPrice(products[2])
// // console.log(price)

// // function getProductLabel(product) {
// //   return `${product.name} -  ${product.price} pln`
// // }

// // const label = getProductLabel(products[1])
// // console.log(label)

// function getProductCategory(product) {
//   return product.category
// }

// const category = getProductCategory(products[4])
// console.log(category)

// // function getProductInfo(product) {
// //   return `${product.name} | ${product.category} | ${product.price} PLN`
// // }

// // const info = getProductInfo(products[0])
// // console.log(info)

// // const getProductPrice = (product) => {
// //   return product.price;
// // }

// // const getProductName = (product) => {
// //   return product.name;
// // }

// // const getProductPrice = (product) => product.price;

// // const getProductLabel = (product) => `${product.name} - ${product.price} PLN`;

// // const productNames = products.map((product) => {
// //   return product.name
// // });

// // console.log(productNames)

// // const productLabels = products.map((product) => {
// //   return `${product.name} - ${product.price} PLN`
// // });

// // console.log(productLabels)

// // const productPrices = products.map(
// //   (product) => product.price
// // );

// // console.log(productPrices)

// // const activeProducts = products.filter((product) => {
// //   return product.isActive === true
// // });

// // console.log(activeProducts)

// // const expensiveProducts = products.filter((product) => {
// //   return product.price > 15000
// // });

// // console.log(expensiveProducts)

// // const millingProducts = products.filter((product) => {
// //   return product.category === "frezarka"
// // });

// // console.log(millingProducts)

// // const activeMillingProducts = products.filter((product) => {
// //   return (
// //     product.category === "frezarka"
// //     &&
// //     product.isActive === true
// //   );
// // });

// // console.log(activeMillingProducts);

// // const foundProduct = products.find((product) => {
// //   return product.id === 3
// // });

// // console.log(foundProduct)

// // const mazakProduct = products.find((product) => {
// //   return product.name === "Mazak"
// // });

// // console.log(mazakProduct)

// const findProductById = (id) => {
//   return products.find((product) => {
//     return id === product.id
//   })
// };


// const findProductByName = (name) => products.find((product) => product.name === name);

// const hasActiveProducts = products.some((product) => {
//   return product.isActive === true;
// });

// const hasProductWithId3 = products.some((product) => {
//   return product.id === 3;
// });

// console.log(hasProductWithId3)

// const productName = "Mazak CNC Machine";

// const hasMazak = productName.includes("Mazak");

// console.log(hasMazak);

// // const searchedProducts = products.filter((product) => {
// //   return product.name.includes("a");
// // });

// console.log(searchedProducts);

// // const search = "gard";

// // const searchedProducts = products.filter((product) => {
// //   return product.name.toLowerCase().includes(search.toLowerCase())
// // });

// // console.log(searchedProducts);

// // const search = "tok";

// // const searchedProducts = products.filter((product) => {
// //   return (
// //     product.name.toLowerCase().includes(search.toLowerCase())
// //     ||
// //     product.category.toLowerCase().includes(search.toLowerCase())
// //   );
// // });

// // console.log(searchedProducts);

// const search = "tok";

// const searchedProducts = products.filter((product) => {
//   return (
//     (
//       product.name.toLowerCase().includes(search.toLowerCase())
//       ||
//       product.category.toLowerCase().includes(search.toLowerCase())
//     )
//     &&
//     product.isActive === true
//   );
// });

const product = products[3];

const {
  name: productName,
  price,
  isActive
} = product;

console.log(productName);
console.log(price);
console.log(isActive);

const getProductSummary = ({ name, category, price, isActive }) => {
  return `${name} | ${category} | ${price} PLN | ${isActive}`;
};

const summary = getProductSummary(products[4]);

console.log(summary)

const productNew = products[0]

const updatedProduct = {
  ...productNew,
  price: 12000
};

console.log(updatedProduct);

const updatedProduct2 = {
  ...productNew,
  price: 14000,
  isActive: false
};

console.log(updatedProduct2);

const newProducts = {
  id: 6,
  name: "Haas",
  price: 42000,
  category: "frezarka",
  isActive: true
};

const updatedProducts = [
  ...products,
  newProducts
];

console.log(updatedProducts)

const productsWithUpdatedPrice = products.map((product) => {
  if (product.id === 3) {
    return {
      ...product,
      price: 9500
    }
  }
  return product;
});

console.log(productsWithUpdatedPrice);

const productsWithoutId2 = products.filter((product) => {
  return product.id !== 2;
});

console.log(productsWithoutId2);

const productsWithoutId3 = products.filter((product) => {
  return product.id !== 3;
});


const activeProducts = products.filter((product) => {
  return product.isActive === true;
});

const inactiveProducts = products.filter((product) => {
  return product.isActive === false;
});

const cheapProducts = products.filter((product) => {
  return product.price < 10000
});

const activeCheapProducts = products.filter((product) => {
  return product.isActive === true && product.price < 10000
});

const activeMillingProducts2 = products.filter((product) => {
  return (
    product.category === "frezarka" &&
    product.isActive === true
  )
});

const expensiveActiveProducts = products.filter((product) => {
  return (
    product.isActive === true &&
    product.price > 20000
  )
});

const productStatus =
  products[0].isActive === true ? "Active" : "Inactive"

const priceStatus =
  products[0].price > 10000 ? "Expensive" : "Cheap"


const stockStatus =
  products[1].isActive === true ? "Available" : "Unavailable"

const categoryLabel =
  products[2].category === "tokarka" ? "Lathe" : "Other"

const searchText = " Mazak  ";

const cleanSearchText = searchText.trim();

const userSearch = "  TOK  ";

const normalizedSearch = userSearch.trim().toLowerCase()

const title = document.querySelector("#title")

console.log(title)

const changeTitleBtn = document.querySelector("#changeTitleBtn")

// changeTitleBtn.addEventListener("click", () => {
//   console.log("Button clicked")
// });

// changeTitleBtn.addEventListener("click", () => {
//   title.textContent = "Product Catalog"
// })

changeTitleBtn.addEventListener("click", () => {
  if (title.textContent === "Product Catalog") {
    title.textContent = "Catalog System";
  } else {
    title.textContent = "Product Catalog";
  }
});

changeTitleBtn.addEventListener("click", () => {
  title.classList.toggle("highlight")
})

const hideTitleBtn = document.querySelector("#hideTitleBtn")

hideTitleBtn.addEventListener("click", () => {
  title.classList.toggle("hidden")
})

const searchInput = document.querySelector("#searchInput")

const searchBtn = document.querySelector("#searchBtn")

const searchResult = document.querySelector("#searchResult")

searchBtn.addEventListener("click", () => {
  searchResult.textContent = searchInput.value;
})

// searchInput.addEventListener("input", () => {

//   const searchText = searchInput.value.toLowerCase();

//   const liveSearchResults = products.filter((product) => {
//     return product.name.toLowerCase().includes(searchText)
//   });
//   console.log(liveSearchResults)
// });

// searchInput.addEventListener('input', () => {
//   const searchText = searchInput.value.toLowerCase().trim();

//   const liveSearchResults = products.filter((product) => {
//     return product.name.toLowerCase().includes(searchText)
//   });

//   searchResult.textContent = `Found products: ${liveSearchResults.length}`

//   console.log(liveSearchResults)
// })


searchInput.addEventListener('input', () => {

  const searchText = searchInput.value.toLowerCase().trim()

  if (searchText === "") {

    return searchResult.textContent = "Start"


  } else {


    const liveSearchResults = products.filter((product) => {

      return product.name.toLowerCase().includes(searchText)

    })
    searchResult.textContent = `Found products: ${liveSearchResults.length}`

  }
});

searchInput.addEventListener('input', () => {

  const searchText = searchInput.value.toLowerCase().trim()

  if (searchText === "") {
    searchResult.textContent = 'Start';
    return;
  }

  const liveSearchResults = products.filter((product) => {

    return product.name.toLowerCase().includes(searchText);
  })
  if (liveSearchResults.length === 0) {

    return searchResult.textContent = 'No products found';

  }

  searchResult.textContent = `Found products: ${liveSearchResults.length}`;
});


searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase().trim();

  if (searchText === "") {
    searchResult.textContent = 'Start typing...'
    return;
  }

  const activeSearchResults = products.filter((product) => {
    return product.isActive === true &&
      product.name.toLowerCase().includes(searchText)


  })
  searchResult.textContent = `Active products found: ${activeSearchResults.length}`;


  if (activeSearchResults.length === 0) {
    searchResult.textContent = "No active products found"
  }

})


searchInput.addEventListener('input', (event) => {
  const searchText = event.target.value.toLowerCase().trim();
  if (searchText === '') {
    console.log('Empty input');
    return;
  }

  console.log(searchText)
})

searchInput.addEventListener('input', (e) => {

  const searchText = e.target.value.toLowerCase().trim();

  if (searchText === '') {
    searchResult.textContent = 'Start typing...'
    return;
  }

  const liveSearchResults = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText);

  })


  if (liveSearchResults.length === 0) {
    searchResult.textContent = 'No products found'
    return;
  }
  searchResult.textContent = `Found products: ${liveSearchResults.length}`
})

searchInput.addEventListener('input', (e) => {

  const searchText = e.target.value.toLowerCase().trim();

  if (searchText === '') {
    searchResult.textContent = 'Start typing...'
    return;
  }

  const activeSearchResults = products.filter((product) => {
    return product.isActive === true &&
      product.name.toLowerCase().includes(searchText);

  })


  if (activeSearchResults.length === 0) {
    searchResult.textContent = 'No active products found'
    return;
  }
  searchResult.textContent = `Active products found: ${activeSearchResults.length}`
})




