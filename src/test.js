let currentScore = 1858;
let targetExpConversion = 500;

let remainderExp = currentScore% targetExpConversion;
console.log(remainderExp);

let scoreNeedToCollect = targetExpConversion - remainderExp;

console.log(`The exp that Steve should get is : ${scoreNeedToCollect}`)

