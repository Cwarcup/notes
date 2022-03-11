// Object property shorthand

const name = 'Curtis';
const userAge = 28;

const user = {
  name: name,
  age: userAge,
  location: 'Vancouver',
};

console.log(user);

// Object Destructuring

const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

//old way
// const label = product.label;
// const stock = product.stock;

//const {properties we want to extract, } = objectToDestructure

//es6 way
const { label: newNameForLabel, stock, rating = 5 } = product;

console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
