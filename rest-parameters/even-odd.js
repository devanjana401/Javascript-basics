function oddEven(...numbers){
    const odd = numbers.filter(num => num%2 !==0)
    const even = numbers.filter(num => num%2 ==0)
    return {odd , even}
}
const result = oddEven(1,2,3,4,5,6,7,8,9,10)
console.log(result);

