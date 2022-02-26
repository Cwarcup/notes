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

//simple version

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log('ONE PASS COMPLETE');
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);

// ES2015

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// Optimized BubbleSort with noSwaps
// function bubbleSort(arr) {
//   var noSwaps;
//   for (var i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
