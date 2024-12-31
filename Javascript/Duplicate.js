// const arr=[1,2,3,4,3,2,1,4,5,6,5,9]

// console.log(arr)

// const result =arr.filter((val,ind,self)=>{
//     return  self.indexOf(val) !== ind
// })

// console.log(result)

// const arr=[1,2,4,2,4,2,6]

// const result =arr.filter((val,ind)=>{
//     return self.indexOf(val) !==ind
// })

// console.log(result)

// find dublicate from an  array 

const arrData=[2,2,4,5,3,5,6,6]
const resultData=arrData.filter((value,ind,self)=>{
return self.indexOf(value) !==ind
})
console.log(resultData)