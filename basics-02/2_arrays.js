const firstname = ["Aman, Rahul, Mayank, Abhishek"];

const surname = ["Pandey, Singh, Prasad, Narine"];
const college = ["NIEC, MAIT, SSBUICET, PEC"];
const fullname = firstname.concat(surname).concat(college);

console.log(fullname);

const fullname2 = [...firstname, ...surname, ...college];

// console.log(fullname2)

console.log(Array.from("Aman Pandey"))