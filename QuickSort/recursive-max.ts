function max(list: number[]): number | null {
  if (list.length === 0) {
    return null;
  }

  if (list.length === 1) {
    return list[0];
  }

  const subMax = max(list.slice(1));

  return subMax === null ? list[0] : Math.max(list[0], subMax);
}

console.log(max([1, 6, 3, 4]));

// MEU MÉTODO
// function max(list: number[]): number {
//     if (list.length === 0) {
//       throw new Error("A lista está vazia");
//     }
  
//     if (list.length === 1) {
//       return list[0];
//     }
  
//     const subMax = max(list.slice(1));
  
//     return Math.max(list[0], subMax);
//   }
  