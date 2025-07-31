// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
// let results;

// async function getPokemon(url) {
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = await response.json();
//     doStuff(data);
//   }
// }

// function doStuff(data) {
//   results = data;
//   console.log('first: ', results);
// }

// getPokemon(url);
// console.log('second: ', results);

function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

// var addFive;
// var addTen;

const addFive = createAdder(5);
const addTen = createAdder(10);

console.log(addTen(3));