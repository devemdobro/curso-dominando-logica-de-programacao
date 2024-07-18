// const array = [1, 2, 3];
// array.push(4);
// console.log(array);

// const array = [1, 2, 3];
// array.unshift(0);
// console.log(array);

// const array = [1, "word", 3.14, {a: 1}];
// array[0];
// console.log(array[0]);
// console.log(array[3]);

// const array = [1, "word", 3.14, { a: 1 }];

// function search(array, element) {
// 	for (let index = 0; index < array.length; index++) {
// 		if (element === array[index]) {
// 			return index;
// 		}
// 	}
// }

// console.log(search(array, 1));

const array = ["um", "dois", "três", "quatro"];

function deleteElement(array, element){
    const index = search(array, element);
    array.splice(index, 1);
}

function search(array, element) {
	for (let index = 0; index < array.length; index++) {
		if (element === array[index]) {
			return index;
		}
	}
}

console.log(array);
deleteElement(array, "um");
console.log(array);