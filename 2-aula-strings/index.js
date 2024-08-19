const myFirstString = 'Eu posso "citar" coisas';
console.log(myFirstString);

const name = "Roberto";
const greetings = `Olá ${name}`;
console.log(greetings);

const string = new String("hello world!");
console.log(string);

// const s1 = "oi";
// const s2 = new String("tchau");

// console.logs(s1.length);
// console.log(s2.length);

// const s1 = "1+2";
// const s2 = new String("1+2");
// const s3 = new String("1+2");

// console.log(s1 == s2);
// console.log(s1 === s2);
// console.log(s2 === s3);

const s1 = "1+2";
const s2 = new String("1+2");

console.log(s1.valueOf() == s2.valueOf());
console.log(s1.valueOf() === s2.valueOf());

console.log(eval(s1.valueOf()));
console.log(eval(s2.valueOf()));    

