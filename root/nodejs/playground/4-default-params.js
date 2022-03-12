const greeter = (name) => {
  console.log('Hello ' + name);
};

greeter('Curtis'); // Hello Curtis

//what happens when you don't pass in an argument?

greeter(); // Hello undefined

const greeterDefault = (name = 'No Name') => {
  console.log('Hello ' + name);
};

greeterDefault(); // Hello No Name

// similar example
const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: newNameForLabel, stock, rating = 5 } = product;

// transaction() takes in two arguments, type and product(destructed)
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order'); // cannot destructure property 'label' of 'undefined' as it is undefined.

// set default param on the second argument.
// now if no arg is passed, the first argument will still be used.
const transactionDefault = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};

transactionDefault('order');
