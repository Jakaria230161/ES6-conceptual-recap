
const Boys = [
    { name : "Jakaria", job : "public", salary : 80000},
    { name : "Imran",   job : "public", salary : 20000},
    { name : "Srabon",  job : "private",salary : 40000},
    { name : "Hridoy",  job : "public", salary : 15000},
    { name : "Muzahid", job : "private",salary : 30000},
    { name : "Riaz",    job : "public", salary : 10000}
]


// using filter to find best matching husband for a woman.
const selected = Boys.filter(boy => boy.job === "public" && boy.salary >= 20000 || boy.job === "private" && boy.salary >= 40000);

console.log(selected);

selected.map(getBoy => {
    const { name, salary } = getBoy;
    console.log(`${name}, ${salary}`);
})
