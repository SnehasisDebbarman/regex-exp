const regex = require("./index");

console.log(regex.email.test("test@example.com")); // true
console.log(regex.email.test("invalid.email.com")); // false

console.log(regex.url.test("http://www.example.com")); // true
console.log(regex.url.test("example.com")); // false

console.log(regex.phone.test("123-456-7890")); // true
console.log(regex.phone.test("invalid-phone")); // false

console.log(regex.ssn.test("123-45-6789")); // true
console.log(regex.ssn.test("invalid-ssn")); // false

console.log(regex.ip.test("192.168.0.1")); // true
console.log(regex.ip.test("invalid-ip")); // false

console.log(regex.date.test("2022-01-01")); // true
console.log(regex.date.test("invalid-date")); // false

console.log(regex.creditCard.test("4111111111111111")); // true
console.log(regex.creditCard.test("invalid-card")); // false

console.log(regex.password.test("MyPassw0rd!")); // true
console.log(regex.password.test("weakpassword")); // false
