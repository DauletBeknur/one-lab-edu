//Array.of()
let boxes = Array.of(1, 2, 3);
console.log(boxes.length);

//Array.from()
let products = [100, 350, 80];
let multipliedByTwo = Array.from(products, product => product * 2);
console.log(multipliedByTwo);

//Array.fill()
let numbers = [18, 20, 25];
numbers.fill(500);
console.log(numbers);

//Array.find()
let ages = [5, 14, 17, 18];
let adult = ages.find(age => age === 18);
console.log(adult);

//Array.findIndex()
let bonuses = [200, 350, 200, 780, 1000];
let ind = bonuses.findIndex(function(bonus) {
	return bonus == this;
}, 780);
console.log(ind);

//Array.copyWithin()
let values = [1, 2, 3, 4, 5];
values.copyWithin(2, 1);
console.log(values);

//Array.entries()
let coffeeshops = ['Vanilla', 'Starbacks', 'Daily Coffee'];
console.log(...coffeeshops.entries());

//Array.keys()
let movies = ['Black Swan', 'Fantastic Beasts', 'Freedom Writers'];
console.log(...movies.keys());

//Array.values()
let books = ['The Great Gatsby', 'Extremely Loud and Incredibly Close', 'The Green Book'];
console.log(...books.values());
