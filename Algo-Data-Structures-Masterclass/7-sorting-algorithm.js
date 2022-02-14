// JavaScript built-in sort()

function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ]

//sort by string length

function compareByLength(str1, str2) {
  return str1.length - str2.length;
}

['Curtis', 'Gilly', 'Hana'].sort(compareByLength);
// ['Hana', 'Gilly', 'Curtis']

//Bubble sort
