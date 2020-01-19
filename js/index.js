const MAX_ARRAY_SIZE = Math.pow(10,4);
const MIN_ARRAY_SIZE = Math.pow(10,0);
const INPUT_INCREMENT = 100;

//send true to use merge sor else selection sort
const sortAndGetData = (array,isMerge)=>{
    let unsortedArray = new Array()
    let t1 = 0, t2 = 0;
    
    unsortedArray = array.slice()
    t1 = performance.now()
    let sortedArray =  (isMerge === true) ? mergeSort(unsortedArray.slice()) : selectionSort(unsortedArray.slice())
    t2 = performance.now()
    let time = (t2 -t1)*5
    
    let data = {
        size:array.length,
        time:time,
        arrayBefore:unsortedArray.slice(),
        arrayAfter:sortedArray
    }
    return data;
}

//get data
const getXYdata = (arrays)=>{
    let x = [];
    let y = [];

    arrays.forEach(element => {
        x.push(element["size"])
        y.push(element["time"])
    });

    data = {
        x:x,
        y:y
    };

    return data;

}



//initalize the array with random values
let array = new Array(MAX_ARRAY_SIZE);
for(let i=0;i<MAX_ARRAY_SIZE;i+=1){
    const randomNum = Math.round(Math.random(0,100)*10000);
    array[i] = randomNum;
}



//For the merge sort
//Merge sort(Average, Best, Worst) = O(n * logn)
let mergeSortArray = array.slice()
let MergeSortData = []
for(let i=1;i<MAX_ARRAY_SIZE;i+=INPUT_INCREMENT){
    //MERGE SORT
    let unsortedArray = mergeSortArray.slice(0,i);
    let data = sortAndGetData(unsortedArray,true)
    MergeSortData.push(data)
}
const mergeSortData = {
    "avg":MergeSortData,
}




//For the selection sort
//Best:  O(n). 
//Worse: O(n2). 

let selectionArray = array.slice()


let avgSelectionSortData = []
for(let i=1;i<MAX_ARRAY_SIZE;i+=INPUT_INCREMENT){
    //MERGE SORT
    let unsortedArray = selectionArray.slice(0,i);
    let data = sortAndGetData(unsortedArray,false)
    avgSelectionSortData.push(data)
}


let bestSelectionSortData = []
selectionArray = mergeSort(selectionArray)
for(let i=1;i<MAX_ARRAY_SIZE;i+=INPUT_INCREMENT){
    //MERGE SORT
    let unsortedArray = selectionArray.slice(0,i);
    let data = sortAndGetData(unsortedArray,false)
    bestSelectionSortData.push(data)
}

selectionArray.reverse()
let worstSelectionSortData = []
for(let i=1;i<MAX_ARRAY_SIZE;i+=INPUT_INCREMENT){
    //MERGE SORT
    let unsortedArray = selectionArray.slice(0,i);
    let data = sortAndGetData(unsortedArray,false)
    worstSelectionSortData.push(data)
}

const selectionSortData = {
    "avg":avgSelectionSortData,
    "best":bestSelectionSortData,
    "worst":worstSelectionSortData
}

//sorting completed
console.log("Merge sort:")
console.log(mergeSortData)

console.log("Selection sort:")
console.log(selectionSortData)

//remove the loading
const loading = document.getElementsByClassName('loading')[0]
loading.style.display = 'none';



//begin plotting
//plotting mergesort
const avgMerge = getXYdata(mergeSortData["avg"])
var mergeSortAvg = {
    x: avgMerge.x,
    y: avgMerge.y,
    type: 'scatter',
    name: 'Avg, Best and Worst case' 
};


//plotting insertion
const avgSelectData = getXYdata(selectionSortData["avg"])
var avgSelect = {
    x: avgSelectData.x,
    y: avgSelectData.y,
    type: 'scatter',
    name: 'Average case'
};

const bestSelectData = getXYdata(selectionSortData["best"])
var bestSelect = {
    x: bestSelectData.x,
    y: bestSelectData.y,
    type: 'scatter',
    name: 'Best case'
    
};

const worstSelectData = getXYdata(selectionSortData["worst"])
var worstSelect = {
    x: worstSelectData.x,
    y: worstSelectData.y,
    type: 'scatter',
    name: 'Worst case'
};
const layout1 = {
    title:"Merge Sort (same:avg,best & worst case)",
    xaxis: {title: 'Size of the array'},
    yaxis: {title: 'Milliseconds Took'},   
}
const data1 = [mergeSortAvg];

const layout2 = {
    title:"Selection Sort",
    xaxis: {title: 'Size of the array'},
    yaxis: {title: 'Milliseconds Took'},    
}
const data2 = [avgSelect,bestSelect,worstSelect]

Plotly.newPlot('myDiv1', data1,layout1);
Plotly.newPlot('myDiv2', data2,layout2);

alert("To see the arrays before and after being sorted check the console :D")

