
function cred(name, password) {

if (name != password &&
     name.length >= 6 &&
     name.includes("!", "#", "$") &&
     password !== name &&
     password.length >= 6 &&
     password.includes("!", "#", "$") &&
     password != "password") {
     //create an if statement to check if it contains !,#,$
     if (name.includes("!", "#", "$")) {
       //if it contains !,#,$ then name is invalid, if not it is valid
       console.log("invalid")
     } else {
       console.log("valid")
     }
 }
   // create an if statement to check if password includes at least on of !#$ and if b is not equal to "password"
   if ( password != name && password.length >= 6 && password.includes("!", "#", "$")
   && password != "password") {
       // if it contains at least on of !#$ and b does not equal to password, then b is valid
       console.log("valid")
     } else {
       console.log("invalid")
     }
}
console.log("Attempt one");
cred("Willy666", "123345!")
console.log("Attempt two");
cred("Taylor", "5555555")
console.log("Attempt three");
cred("Mowglis","dddd")
