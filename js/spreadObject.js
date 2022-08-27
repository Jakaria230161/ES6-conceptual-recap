// object
const person = {
    name: "Jakaria",
    age : 24,
    email: "jakariamahmud016@gmail.com",
    id: 1719029,
    address: "Kushtia",
    city : "Dhaka"
}

// object destructuring 
const { name, address, age } = person;

const { name: myName, city } = person;

console.log(name, address, age);
console.log(myName,city);



const user = {
    phone: "01623425987",
    street: "Mirpur 12 DOHS,Road number 11, House number 131",
    friends:["jakaria", "Imran"]
}

const {phone, street,friends} = user;

console.log(phone,street,friends);
console.log(phone,street,friends[0]);