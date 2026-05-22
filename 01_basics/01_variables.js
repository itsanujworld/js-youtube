const accountId = 144553 
let name = "anuj"
var email = "anuj@gmail.com"
let state
cityName = "faridabad"

// accountId = 12345 // not allowed 
name = "yogesh"
email = "yogo@gmail.com"
cityName = "Delhi"



/*
do not use var use let as a variable because
  there was the issue with the block scope and functional scope
*/

console.table([name ,email, accountId,cityName,state])