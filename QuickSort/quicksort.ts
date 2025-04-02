// Maneira que consome mais memoria devido a criação de arrays.
function quicksort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const less = arr.slice(1).filter((el) => el <= pivot);
  const greater = arr.slice(1).filter((el) => el > pivot);

  return quicksort(less).concat(pivot, quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3]));

//Maneira que consome menos memória. Trabalha com um array apenas.
function quicksortInPlace(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksortInPlace(arr, low, pivotIndex - 1);
    quicksortInPlace(arr, pivotIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]; // Escolhemos o último elemento como pivô
  let i = low - 1; // Índice do menor elemento

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca elementos menores para a esquerda
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Coloca o pivô na posição correta
  return i + 1; // Retorna o índice do pivô
}

// Testando
const arr = [10, 5, 2, 3];
quicksortInPlace(arr);
console.log(arr); // Saída esperada: [2, 3, 5, 10]
