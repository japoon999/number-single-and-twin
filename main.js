


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var singleNumber = [];
var oddNumber = [];

for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        oddNumber.push([i]);
    } else {
        singleNumber.push([i]);
    }
}

console.log("Cut ededler: " + singleNumber);
console.log("Tek ededler: " + oddNumber);
