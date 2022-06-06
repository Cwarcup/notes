console.log('1-----');
let teddy = 'bear';

console.log(sing());

function sing() {
  console.log('lalalala');
}

const sing2 = function () {
  console.log('oh oh oh');
};

console.log(sing2());

a();

function a() {
  console.log('a');
}

function a() {
  console.log('b');
}

var favoriteFood = 'pizza';

const foodThoughts = function () {
  console.log(`I love ${favoriteFood}`);
  var favoriteFood = 'sushi';
  console.log(`New fav food I love ${favoriteFood}`);
};

foodThoughts();
