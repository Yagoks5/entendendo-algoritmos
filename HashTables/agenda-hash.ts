interface HashTable<T> {
  [key: string]: T;
}

const agenda: HashTable<number> = {};

agenda["Yago"] = 1340;
agenda["Vitao"] = 1450;

console.log(agenda["Yago"]);
console.log(agenda["Vitao"]);
