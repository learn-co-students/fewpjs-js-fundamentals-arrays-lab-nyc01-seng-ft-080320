// Write your solution here!

let pets = ["Milo", "Otis", "Garfield"];

const append = pets.slice(0);
append.push("Odie");
alert(append);

const prepend = pets.slice(0);
prepend.unshift("Odie");
alert(prepend);

const removeLast = pets.slice(0);
removeLast.pop();
alert(removeLast);

const removeFirst = pets.slice(0);
removeFirst.shift();
alert(removeFirst);
