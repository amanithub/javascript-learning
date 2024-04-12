const myArr = [99, 98, 97, 96, 93];

// console.log(myArr[3]);

// myArr.push(0, 6);
// myArr.unshift(0)
// console.log(myArr);

const newArray = myArr.slice(1,3);

console.log(newArray);
console.log("A:", myArr);

const newspArray = myArr.splice(1,3);
console.log(newspArray);
console.log("B:", myArr);