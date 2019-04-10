/*
we could implement a BS and return the information at that index
*/

let books = [
    {DD: '002',
    name: 'Computer Science'}, 
    {DD: '155',
    name: 'Plato'}, 
    {DD: '208',
    name: 'World Religions'}
    ]

function findBook(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length-1 : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item.name == value) {
    return array[index];
  } else if (item.name < value) {
    return findBook(array, value, index + 1, end);
  } else if (item.name > value) {
    return findBook(array, value, start, index - 1);
  }
}

// console.log(findBook(books, 'World Religions'));

function tradeMax(arr){
 let max = arr[0] - arr[arr.length-1];
 let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
 
 for (let i = 0; i < arr.length; i++) {
    if(arr[i+1]-arr[i]>max){
      max = arr[i+1]-arr[i];
      return `${days[i]} with a gain of max ${max}$`;
    } 
 }
 return max;
}

// [128, 97, 121, 123, 98, 97, 105]

console.log(tradeMax([128, 97, 121, 123, 98, 97, 105]));




