const Test = require("./extern");
const test = require("./extern2");

console.log("apps.js");

const test_array = [];

for(let i = 0; i < 10; i++) {
    test_array.push(Test.getInstance());
}

console.log(test_array);
console.log("test", test);