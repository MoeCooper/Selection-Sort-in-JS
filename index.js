let num = [23, 1, 45, 2, 3, 565, 2342, 23, 234, 23, 4, 23];

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let min = i;
    let temp = arr[i];
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

selectionSort(num);