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
  var end = end === undefined ? array.length : end;

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

console.log(findBook(books, 'World Religions'));




