let arr=["Aman","simran","Ravi","Tina","Arsh","karan"];

arr.push("Jasmeen");
console.log(arr);

arr.unshift("zoya")
console.log(arr);

arr.splice('2','3');
console.log(arr);

let arr2=["Anita","Vije"];
let a=arr.concat(arr2);
console.log(a);

let hello=a.map((i)=>{
    return i+" Hello";
})

console.log(hello);