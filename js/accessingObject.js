
const person = {
    name: "Jakaria",
    age: 24,
    contact: {
        phone: "01623425987",
        email : "jakariamahmud016@gmail.com"
    },
    education: {
        schoolName: "Islamic University",
        subjects: [
            { name: "bangla", mark: 90 },
            { name: "english", mark: 97 },
            { name : "math", mark : 98}
            
        ]

    },
        skills: {
        name: "MS Word",
        name: "MS Excel",
        name: "MS Powerpoint"
    }
}

console.log(person.education.schoolName);
console.log(person.education.subjects[2].name);
console.log(person.education.subjects.skills);