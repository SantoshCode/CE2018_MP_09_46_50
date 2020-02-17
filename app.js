

var xDataChart1 = [0];
var yDataChart1 = [0];

var xDataChart2 = [0];
var yDataChart2 = [0];

var unsorArray = [];
var sortedArr = [];

//==================================================================================

// function mergeSort(unsortedArray) {
//   // No need to sort the array if the array only has one element or empty
//   if (unsortedArray.length <= 1) {
//     return unsortedArray;
//   }
//   // In order to divide the array in half, we need to figure out the middle
//   const middle = Math.floor(unsortedArray.length / 2);

//   // This is where we will be dividing the array into left and right
//   const left = unsortedArray.slice(0, middle);
//   const right = unsortedArray.slice(middle);

//   // Using recursion to combine the left and right
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let resultArray = [],
//     leftIndex = 0,
//     rightIndex = 0;

//   // We will concatenate values into the resultArray in order
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       resultArray.push(left[leftIndex]);
//       leftIndex++; // move left array cursor
//     } else {
//       resultArray.push(right[rightIndex]);
//       rightIndex++; // move right array cursor
//     }
//   }
//   // We need to concat here because there will be one element remaining
//   // from either left OR the right
//   return resultArray
//     .concat(left.slice(leftIndex))
//     .concat(right.slice(rightIndex));
// }

// let selectionSort = arr => {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let min = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       let tmp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = tmp;
//     }
//   }
//   return arr;
// };

//==============================================================================================

// document.getElementById("bestBtn").addEventListener("click", () => {
//   var inputVal = document.getElementById("target").value;
//   console.log(inputVal);

//   for (let i = 0; i < inputVal; i++) {
//     unsorArray[i] = i;
//   }
//   document.getElementById(
//     "gen"
//   ).innerText = `Generating sorted array of size ${inputVal} `;

//   document.getElementById(
//     "arr"
//   ).innerText = `Generated array is ${unsorArray} `;
// });

//==============================================================================================

// document.getElementById("worstBtn").addEventListener("click", () => {
//   var inputVal = document.getElementById("target").value;
//   console.log(inputVal);

//   for (let i = 0; i < inputVal; i++) {
//     unsorArray[i] = inputVal - i;
//   }
//   document.getElementById(
//     "gen"
//   ).innerText = `Generating worst case array of size ${inputVal} `;

//   document.getElementById(
//     "arr"
//   ).innerText = `Generated array is ${unsorArray} `;
// });

//==============================================================================================

document.getElementById("randomBtn").addEventListener("click", () => {
  var inputVal = document.getElementById("target").value;
  console.log(inputVal);

  for (let i = 0; i < inputVal; i++) {
    unsorArray[i] = (Math.random() * (100 - 10) + 10).toFixed(2);
  }
  unsortArray = Array.apply(null, {length:inputVal}).map(()=>(Math.random() * (100 - 10) + 10).toFixed(2))
  document.getElementById(
    "gen"
  ).innerText = `Generating random case array of size ${inputVal} `;

  document.getElementById(
    "arr"
  ).innerText = `Generated array is ${unsorArray} `;
});

//==============================================================================================

document.getElementById("btn").addEventListener("click", () => {
  var inputVal = document.getElementById("target").value;

  var t1 = performance.now();

  sortedArr = mergeSort(unsorArray);

  var t2 = performance.now();

  document.getElementById("sort").innerText = `Sorted array is ${sortedArr} `;

  xDataChart1.push(inputVal);
  yDataChart1.push(t2 - t1);

  var data = [
    {
      x: xDataChart1,
      y: yDataChart1,
      mode: "markers+lines",
      // type: "line",
      type: "scatter",
      // name: 'Spline Shape (1.3)',
      line: {
        shape: "linear",
        smoothing: 1.3,
        color: "rgb(114, 94, 242)"
      }
    }
  ];

  var layout = {
    title: "Merg Sort",
    autosize: false,
    width: 500,
    height: 500,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    },
    font: {
      family: "Lato",
      size: 16,
      color: "rgb(100,150,200)"
    },
    plot_bgcolor: "rgba(200,255,0,0.1)",
    margin: {
      pad: 10
    },
    xaxis: {
      title: "n(Size of array)",
      titlefont: {
        color: "black",
        size: 12
      },
      rangemode: "tozero"
    },
    yaxis: {
      title: "Time elapsed in millisecond",
      titlefont: {
        color: "black",
        size: 12
      },
      rangemode: "tozero"
    }
  };

  var layout2 = {
    title: "Selection Sort",
    autosize: false,
    width: 500,
    height: 500,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    },
    font: {
      family: "Lato",
      size: 16,
      color: "rgb(100,150,200)"
    },
    plot_bgcolor: "rgba(200,255,0,0.1)",
    margin: {
      pad: 10
    },
    xaxis: {
      title: "n(Size of array)",
      titlefont: {
        color: "black",
        size: 12
      },
      rangemode: "tozero"
    },
    yaxis: {
      title: "Time elapsed in millisecond",
      titlefont: {
        color: "black",
        size: 12
      },
      rangemode: "tozero"
    }
  };
  Plotly.plot("chart1", data, layout);

  var t1chart2 = performance.now();
  console.log(selectionSort(unsorArray));
  var t2chart2 = performance.now();

  xDataChart2.push(inputVal);
  yDataChart2.push(t2chart2 - t1chart2);

  var data2 = [
    {
      x: xDataChart2,
      y: yDataChart2,
      mode: "markers+lines",
      // type: "line",
      type: "scatter",
      // name: 'Spline Shape (1.3)',
      line: {
        shape: "linear",
        smoothing: 1.3,
        color: "rgb(255, 0, 0)"
      }
    }
  ];

  Plotly.plot("chart2", data2, layout2);
});
