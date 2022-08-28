// Select SCIC student

const students = [
    { name : "Jakaria", email : "jakariamahmud016@gmail.com", avg : 56, fiftyPercent : true},
    { name : "Imran",   email : "jakariamahmud016@gmail.com", avg : 57, fiftyPercent : false},
    { name : "Hridoy",  email : "jakariamahmud016@gmail.com", avg : 42, fiftyPercent : false},
    { name : "Tanim",   email : "jakariamahmud016@gmail.com", avg : 52, fiftyPercent : true},
    { name : "Srabon",  email : "jakariamahmud016@gmail.com", avg : 32, fiftyPercent : false},
    { name : "Riaz",    email : "jakariamahmud016@gmail.com", avg : 37, fiftyPercent : true}
]

const result = students.filter(student => student.avg >= 50 && student.fiftyPercent === true);

console.log(result);

result.map(getChance => {
    const { name, email } = getChance;
    console.log(`${name}, ${email}`);
})

result.map(getAvg => {
    const {name, email, avg } = getAvg;
    console.log(`${name}, ${email},${avg}`);
})
