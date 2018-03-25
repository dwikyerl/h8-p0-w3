/*
  Logic Challenge - Mengelompokkan Angka
*/

/**
 * @param {Object[]} animals - an array that contains some animal names
 */

function groupAnimals(animals) {
  const result = [];
  result.push([animals[0]]);
  for (let i = 1; i < animals.length; i++) {
    let animal = animals[i];
    for (let j = 0; j < result.length; j++) {
      if(result[j][0][0] === animal[0]) {
        result[j].push(animal);
        animal = null;
        break;
      }
    }
    if(animal) result.push([animal]);
  }

  result.sort((a, b) => a[0][0] > b[0][0]);

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]