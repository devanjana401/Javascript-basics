//combining arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combine = [...arr1,...arr2];
console.log(combine);

//combining object
const obj1 = {
    name:'Apple',
    color:'Red'
}
const obj2 = {
    taste:'sweet'
}
const obj3 = {...obj1,...obj2};
console.log(obj3);

