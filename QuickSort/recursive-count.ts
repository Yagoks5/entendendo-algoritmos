// Escreva uma função recursiva que contem o
// número de itens em uma lista.

function count<T>(arr: T[]): number {
  if (arr.length === 1) {
    return 1;
  }

  return 1 + count(arr.slice(1));
}

console.log(count([1, 2, 3, 4, 5]));
