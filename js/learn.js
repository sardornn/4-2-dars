// HOISTING ------------------------------------
// var userName = 'Muhammad'; // Declare
// var userName = 'Diyor'; // Re-declare
// userName = 'Abu-bakr'; // Re-assign

// let userName = 'Muhammad'; // Declare
// let userName = 'Diyor'; // Re-declare NOT ALLOWED
// userName = 'Diyor'; // Re-assign

// const userName = 'Muhammad'; // Declare
// const userName = 'Diyor'; // Re-declare NOT ALLOWED
// userName = 'Diyor'; // Re-assign NOT ALLOWED
// const userName; // NOT ALLOWED (MUST initialize)

// Hoisting
// console.log(userName);

// var userName = 'Muhammad';

// console.log(userName);

// Temporary Dead Zone (TDZ)
// const userName = 'Muhammad';

// console.log(userName);

// SCOPE ----------------------------
// Global scope

// Function scope

// function sayHello() {
// 	let userName = 'Muhammad';

// 	function bnmm() {
// 		let userName = 'Diyor';
// 	}
// }

// sayHello();

// console.log(userName);

// console.log(userName);

// Lexical Environment and Closure
// Lexical environment

// function add() {
// 	// Outer lexical environment
// 	const firstNumber = 5;

// 	return function () {
// 		// Inner lexical environment
// 		const secondNumber = 6;

// 		return firstNumber + secondNumber;
// 	};
// }

// // Closure
// const addSecondPart = add()
// console.log(addSecondPart());

// Filters

// const clients = [
// 	{
// 		id: 0,
// 		fullName: 'Habibullo Nizomov',
// 		hasDept: true,
// 		age: 40,
// 	},
// 	{
// 		id: 1,
// 		fullName: "Ulug'bek Otabekov",
// 		hasDept: false,
// 		age: 21,
// 	},
// 	{
// 		id: 3,
// 		fullName: 'Sardor Noraliyev',
// 		hasDept: false,
// 		age: 22,
// 	},
// 	{
// 		id: 4,
// 		fullName: 'Akbar Anvarov',
// 		hasDept: true,
// 		age: 23,
// 	},
// ];

// const debtors = [];
// for (let i = 0; i < clients.length; i++) {
// 	if (clients[i].hasDept) {
// 		debtors.push(clients[i]);
// 	}
// }

// console.log(debtors);

// const debtors = clients.filter((c) => c.hasDept);

// const validUsers = clients.filter((c) => c.age > 22);

// console.log(validUsers);
