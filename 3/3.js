var a = "hello world";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(toTitleCase('i am learning typescript'));
