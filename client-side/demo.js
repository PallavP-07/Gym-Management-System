let a= [1,2,3,4,5,6,7];
let newFun=(data)=>{
    console.log(data)
}

let newFun2=( data,index)=>{
    console.log(data>3);
}
// a.forEach(newFun);

// let b= a.map(newFun);
let c=a.filter(newFun2)