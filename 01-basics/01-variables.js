const accountId = 1
let accountEmail = "abc@email.com"
var accountPassword = "0000" // Don't use var --> scope issues
accountCity = "Noida" // JS allows this, refrain from declaring variables like this
let accountState; // Undefined

// accountId = 2 // Not allowed --> assignment to a constant variable
accountEmail = "qwerty@abc.com"
accountPassword = "1234"
accountCity = "Gurugram"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])