/*function sum(a,b){
    console.log(arguments)
    let res=0;
    for(let i in arguments)
    res+=arguments[i]
    return res;
}
console.log(sum(10,20,30));*/

function sum(name, ...args){
    console.log(args)
    let res=0;
    for(let i in args)
    res+=args[i]
    return res;
}
console.log(sum("cvr",10,20,30,40,50));

/*let obj={
    name:"cvr",
    age:20
}
let obj1={
    address:"Hyderabad"
}
let newObj={
    [...obj]
}

console.log(newObj);*/

let arr1=[10,20,30,40];
let arr2=[...arr1];
arr1.push(50);
console.log(arr2);
