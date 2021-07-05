const diagnonalarraySum = (arr) => {
    let n = arr[0]
    let third = []
    let sumOne = 0
    let sumtwo = 0
    for(let i=0; i <arr.length; i++){
     third.push(arr.splice(1,n))
    }
    for(let j =0; j < third.length; j++)
    {
        n--
     sumOne += third[j][j]
     sumtwo += third[j][n]
     } 

  return Math.abs(sumOne - sumtwo)
}

const ratio = (arr) => {
let positiveRatio =0 , negativeRato = 0, zero = 0 ;
let newArr = []
for(let i=0; i < arr.length; i++){
    if(arr[i] > 0){
     positiveRatio = positiveRatio + 1
    }
    else if(arr[i] < 0){
    negativeRato = negativeRato + 1
    }
    else{
     zero = zero + 1
    }
    
}
newArr = [positiveRatio/5,negativeRato/5,zero/5]
return newArr
}

const deleteString = (string) => {
let arr = string.split("")
let sum = 0;
for(let i=0; i < arr.length; i++){
    if(arr[i] == arr[i+1]){
        sum++
    }

}
return sum;
}

console.log(deleteString("AABA"))