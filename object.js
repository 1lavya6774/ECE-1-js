

var numberArray = [1, 2, 3];
for (var i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}
var animals = new Array("cat", "dog", "mouse", "lion");
while (animals.length > 0) {
    console.log(animals.pop());
}
var person = {
name: 'Barack Hussein Obama II', age: '51', title: '44th President of the United States' };
for (var key in person) {
    console.log(key + ": " + person[key]);
}