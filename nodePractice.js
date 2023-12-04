// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
let userFirstName = getInput(1)
let userLastName = getInput(2)
console.log("Hello," + userFirstName + " " + userLastName)

console.log(userFirstName.toUpperCase() + " " + userLastName.toUpperCase() + " " + "your name is capitalized.")

console.log(userFirstName[0].toUpperCase()+ "." + " " + userLastName[0].toUpperCase() + "." + " " + "these are your initials.")

console.log(userFirstName[0].toLowerCase() + userLastName.toLowerCase() + ".prsvr@gmail.com")