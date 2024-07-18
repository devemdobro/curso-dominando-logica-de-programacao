const s1 = "1+2";
const s2 = new String("1+2");

console.log(eval(s1.valueOf()));
console.log(eval(s2.valueOf()));