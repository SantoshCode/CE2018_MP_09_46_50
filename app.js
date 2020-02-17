var xDataChart1 = [0];
var yDataChart1 = [0];

var xDataChart2 = [0];
var yDataChart2 = [0];

var unsorArray = [];
var sortedArr = [];

//==============================================================================================

document.getElementById("randomBtn").addEventListener("click", () => {
  var inputVal = document.getElementById("target").value;
  console.log(inputVal);
  
  unsorArray = Array.apply(null, {length:inputVal}).map(()=>(Math.random() * (100 - 10) + 10).toFixed(2))

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
  sortedArr = []
  xDataChart1.push(inputVal);
  yDataChart1.push((t2 - t1)*5);

  var data = [
    {
      x: xDataChart1,
      y: yDataChart1,
      type: 'scatter',
      line: {
        color: "rgb(0, 255, 0)"
      }
    }
  ];

  var layout = {
    title:"Merge Sort",
    xaxis: {title: 'Size of the array'},
    yaxis: {title: 'Milliseconds Took'},
    
  };

  var layout2 = {
    title:"Selection Sort",
    xaxis: {title: 'Size of the array'},
    yaxis: {title: 'Milliseconds Took'},
  };
  Plotly.plot("chart1", data, layout);

  var t1chart2 = performance.now();
  console.log(selectionSort(unsorArray));
  var t2chart2 = performance.now();

  xDataChart2.push(inputVal);
  yDataChart2.push((t2chart2 - t1chart2)*5);

  var data2 = [
    {
      x: xDataChart2,
      y: yDataChart2,
      type: 'scatter',
      line: {
        color: "rgb(255, 0, 0)"
      }
    }
  ];
  var layout3 = {
    title:"Merge and Selection Sort",
    xaxis: {title: 'Size of the array'},
    yaxis: {title: 'Milliseconds Took'},
  };
  var combinedData = [
    {
      x: xDataChart1,
      y: yDataChart1,
      type: 'scatter',
      line: {
        color: "rgb(0, 255, 0)"
      }
    },
    {
      x: xDataChart2,
      y: yDataChart2,
      type: 'scatter',
      line: {
        color: "rgb(255, 0, 0)"
      }
    }
  ]
  Plotly.plot("chart2", data2, layout2);
  Plotly.plot("chart3", combinedData, layout3);

});
