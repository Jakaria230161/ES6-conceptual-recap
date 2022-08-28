
const students = [
    {
        student1: {
            name: "Jakaria",
            age: 24,
            isMale: true,
            education: {
                class: 15,
                subjects: ["Bulugul Maram", "Administrative law", "Company Law", "Business Law", "Labour Law"],
                university: "Islamic University",
                marks: {
                    LabourLaw: 70,
                    CompanyLaw: 80,
                    AdministrativeLaw: 85,
                    BulugulMaram: 90,
                    BusinessLaw: 82
                }
            }
        },

        student2: {
            name: "Jaria",
            age: 20,
            isMale: false,
            education: {
                class: 12,
                subjects: ["Bulugul Maram", "Administrative law", "Company Law", "Business Law", "Labour Law"],
                university: "Islamic University",
                marks: {
                    CompanyLaw: 50,
                    AdministrativeLaw: 75,
                    BusinessLaw: 67
                }
            }
        },

        student3: {
            name: "Jalal",
            age: 25,
            isMale: true,
            education: {
                class: 16,
                subjects: ["Bulugul Maram", "Administrative law", "Company Law", "Business Law", "Labour Law"],
                university: "Islamic University",
                marks: {
                    LabourLaw: 60,
                    AdministrativeLaw: 55,
                    BusinessLaw: 59
                }
            }
        }
    }
]


console.log(students); // all students array

console.log(students[0].student1.education.subjects[1]);
console.log(students[0].student3.education.marks);


students.map(student => {
    for (let item in student) {
        const { name, age, isMale, education } = student[item];
        const { subjects } = education;

        // console.log(name, age);

        const information = `
            My name is ${name}.
            My age is ${age}.
            My gender is ${isMale === true ? "Male" : "female"}
            My all subjects are ${subjects}
        `;
        console.log(information);
        
    }
})