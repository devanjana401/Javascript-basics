const students = [
    {name:"Anjana",age:23,grade:'A'},
    {name:"Anju",age:21,grade:'B'}
]

//accessing datas
console.log(students[0].name);
console.log(students[1].age);

//looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})
