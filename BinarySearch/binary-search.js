function binary_search(list, item) {
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
}
var my_list = ["alberto", "pudim", "yago", "catapora", "jooj"];
var number_list = [1, 3, 5, 7, 9];
console.log(binary_search(number_list, 7)); // 1
console.log(binary_search(number_list, 9)); // 1
console.log(binary_search(my_list, "yago")); // 1
console.log(binary_search(my_list, "nome")); // null
