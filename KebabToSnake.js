/*
Write a function that takes a single string argument and returns snake_cased
version
*/

console.log(kebabToSnake("hello-world"));

function kebabToSnake(str) {
    var word = str.replace("-","_");
    return word;
}