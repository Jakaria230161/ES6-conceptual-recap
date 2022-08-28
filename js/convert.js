
const Person = [
    { id : "ID01", name : "Jakaria", age : 24},
    { id : "ID02", name : "Jaria", age : 26},
    { id : "ID03", name : "Jakia", age : 29},
    { id : "ID04", name : "Jakir", age : 25}
]


// if available is array then we can use map to get return converted in an object.
// Object.name = "Jakaria";
// obj["name" = "Jakaria"]

const info = {};

Person.map(person => {
    info[person.id] = person.name;
    
})

console.log(info);