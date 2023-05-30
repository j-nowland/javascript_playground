// create a function that can divide object keys and values into singular objects
// and store them inside an array

// objectArray([{first_name: "Jacinta", last_name: "Potato"}])
// ANS: [{first_name: "Jacinta"}, {last_name: "Potato"}]

// const objectArray = arr => arr.reduce(a, b) => {
//   for (let i = 0, i < (b.last_name; i++) {
//     a.push({ ...b, last_name: last_name})
//   }
//   return a
// }, [])


// const obj = {first_name: "Jacinta", last_name: "Potato"}
// create a function that converts objects to
// let {first_name: "Jacinta", last_name: "Potato"} = obj
// const str = `({first_name = "Jacinta", last_name: sirname = "Potato"} = {first_name: Jacinta}).toString()`
// console.log(last_name)

// function reverseWord(str) {
//     return str.split(" ").reverse().join(" ")
// }
// console.log(reverseWord("Jacinta Nowland"))  
//   // Only change code above this line


//             newObj['first_name'] = el.first_name
//             newObj['last_name'] = el.last_name
//             newArray.push(newObj)
//             newObj={}
//         }
//     })
//     return newArray
// }

// // create a function that switch the key and value of an object 
// // useful for debugging

// function objFunc(obj) {
//     return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [value, key]
//     ))
// }
// console.log(objFunc({"name" : "Ali"}))

const patient = {
'firstname': 'John',
'lastname': 'Smith',
'age': '20',
'phone': '1234567890',
'address': '3 king road',
'email': 'hello@gmail.com',
}

console.table(patient)