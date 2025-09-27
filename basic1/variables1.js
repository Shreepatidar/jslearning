const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

const id = 134
/*
id = 43  not allowed qki const he
*/
let name = "shree"
lastname = "patidar"
contact = "lkdfgh433@gmail.com"
mob = 938920534
let city //print krane pe iski value 
// undefined aaegi agar update bhi 
// nhi hui he to 


var year = 2025

//prefer not to use var

console.log(id);
console.table([id,name,lastname,contact,mob,city])
